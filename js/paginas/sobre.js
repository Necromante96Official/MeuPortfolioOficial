// ========================================================================
// Sobre: quem sou, trajetória, filosofia, Vibe Coding, competências e
// processo.
// ========================================================================

import { esc, lista } from "../nucleo/dom.js";
import { t, tr } from "../nucleo/idioma.js";
import { icone } from "../componentes/icones.js";
import { cabecalhoDePagina, cabecalhoDeSecao, chamadaContato } from "../componentes/secoes.js";
import { marca } from "../componentes/cartao-projeto.js";
import { competencias, processo } from "../dados/competencias.js";
import { projetoPorSlug } from "../dados/projetos/index.js";
import { recomendacoes } from "../dados/recomendacoes.js";
import { cartaoRecomendacao } from "../componentes/recomendacao.js";

export const pagina = {
  titulo: () => t("sobre.titulo"),
  render,
};

// Os parágrafos do sobre têm <b> de propósito: vêm dos textos da interface
// (fixos no código), nunca de quem visita.
const paragrafos = (chave) => lista(t(chave), (p) => `<p>${p}</p>`);

function render() {
  return `
    ${cabecalhoDePagina("sobre.kicker", "sobre.cabecalho", "sobre.texto")}
    <section class="secao secao--sem-topo">
      <div class="container sobre">
        <div class="sobre__texto">
          <section class="bloco revelar">
            <h2>${esc(t("sobre.quemSouTitulo"))}</h2>
            ${paragrafos("sobre.quemSou")}
          </section>
          <section class="bloco revelar">
            <h2>${esc(t("sobre.filosofiaTitulo"))}</h2>
            <blockquote class="citacao">${esc(t("sobre.cabecalho"))}</blockquote>
            ${paragrafos("sobre.filosofia")}
          </section>
          <section class="bloco revelar">
            <h2>${esc(t("sobre.vibeTitulo"))}</h2>
            ${paragrafos("sobre.vibe")}
          </section>
        </div>
        <aside class="sobre__lateral">
          <section class="painel revelar">
            <h2>${esc(t("sobre.trajetoriaTitulo"))}</h2>
            <ol class="linha-tempo">
              ${lista(
                t("sobre.trajetoria"),
                (item) => `
                  <li>
                    <small>${esc(item.quando)}</small>
                    <strong>${esc(item.titulo)}</strong>
                    <p>${esc(item.texto)}</p>
                  </li>`,
              )}
            </ol>
          </section>
        </aside>
      </div>
    </section>

    <section class="secao secao--sem-topo" id="recomendacao">
      <div class="container">
        ${cabecalhoDeSecao("recomendacao.kicker", "recomendacao.titulo", "recomendacao.texto")}
        ${lista(recomendacoes, (r) => cartaoRecomendacao(r))}
      </div>
    </section>

    <section class="secao secao--faixa" id="competencias">
      <div class="container">
        ${cabecalhoDeSecao("sobre.competenciasKicker", "sobre.competenciasTitulo", "sobre.competenciasTexto")}
        <div class="grade-competencias">${lista(competencias, cartaoCompetencia)}</div>
      </div>
    </section>

    <section class="secao">
      <div class="container">
        <h2 class="titulo-secao revelar">${esc(t("sobre.processoTitulo"))}</h2>
        <ol class="passos passos--linha">
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
    </section>
    ${chamadaContato()}`;
}

function cartaoCompetencia(c) {
  const casos = c.casos.map(projetoPorSlug).filter(Boolean);
  return `
    <article class="competencia revelar" id="competencia-${esc(c.id)}">
      <span class="competencia__icone">${icone(c.icone)}</span>
      <h3>${esc(tr(c.titulo))}</h3>
      <p>${esc(tr(c.texto))}</p>
      <ul class="etiquetas etiquetas--soltas">${lista(c.itens, (s) => `<li>${esc(s)}</li>`)}</ul>
      <div class="competencia__casos">
        <small>${esc(t("sobre.casos"))}</small>
        <ul>
          ${lista(
            casos,
            (p) => `<li><a href="projeto.html?p=${esc(p.slug)}">${marca(p, "marca--pp")}${esc(tr(p).titulo)}</a></li>`,
          )}
        </ul>
      </div>
    </article>`;
}
