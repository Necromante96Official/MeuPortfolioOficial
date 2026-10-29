// ========================================================================
// Peças de seção que se repetem entre as páginas.
// ========================================================================

import { esc } from "../nucleo/dom.js";
import { t } from "../nucleo/idioma.js";
import { icone } from "./icones.js";

// Kicker + título + texto (chaves de texto da interface)
export function cabecalhoDeSecao(kicker, titulo, texto) {
  return `
    <header class="cabecalho-secao revelar">
      <p class="kicker">${esc(t(kicker))}</p>
      <h2 class="titulo-secao">${esc(t(titulo))}</h2>
      ${texto ? `<p class="texto-secao">${esc(t(texto))}</p>` : ""}
    </header>`;
}

// O topo das páginas internas
export function cabecalhoDePagina(kicker, titulo, texto, extra = "") {
  return `
    <header class="pagina-topo">
      <div class="container">
        <p class="kicker revelar">${esc(t(kicker))}</p>
        <h1 class="pagina-topo__titulo revelar">${esc(t(titulo))}</h1>
        <p class="pagina-topo__texto revelar">${esc(t(texto))}</p>
        ${extra}
      </div>
    </header>`;
}

// A chamada final para contato (início e projeto)
export function chamadaContato() {
  return `
    <section class="secao">
      <div class="container">
        <div class="chamada revelar">
          <div>
            <h2>${esc(t("inicio.ctaTitulo"))}</h2>
            <p>${esc(t("inicio.ctaTexto"))}</p>
          </div>
          <a href="contato.html" class="botao botao--primario botao--g">${icone("email")}${esc(t("inicio.ctaBotao"))}</a>
        </div>
      </div>
    </section>`;
}

// "2026-10-29" → "29/10/2026" ou "Oct 29, 2026"
export function dataCurta(iso, idioma) {
  const data = new Date(`${iso}T12:00:00`);
  return data.toLocaleDateString(idioma === "pt" ? "pt-BR" : "en-US", {
    day: "2-digit",
    month: idioma === "pt" ? "2-digit" : "short",
    year: "numeric",
  });
}
