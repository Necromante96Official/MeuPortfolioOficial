// ========================================================================
// Entrada do site. Cada HTML diz qual página é (<body data-pagina>);
// aqui se monta o topo, a página e o rodapé, e tudo se redesenha ao
// trocar o idioma.
// ========================================================================

import { $, revelarAoRolar } from "./nucleo/dom.js";
import { t, aoTrocarIdioma, aplicarNoDocumento } from "./nucleo/idioma.js";
import { renderTopo, montarTopo, observarRolagem } from "./layout/topo.js";
import { renderRodape } from "./layout/rodape.js";

// Cada página carrega só o módulo dela
const modulos = {
  inicio: () => import("./paginas/inicio.js"),
  projetos: () => import("./paginas/projetos.js"),
  projeto: () => import("./paginas/projeto.js"),
  sobre: () => import("./paginas/sobre.js"),
  contato: () => import("./paginas/contato.js"),
};

const id = document.body.dataset.pagina;
const topo = $("#topo");
const conteudo = $("#conteudo");
const rodape = $("#rodape");

const { pagina } = await (modulos[id] ?? modulos.inicio)();

function desenhar() {
  topo.classList.remove("topo--aberto");
  document.body.classList.remove("sem-rolagem");
  topo.innerHTML = renderTopo(id);
  rodape.innerHTML = renderRodape();

  // Um contêiner novo a cada desenho: os ouvintes da página antiga vão junto
  const corpo = document.createElement("div");
  corpo.className = "pagina";
  corpo.innerHTML = pagina.render();
  conteudo.replaceChildren(corpo);
  pagina.montar?.(corpo);

  document.title = pagina.titulo();
  const descricao = pagina.descricao?.() ?? t("inicio.texto");
  $('meta[name="description"]')?.setAttribute("content", descricao);

  pularTextoDoAtalho();
  revelarAoRolar();
}

function pularTextoDoAtalho() {
  const atalho = $(".pular-conteudo");
  if (atalho) atalho.textContent = t("comum.pularConteudo");
}

aplicarNoDocumento();
desenhar();
montarTopo(topo);
observarRolagem(topo);
aoTrocarIdioma(desenhar);
document.documentElement.classList.add("pronto");

// O conteúdo nasce depois do carregamento: leva até a âncora do endereço
if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
