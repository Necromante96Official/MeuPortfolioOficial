// ========================================================================
// Conferência do site (npm run conferir). Sai com erro se achar:
//   - projeto com campo faltando, slug repetido ou categoria/grupo/status
//     que não existe;
//   - slug citado (competências, painel "Agora") que não existe;
//   - chave de texto que existe em um idioma e falta no outro;
//   - arquivo local citado (HTML, CSS, JS, dados) que não existe;
//   - arquivo de código com mais de 500 linhas (a regra da modularidade).
// ========================================================================

import { readFile, readdir, stat } from "node:fs/promises";
import { join, dirname, relative, extname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..");
const LIMITE_DE_LINHAS = 500;
const IGNORAR = new Set([".git", ".claude", "node_modules", "projetos-repositorio"]);
const erros = [];
const erro = (msg) => erros.push(msg);

const importar = (arq) => import(pathToFileURL(join(RAIZ, arq)).href);

// ------------------------------------------------------------------------
// Dados dos projetos
// ------------------------------------------------------------------------

const { projetos, categorias, grupos } = await importar("js/dados/projetos/index.js");
const { competencias } = await importar("js/dados/competencias.js");
const { agora } = await importar("js/dados/perfil.js");
const { iconesDeProjeto } = await importar("js/componentes/icones-projetos.js");

const STATUS = ["producao", "estavel", "ativo", "beta"];
const LINKS = ["site", "repo", "workshop", "discord", "nexus", "curseforge", "youtube"];
const CAMPOS_TEXTO = ["titulo", "chamada", "descricao", "papel", "destaques"];
const idsCategoria = new Set(categorias.map((c) => c.id));
const slugs = new Set();

for (const p of projetos) {
  const nome = p.slug ?? "(sem slug)";
  if (slugs.has(p.slug)) erro(`Projeto repetido: ${nome}`);
  slugs.add(p.slug);
  if (!/^[a-z0-9-]+$/.test(p.slug ?? "")) erro(`${nome}: slug só com minúsculas, números e hífen`);
  if (!idsCategoria.has(p.categoria)) erro(`${nome}: categoria "${p.categoria}" não existe`);
  if (p.grupo && !grupos[p.grupo]) erro(`${nome}: grupo "${p.grupo}" não existe`);
  if (!STATUS.includes(p.status)) erro(`${nome}: status "${p.status}" não existe`);
  if (!/^#[0-9a-f]{6}$/i.test(p.cor ?? "")) erro(`${nome}: cor precisa ser #rrggbb`);
  if (!p.sigla) erro(`${nome}: falta a sigla`);
  if (!iconesDeProjeto[p.icone]) erro(`${nome}: ícone "${p.icone}" não existe em icones-projetos.js`);
  if (!p.stack?.length) erro(`${nome}: falta a stack`);
  for (const l of p.links ?? []) {
    if (!LINKS.includes(l.tipo)) erro(`${nome}: link de tipo "${l.tipo}" não existe`);
    if (!/^https:\/\//.test(l.url)) erro(`${nome}: link sem https: ${l.url}`);
  }
  for (const n of p.numeros ?? []) {
    if (!n.valor || !n.rotulo?.pt || !n.rotulo?.en) erro(`${nome}: número sem valor ou rótulo nos dois idiomas`);
  }
  for (const lado of ["pt", "en"]) {
    for (const campo of CAMPOS_TEXTO) {
      const v = p[lado]?.[campo];
      if (!v || (Array.isArray(v) && !v.length)) erro(`${nome}: falta ${lado}.${campo}`);
    }
  }
}

for (const c of competencias) {
  for (const s of c.casos) if (!slugs.has(s)) erro(`Competência "${c.id}" cita projeto inexistente: ${s}`);
}
for (const a of agora) if (!slugs.has(a.slug)) erro(`Painel "Agora" cita projeto inexistente: ${a.slug}`);

const { recomendacoes } = await importar("js/dados/recomendacoes.js");
for (const r of recomendacoes) {
  for (const s of r.projetos) if (!slugs.has(s)) erro(`Recomendação "${r.id}" cita projeto inexistente: ${s}`);
  if (r.trecho.pt.length !== r.trecho.en.length) erro(`Recomendação "${r.id}": trechos com tamanhos diferentes em PT e EN`);
}

// ------------------------------------------------------------------------
// Textos da interface: as mesmas chaves nos dois idiomas
// ------------------------------------------------------------------------

const { pt } = await importar("js/textos/pt.js");
const { en } = await importar("js/textos/en.js");

function chaves(obj, prefixo = "") {
  return Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === "object" && !Array.isArray(v) ? chaves(v, `${prefixo}${k}.`) : [`${prefixo}${k}`],
  );
}
const cPt = new Set(chaves(pt));
const cEn = new Set(chaves(en));
for (const k of cPt) if (!cEn.has(k)) erro(`Texto só em português: ${k}`);
for (const k of cEn) if (!cPt.has(k)) erro(`Texto só em inglês: ${k}`);

// Toda chave t("...") usada no código existe
const arquivos = await listar(RAIZ);
for (const arq of arquivos.filter((a) => a.startsWith("js/"))) {
  const codigo = await readFile(join(RAIZ, arq), "utf8");
  for (const [, chave] of codigo.matchAll(/\bt\(\s*"([\w.]+)"/g)) {
    if (!cPt.has(chave) && !chaves(pt).some((k) => k.startsWith(`${chave}.`))) erro(`${arq}: chave de texto inexistente "${chave}"`);
  }
}

// ------------------------------------------------------------------------
// Arquivos: referências locais e tamanho
// ------------------------------------------------------------------------

for (const arq of arquivos) {
  const ext = extname(arq);
  if (![".html", ".css", ".js", ".mjs", ".json"].includes(ext)) continue;
  const texto = await readFile(join(RAIZ, arq), "utf8");

  const linhas = texto.split("\n").length;
  if ([".css", ".js", ".mjs"].includes(ext) && linhas > LIMITE_DE_LINHAS) {
    erro(`${arq}: ${linhas} linhas (máximo ${LIMITE_DE_LINHAS}); divida pelas partes que ele já tem`);
  }

  const refs = [
    ...texto.matchAll(/(?:href|src)="([^"#?:]+\.(?:html|css|js|svg|png|webp|json))"/g),
    ...texto.matchAll(/from\s+"(\.{1,2}\/[^"]+)"/g),
    ...texto.matchAll(/import\(?\s*"(\.{1,2}\/[^"]+)"/g),
    ...texto.matchAll(/"(assets\/[^"]+)"/g),
  ].map((m) => m[1]);

  for (const ref of refs) {
    if (ref.startsWith("/") || ref.includes("${")) continue;
    // Caminhos de assets/ e das páginas são relativos à raiz do site
    const base = ref.startsWith(".") ? dirname(arq) : ext === ".html" ? dirname(arq) : "";
    const alvo = join(base, ref);
    if (!(await existe(join(RAIZ, alvo)))) erro(`${arq}: aponta para "${ref}", que não existe`);
  }
}

// ------------------------------------------------------------------------

async function listar(pasta) {
  const saida = [];
  for (const item of await readdir(pasta, { withFileTypes: true })) {
    if (IGNORAR.has(item.name)) continue;
    const completo = join(pasta, item.name);
    if (item.isDirectory()) saida.push(...(await listar(completo)));
    else saida.push(relative(RAIZ, completo).replaceAll("\\", "/"));
  }
  return saida;
}

async function existe(caminho) {
  try {
    await stat(caminho);
    return true;
  } catch {
    return false;
  }
}

if (erros.length) {
  console.error(`✗ ${erros.length} problema(s):\n${erros.map((e) => `  - ${e}`).join("\n")}`);
  process.exit(1);
}
console.log(`✓ ${projetos.length} projetos, ${cPt.size} textos por idioma, ${arquivos.length} arquivos conferidos.`);
