// ========================================================================
// Topo: marca, navegação, troca de idioma e o menu do celular.
// ========================================================================

import { esc, lista, $ } from "../nucleo/dom.js";
import { t, idioma, trocarIdioma } from "../nucleo/idioma.js";
import { icone } from "../componentes/icones.js";

export const paginas = [
  { id: "inicio", href: "index.html", chave: "nav.inicio" },
  { id: "projetos", href: "projetos.html", chave: "nav.projetos" },
  { id: "sobre", href: "sobre.html", chave: "nav.sobre" },
  { id: "contato", href: "contato.html", chave: "nav.contato" },
];

export function renderTopo(paginaAtual) {
  const links = lista(paginas, (p) => {
    // A página de um projeto acende "Projetos"
    const ativa = p.id === paginaAtual || (p.id === "projetos" && paginaAtual === "projeto");
    return `<a href="${p.href}" class="topo__link" ${ativa ? 'aria-current="page"' : ""}>${esc(t(p.chave))}</a>`;
  });

  const botoesIdioma = lista(
    ["pt", "en"],
    (id) =>
      `<button type="button" data-idioma="${id}" aria-pressed="${idioma() === id}">${id === "pt" ? "PT" : "EN"}</button>`,
  );

  return `
    <div class="topo__barra">
      <a class="topo__marca" href="index.html" aria-label="Lucas Tavares, ${esc(t("nav.inicio"))}">
        <img src="favicon.svg" alt="" width="32" height="32">
        <span><strong>Lucas Tavares</strong><small>Necromante96Official</small></span>
      </a>
      <nav class="topo__nav" id="menu-principal" aria-label="Principal">
        ${links}
        <a href="contato.html" class="botao botao--primario topo__cta-celular">${esc(t("nav.falar"))}</a>
      </nav>
      <div class="topo__acoes">
        <div class="idioma" role="group" aria-label="${esc(t("comum.idioma"))}">${botoesIdioma}</div>
        <a href="contato.html" class="botao botao--primario botao--p topo__cta">${esc(t("nav.falar"))}</a>
        <button type="button" class="topo__menu" aria-controls="menu-principal" aria-expanded="false" aria-label="${esc(t("comum.menu"))}">
          ${icone("menu")}
        </button>
      </div>
    </div>`;
}

// Os ouvintes ficam no <header> (delegação): sobrevivem ao redesenho do idioma
export function montarTopo(topo) {
  const alternarMenu = (aberto) => {
    const botao = $(".topo__menu", topo);
    topo.classList.toggle("topo--aberto", aberto);
    document.body.classList.toggle("sem-rolagem", aberto);
    botao.setAttribute("aria-expanded", String(aberto));
    botao.setAttribute("aria-label", t(aberto ? "comum.fechar" : "comum.menu"));
    botao.innerHTML = icone(aberto ? "fechar" : "menu");
  };

  topo.addEventListener("click", (e) => {
    const botaoIdioma = e.target.closest("[data-idioma]");
    if (botaoIdioma) trocarIdioma(botaoIdioma.dataset.idioma);
    if (e.target.closest(".topo__menu")) alternarMenu(!topo.classList.contains("topo--aberto"));
    else if (e.target.closest(".topo__nav a")) alternarMenu(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && topo.classList.contains("topo--aberto")) alternarMenu(false);
  });
}

// A barra ganha fundo quando a página rola (um ouvinte só, passivo)
export function observarRolagem(topo) {
  const atualizar = () => topo.classList.toggle("topo--rolado", scrollY > 8);
  addEventListener("scroll", atualizar, { passive: true });
  atualizar();
}
