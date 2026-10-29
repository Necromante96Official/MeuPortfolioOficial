// ========================================================================
// Recomendação: o trecho da carta entre aspas, com quem assinou.
// ========================================================================

import { esc, lista } from "../nucleo/dom.js";
import { t, tr, idioma } from "../nucleo/idioma.js";
import { icone } from "./icones.js";
import { dataCurta } from "./secoes.js";

export function cartaoRecomendacao(r, { compacto = false } = {}) {
  const paragrafos = compacto ? tr(r.trecho).slice(0, 1) : tr(r.trecho);
  const nota = tr(r.traducao);

  return `
    <figure class="recomendacao ${compacto ? "recomendacao--compacta" : ""} revelar">
      <span class="recomendacao__aspas" aria-hidden="true">“</span>
      <blockquote>${lista(paragrafos, (p) => `<p>${esc(p)}</p>`)}</blockquote>
      <figcaption class="recomendacao__autora">
        <span class="recomendacao__inicial" aria-hidden="true">${esc(r.autora.charAt(0))}</span>
        <span>
          <strong>${esc(r.autora)}</strong>
          <small>${esc(tr(r.cargo))}</small>
        </span>
        <span class="recomendacao__selo">${icone("ok", "icone icone--p")}${esc(tr(r.assinatura))} · ${esc(dataCurta(r.data, idioma()))}</span>
      </figcaption>
      ${nota ? `<p class="recomendacao__nota">${esc(nota)}</p>` : ""}
      ${compacto ? "" : `<p class="recomendacao__pedido">${esc(t("recomendacao.aPedido"))} <a href="contato.html">${esc(t("nav.contato"))}</a></p>`}
    </figure>`;
}
