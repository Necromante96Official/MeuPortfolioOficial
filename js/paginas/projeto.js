// ========================================================================
// A página de um projeto (projeto.html?p=slug): uma página só, que monta
// qualquer projeto a partir dos dados.
// ========================================================================

import { esc, lista } from "../nucleo/dom.js";
import { t, tr, numero } from "../nucleo/idioma.js";
import { icone, iconeDoLink, iconeDaCategoria } from "../componentes/icones.js";
import { cartaoProjeto, marca, selo } from "../componentes/cartao-projeto.js";
import { chamadaContato } from "../componentes/secoes.js";
import { projetoPorSlug, relacionados, vizinhos, categorias, grupos } from "../dados/projetos/index.js";

const slug = new URLSearchParams(location.search).get("p");
const projeto = projetoPorSlug(slug);

export const pagina = {
  titulo: () => (projeto ? `${tr(projeto).titulo} | Lucas Tavares` : t("projeto.naoEncontrado")),
  descricao: () => (projeto ? tr(projeto).chamada : null),
  render: () => (projeto ? render(projeto) : naoEncontrado()),
};

function render(p) {
  const txt = tr(p);
  const categoria = categorias.find((c) => c.id === p.categoria);

  return `
    <article class="projeto" style="--cor:${esc(p.cor)}">
      <header class="projeto__topo">
        <div class="container">
          <nav class="trilha revelar" aria-label="Trilha">
            <a href="projetos.html">${esc(t("nav.projetos"))}</a>
            <span aria-hidden="true">/</span>
            <a href="projetos.html?cat=${esc(p.categoria)}">${esc(tr(categoria.nome))}</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">${esc(txt.titulo)}</span>
          </nav>
          <div class="projeto__identidade revelar">
            ${marca(p, "marca--g")}
            <div>
              <div class="projeto__selos">
                ${selo(p.status)}
                <span class="selo">${icone(iconeDaCategoria[p.categoria], "icone icone--p")}${esc(tr(categoria.nome))}</span>
                ${p.grupo ? `<span class="selo">${esc(tr(grupos[p.grupo]))}</span>` : ""}
                ${p.privado ? `<span class="selo">${icone("cadeado", "icone icone--p")}${esc(t("comum.codigoPrivado"))}</span>` : ""}
              </div>
              <h1 class="projeto__titulo">${esc(txt.titulo)}</h1>
            </div>
          </div>
          <p class="projeto__chamada revelar">${esc(txt.chamada)}</p>
          ${p.links.length ? `<div class="projeto__links revelar">${lista(p.links, botaoDeLink)}</div>` : ""}
        </div>
      </header>

      <div class="container">
        ${p.numeros?.length ? `<dl class="numeros numeros--projeto revelar">${lista(p.numeros, (n) => `<div class="numeros__item"><dt>${esc(tr(n.rotulo))}</dt><dd>${esc(numero(n))}</dd></div>`)}</dl>` : ""}

        <div class="projeto__corpo">
          <div class="projeto__principal">
            <section class="bloco revelar">
              <h2>${esc(t("projeto.sobre"))}</h2>
              ${lista(txt.descricao, (par) => `<p>${esc(par)}</p>`)}
            </section>
            <section class="bloco revelar">
              <h2>${esc(t("projeto.destaques"))}</h2>
              <ul class="lista-check">${lista(txt.destaques, (d) => `<li>${icone("ok", "icone icone--p")}<span>${esc(d)}</span></li>`)}</ul>
            </section>
          </div>
          <aside class="projeto__lateral">
            <section class="painel revelar">
              <h2>${esc(t("projeto.papel"))}</h2>
              <p>${esc(txt.papel)}</p>
            </section>
            <section class="painel revelar">
              <h2>${esc(t("projeto.stack"))}</h2>
              <ul class="etiquetas etiquetas--soltas">${lista(p.stack, (s) => `<li>${esc(s)}</li>`)}</ul>
            </section>
            ${p.privado ? `<p class="painel painel--nota revelar">${icone("cadeado", "icone icone--p")}${esc(t("projeto.privadoTexto"))}</p>` : ""}
          </aside>
        </div>

        ${navegacao(p)}
      </div>

      ${secaoRelacionados(p)}
    </article>
    ${chamadaContato()}`;
}

function botaoDeLink(link, i) {
  const ic = iconeDoLink[link.tipo] ?? { linha: "externo" };
  const desenho = ic.marca ? `<img src="${esc(ic.marca)}" alt="" width="18" height="18">` : icone(ic.linha);
  const estilo = i === 0 ? "botao--primario" : "botao--contorno";
  return `<a href="${esc(link.url)}" target="_blank" rel="noopener" class="botao ${estilo}">${desenho}${esc(t(`links.${link.tipo}`))}</a>`;
}

function navegacao(p) {
  const { anterior, proximo } = vizinhos(p);
  return `
    <nav class="vizinhos revelar" aria-label="${esc(t("nav.projetos"))}">
      <a href="projeto.html?p=${esc(anterior.slug)}" class="vizinho">
        <small>${icone("voltar", "icone icone--p")}${esc(t("projeto.anterior"))}</small>
        <strong>${esc(tr(anterior).titulo)}</strong>
      </a>
      <a href="projetos.html" class="vizinho vizinho--centro">${esc(t("projeto.todos"))}</a>
      <a href="projeto.html?p=${esc(proximo.slug)}" class="vizinho vizinho--fim">
        <small>${esc(t("projeto.proximo"))}${icone("seta", "icone icone--p")}</small>
        <strong>${esc(tr(proximo).titulo)}</strong>
      </a>
    </nav>`;
}

function secaoRelacionados(p) {
  const outros = relacionados(p);
  if (!outros.length) return "";
  return `
    <section class="secao">
      <div class="container">
        <h2 class="titulo-secao titulo-secao--p revelar">${esc(t("projeto.relacionados"))}</h2>
        <div class="grade-projetos">${lista(outros, (o) => cartaoProjeto(o))}</div>
      </div>
    </section>`;
}

function naoEncontrado() {
  return `
    <section class="secao vazio vazio--pagina">
      <div class="container">
        <h1 class="titulo-secao">${esc(t("projeto.naoEncontrado"))}</h1>
        <p class="texto-secao">${esc(t("projeto.naoEncontradoTexto"))}</p>
        <a href="projetos.html" class="botao botao--primario">${esc(t("projeto.todos"))}${icone("seta")}</a>
      </div>
    </section>`;
}
