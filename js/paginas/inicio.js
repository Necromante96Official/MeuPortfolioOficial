// ========================================================================
// Página inicial: apresentação, painel "Agora", números, destaques,
// áreas, processo, stack e chamada para contato.
// ========================================================================

import { esc, lista } from "../nucleo/dom.js";
import { t, tr, numero, idioma } from "../nucleo/idioma.js";
import { icone, iconeDaCategoria } from "../componentes/icones.js";
import { cartaoProjeto, marca } from "../componentes/cartao-projeto.js";
import { cabecalhoDeSecao, chamadaContato, dataCurta } from "../componentes/secoes.js";
import { perfil, redes, numeros, agora } from "../dados/perfil.js";
import { competencias, processo } from "../dados/competencias.js";
import { categorias, projetoPorSlug, projetosEmDestaque, contarPorCategoria } from "../dados/projetos/index.js";
import { recomendacoes } from "../dados/recomendacoes.js";
import { cartaoRecomendacao } from "../componentes/recomendacao.js";

export const pagina = {
  titulo: () => t("inicio.titulo"),
  render,
};

function render() {
  return `
    ${hero()}
    ${faixaDeNumeros()}
    <section class="secao" id="destaques">
      <div class="container">
        ${cabecalhoDeSecao("inicio.destaqueKicker", "inicio.destaqueTitulo", "inicio.destaqueTexto")}
        <div class="grade-destaques">${lista(projetosEmDestaque(), (p, i) => cartaoProjeto(p, { grande: i < 2 }))}</div>
        <div class="secao__acao revelar">
          <a href="projetos.html" class="botao botao--contorno">${esc(t("comum.verTodos"))}${icone("seta")}</a>
        </div>
      </div>
    </section>
    <section class="secao secao--sem-topo" id="recomendacao">
      <div class="container">
        ${cabecalhoDeSecao("recomendacao.kicker", "recomendacao.titulo", "recomendacao.texto")}
        ${lista(recomendacoes, (r) => cartaoRecomendacao(r))}
      </div>
    </section>
    ${areas()}
    ${secaoProcesso()}
    ${faixaDeStack()}
    ${chamadaContato()}`;
}

// ------------------------------------------------------------------------
// Hero
// ------------------------------------------------------------------------

function hero() {
  return `
    <section class="hero">
      <div class="container hero__grade">
        <div class="hero__texto">
          <p class="pilula pilula--ok revelar"><span class="pilula__ponto"></span>${esc(t("inicio.disponivel"))}</p>
          <h1 class="hero__nome revelar">Lucas <span>Tavares</span></h1>
          <p class="hero__papel revelar">${esc(t("inicio.papel"))}</p>
          <p class="hero__chamada revelar">${esc(t("inicio.chamada"))}</p>
          <p class="hero__descricao revelar">${esc(t("inicio.texto"))}</p>
          <div class="hero__acoes revelar">
            <a href="projetos.html" class="botao botao--primario botao--g">${esc(t("inicio.ctaProjetos"))}${icone("seta")}</a>
            <a href="contato.html" class="botao botao--contorno botao--g">${icone("email")}${esc(t("inicio.ctaContato"))}</a>
          </div>
          <ul class="hero__redes revelar">
            ${lista(
              redes,
              (r) => `
                <li><a href="${esc(r.url)}" target="_blank" rel="noopener" title="${esc(r.nome)}" aria-label="${esc(r.nome)}">
                  <img src="${esc(r.icone)}" alt="" width="18" height="18">
                </a></li>`,
            )}
          </ul>
        </div>
        ${painelAgora()}
      </div>
    </section>`;
}

function painelAgora() {
  const itens = lista(agora, (item) => {
    const p = projetoPorSlug(item.slug);
    if (!p) return "";
    return `
      <li>
        <a href="projeto.html?p=${esc(p.slug)}" class="agora__item">
          ${marca(p, "marca--p")}
          <span class="agora__texto"><strong>${esc(tr(p).titulo)}</strong><small>${esc(tr(item.rotulo))}</small></span>
          <span class="selo__ponto selo__ponto--${esc(p.status)}" aria-hidden="true"></span>
        </a>
      </li>`;
  });

  return `
    <aside class="agora revelar" aria-labelledby="agora-titulo">
      <div class="agora__cabeca">
        <span class="agora__luzes" aria-hidden="true"><i></i><i></i><i></i></span>
        <span id="agora-titulo" class="agora__titulo">${icone("pulso", "icone icone--p")}${esc(t("inicio.painelTitulo"))}<small>${esc(t("inicio.painelSub"))}</small></span>
      </div>
      <ul class="agora__lista">${itens}</ul>
      <p class="agora__rodape">${esc(t("inicio.painelRodape"))} ${esc(dataCurta(perfil.atualizadoEm, idioma()))}</p>
    </aside>`;
}

// ------------------------------------------------------------------------
// Faixas e seções
// ------------------------------------------------------------------------

function faixaDeNumeros() {
  return `
    <section class="container" aria-label="${esc(t("inicio.destaqueKicker"))}">
      <dl class="numeros revelar">
        ${lista(numeros, (n) => `<div class="numeros__item"><dt>${esc(tr(n.rotulo))}</dt><dd>${esc(numero(n))}</dd></div>`)}
      </dl>
    </section>`;
}

function areas() {
  return `
    <section class="secao" id="areas">
      <div class="container">
        ${cabecalhoDeSecao("inicio.areasKicker", "inicio.areasTitulo", "inicio.areasTexto")}
        <div class="grade-areas">
          ${lista(
            categorias,
            (c) => `
              <a href="projetos.html?cat=${esc(c.id)}" class="area revelar" style="--cor:var(--cat-${esc(c.id)})">
                <span class="area__icone">${icone(iconeDaCategoria[c.id])}</span>
                <strong>${esc(tr(c.nome))}</strong>
                <small>${esc(t("projetos.contagem", { n: contarPorCategoria(c.id) }))}</small>
                <span class="area__ir">${icone("seta", "icone icone--p")}</span>
              </a>`,
          )}
        </div>
      </div>
    </section>`;
}

function secaoProcesso() {
  return `
    <section class="secao secao--faixa" id="processo">
      <div class="container processo">
        <div class="processo__intro revelar">
          <p class="kicker">${esc(t("inicio.processoKicker"))}</p>
          <h2 class="titulo-secao">${esc(t("inicio.processoTitulo"))}</h2>
          <p class="texto-secao">${esc(t("inicio.processoTexto"))}</p>
          <a href="sobre.html" class="link-seta">${esc(t("nav.sobre"))}${icone("seta", "icone icone--p")}</a>
        </div>
        <ol class="passos">
          ${lista(
            processo,
            (p, i) => `
              <li class="passo revelar">
                <span class="passo__numero">0${i + 1}</span>
                <h3>${esc(tr(p.titulo))}</h3>
                <p>${esc(tr(p.texto))}</p>
              </li>`,
          )}
        </ol>
      </div>
    </section>`;
}

function faixaDeStack() {
  const itens = [...new Set(competencias.flatMap((c) => c.itens))];
  const metade = Math.ceil(itens.length / 2);
  const linha = (grupo, reversa) => `
    <div class="letreiro ${reversa ? "letreiro--reverso" : ""}">
      <ul class="letreiro__trilho">
        ${lista([...grupo, ...grupo], (s, i) => `<li ${i >= grupo.length ? 'aria-hidden="true"' : ""}>${esc(s)}</li>`)}
      </ul>
    </div>`;

  return `
    <section class="secao secao--compacta" aria-labelledby="stack-titulo">
      <div class="container">
        <p class="kicker kicker--centro revelar">${esc(t("inicio.stackKicker"))}</p>
        <h2 id="stack-titulo" class="titulo-secao titulo-secao--centro revelar">${esc(t("inicio.stackTitulo"))}</h2>
      </div>
      ${linha(itens.slice(0, metade), false)}
      ${linha(itens.slice(metade), true)}
    </section>`;
}
