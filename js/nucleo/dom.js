// ========================================================================
// Utilidades de DOM: escapar texto, montar listas e animar ao rolar.
// ========================================================================

const ENTIDADES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

// Todo texto vindo dos dados passa por aqui antes de virar HTML
export function esc(texto) {
  return String(texto ?? "").replace(/[&<>"']/g, (c) => ENTIDADES[c]);
}

// Junta uma lista em HTML
export function lista(itens, fn) {
  return (itens ?? []).map(fn).join("");
}

export const $ = (seletor, raiz = document) => raiz.querySelector(seletor);
export const $$ = (seletor, raiz = document) => [...raiz.querySelectorAll(seletor)];

// ------------------------------------------------------------------------
// Revelar ao rolar: elementos com .revelar entram suavemente uma vez só
// ------------------------------------------------------------------------

let observador = null;

export function revelarAoRolar(raiz = document) {
  const alvos = $$(".revelar:not(.visivel)", raiz);
  if (!("IntersectionObserver" in window)) {
    alvos.forEach((el) => el.classList.add("visivel"));
    return;
  }
  observador ??= new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (!e.isIntersecting) continue;
        e.target.classList.add("visivel");
        observador.unobserve(e.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  alvos.forEach((el) => observador.observe(el));
}
