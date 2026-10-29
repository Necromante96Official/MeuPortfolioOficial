// ========================================================================
// Cartão de projeto: usado na vitrine, na lista e nos relacionados.
// ========================================================================

import { esc, lista } from "../nucleo/dom.js";
import { t, tr, numero } from "../nucleo/idioma.js";
import { icone, iconeDaCategoria } from "./icones.js";
import { iconeDeProjeto } from "./icones-projetos.js";
import { categorias } from "../dados/projetos/index.js";

const nomeCategoria = Object.fromEntries(categorias.map((c) => [c.id, c.nome]));

// Selo de status com o pontinho colorido
export function selo(status) {
  return `<span class="selo selo--${esc(status)}"><span class="selo__ponto"></span>${esc(t(`status.${status}`))}</span>`;
}

// A marca do projeto: o ícone dele sobre a cor dele (a sigla fica de reserva)
export function marca(projeto, tamanho = "") {
  const desenho = iconeDeProjeto(projeto.icone) || esc(projeto.sigla);
  return `<span class="marca ${tamanho}" style="--cor:${esc(projeto.cor)}" aria-hidden="true">${desenho}</span>`;
}

export function cartaoProjeto(projeto, { grande = false } = {}) {
  const txt = tr(projeto);
  const stack = projeto.stack.slice(0, grande ? 5 : 4);
  const sobra = projeto.stack.length - stack.length;

  return `
    <a class="cartao ${grande ? "cartao--grande" : ""} revelar" href="projeto.html?p=${esc(projeto.slug)}" style="--cor:${esc(projeto.cor)}">
      <div class="cartao__topo">
        ${marca(projeto)}
        <div class="cartao__meta">
          <span class="cartao__categoria">${icone(iconeDaCategoria[projeto.categoria], "icone icone--p")}${esc(tr(nomeCategoria[projeto.categoria]))}</span>
          ${selo(projeto.status)}
        </div>
      </div>
      <h3 class="cartao__titulo">${esc(txt.titulo)}</h3>
      <p class="cartao__texto">${esc(txt.chamada)}</p>
      ${grande && projeto.numeros?.length ? numerosDoCartao(projeto) : ""}
      <div class="cartao__rodape">
        <ul class="etiquetas">
          ${lista(stack, (s) => `<li>${esc(s)}</li>`)}
          ${sobra > 0 ? `<li class="etiquetas__mais">+${sobra}</li>` : ""}
        </ul>
        <span class="cartao__ir">${icone("seta")}</span>
      </div>
    </a>`;
}

function numerosDoCartao(projeto) {
  return `
    <dl class="cartao__numeros">
      ${lista(
        projeto.numeros.slice(0, 3),
        (n) => `<div><dt>${esc(tr(n.rotulo))}</dt><dd>${esc(numero(n))}</dd></div>`,
      )}
    </dl>`;
}
