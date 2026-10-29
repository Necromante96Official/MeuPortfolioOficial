// ========================================================================
// Todos os projetos, as categorias e as consultas que as páginas usam.
//
// Formato de um projeto:
//   slug        endereço da página (projeto.html?p=slug)
//   categoria   web | game | tool | translation | institucional
//   grupo       projetos da mesma família aparecem como relacionados
//   destaque    entra na vitrine da página inicial
//   privado     código fechado (o site mostra "código privado")
//   status      producao | estavel | ativo | beta
//   cor, icone  a marca do projeto no cartão (icone: js/componentes/icones-projetos.js)
//   sigla       reserva, se o ícone faltar
//   links       [{ tipo, url }]  tipos: site repo workshop discord nexus curseforge youtube
//   stack       tecnologias
//   numeros     [{ valor, valorEn?, rotulo: { pt, en } }]
//   pt / en     titulo, chamada, descricao[], papel, destaques[]
// ========================================================================

import { jogos } from "./jogos.js";
import { web } from "./web.js";
import { ferramentas } from "./ferramentas.js";
import { fisiohub } from "./fisiohub.js";

// A ordem desta lista é a ordem em que os projetos aparecem
const ordem = [
  "ancient-souls",
  "rpg-skills-mod",
  "fisiohub",
  "nexustranslator",
  "forbidden-legacy",
  "traducoes-jogos-mods",
  "claudio-editor",
  "controle-financeiro",
  "rpg-skills-site",
  "forbidden-legacy-patchs",
  "deck-building-system",
  "zenfisio-coletor",
  "zenfisio-notificar",
  "zenfisio-alerta",
  "attendance-declaration",
  "obs-overlay",
  "mo2tools",
];

const todos = [...jogos, ...web, ...ferramentas, ...fisiohub];
const porSlug = new Map(todos.map((p) => [p.slug, p]));

export const projetos = ordem.map((slug) => porSlug.get(slug)).filter(Boolean);

// ------------------------------------------------------------------------
// Categorias (o filtro da página de projetos)
// ------------------------------------------------------------------------

export const categorias = [
  { id: "game", nome: { pt: "Jogos e mods", en: "Games and mods" } },
  { id: "web", nome: { pt: "Web e PWA", en: "Web and PWA" } },
  { id: "tool", nome: { pt: "Ferramentas", en: "Tools" } },
  { id: "translation", nome: { pt: "Tradução", en: "Translation" } },
  { id: "institucional", nome: { pt: "Saúde / UFRGS", en: "Health / UFRGS" } },
];

export const grupos = {
  "rpg-skills": { pt: "Família RPG Skills", en: "RPG Skills family" },
  forbidden: { pt: "Ecossistema Forbidden Legacy", en: "Forbidden Legacy ecosystem" },
  fisiohub: { pt: "Clínica ESEFID/UFRGS", en: "ESEFID/UFRGS clinic" },
  traducao: { pt: "Tradução", en: "Translation" },
};

// ------------------------------------------------------------------------
// Consultas
// ------------------------------------------------------------------------

export function projetoPorSlug(slug) {
  return porSlug.get(slug) ?? null;
}

export function projetosEmDestaque() {
  return projetos.filter((p) => p.destaque);
}

export function contarPorCategoria(id) {
  return projetos.filter((p) => p.categoria === id).length;
}

// Mesmo grupo primeiro; completa com a mesma categoria até `limite`
export function relacionados(projeto, limite = 3) {
  const outros = projetos.filter((p) => p.slug !== projeto.slug);
  const mesmoGrupo = projeto.grupo ? outros.filter((p) => p.grupo === projeto.grupo) : [];
  const mesmaCategoria = outros.filter((p) => p.categoria === projeto.categoria && !mesmoGrupo.includes(p));
  return [...mesmoGrupo, ...mesmaCategoria].slice(0, limite);
}

// O anterior e o próximo na ordem da lista (dá a volta)
export function vizinhos(projeto) {
  const i = projetos.indexOf(projeto);
  const n = projetos.length;
  return { anterior: projetos[(i - 1 + n) % n], proximo: projetos[(i + 1) % n] };
}
