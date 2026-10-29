// ========================================================================
// Todos os projetos: busca, filtro por categoria e a grade.
// O filtro e a busca ficam no endereço (?cat=game&q=java) para poder
// compartilhar e voltar sem perder.
// ========================================================================

import { esc, lista, $, revelarAoRolar } from "../nucleo/dom.js";
import { t, tr } from "../nucleo/idioma.js";
import { icone } from "../componentes/icones.js";
import { cartaoProjeto } from "../componentes/cartao-projeto.js";
import { cabecalhoDePagina } from "../componentes/secoes.js";
import { projetos, categorias, contarPorCategoria } from "../dados/projetos/index.js";

export const pagina = {
  titulo: () => t("projetos.titulo"),
  render,
  montar,
};

function estadoDaUrl() {
  const params = new URLSearchParams(location.search);
  const cat = params.get("cat");
  return {
    cat: categorias.some((c) => c.id === cat) ? cat : "todos",
    busca: params.get("q") ?? "",
  };
}

let estado = estadoDaUrl();

function render() {
  const filtros = [
    { id: "todos", nome: t("projetos.todos"), n: projetos.length },
    ...categorias.map((c) => ({ id: c.id, nome: tr(c.nome), n: contarPorCategoria(c.id) })),
  ];

  return `
    ${cabecalhoDePagina("projetos.kicker", "projetos.cabecalho", "projetos.texto")}
    <section class="secao secao--sem-topo">
      <div class="container">
        <div class="filtros revelar">
          <label class="busca">
            ${icone("busca")}
            <span class="visualmente-oculto">${esc(t("projetos.busca"))}</span>
            <input type="search" id="busca" placeholder="${esc(t("projetos.busca"))}" value="${esc(estado.busca)}" autocomplete="off">
          </label>
          <div class="chips" role="group" aria-label="${esc(t("projetos.kicker"))}">
            ${lista(
              filtros,
              (f) =>
                `<button type="button" class="chip" data-cat="${esc(f.id)}" aria-pressed="${estado.cat === f.id}">${esc(f.nome)}<span>${f.n}</span></button>`,
            )}
          </div>
        </div>
        <p class="contagem" id="contagem" aria-live="polite"></p>
        <div class="grade-projetos" id="grade"></div>
      </div>
    </section>`;
}

function montar(raiz) {
  const busca = $("#busca", raiz);

  raiz.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-cat]");
    if (chip) {
      estado.cat = chip.dataset.cat;
      raiz.querySelectorAll("[data-cat]").forEach((b) => b.setAttribute("aria-pressed", String(b === chip)));
      atualizar(raiz);
    }
    if (e.target.closest("[data-limpar]")) {
      estado = { cat: "todos", busca: "" };
      busca.value = "";
      raiz.querySelectorAll("[data-cat]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.cat === "todos")));
      atualizar(raiz);
    }
  });

  busca.addEventListener("input", () => {
    estado.busca = busca.value;
    atualizar(raiz);
  });

  atualizar(raiz);
}

// ------------------------------------------------------------------------
// Filtrar e redesenhar só a grade
// ------------------------------------------------------------------------

// Sem acento e em minúsculas, para "traducao" achar "Tradução"
const normalizar = (s) =>
  String(s)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

function combina(projeto, termo) {
  if (!termo) return true;
  const txt = tr(projeto);
  const alvo = normalizar([txt.titulo, txt.chamada, ...projeto.stack].join(" "));
  return normalizar(termo)
    .split(/\s+/)
    .filter(Boolean)
    .every((parte) => alvo.includes(parte));
}

function atualizar(raiz) {
  const achados = projetos.filter(
    (p) => (estado.cat === "todos" || p.categoria === estado.cat) && combina(p, estado.busca.trim()),
  );

  $("#contagem", raiz).textContent =
    achados.length === 1 ? t("projetos.contagemUm") : t("projetos.contagem", { n: achados.length });

  $("#grade", raiz).innerHTML = achados.length
    ? lista(achados, (p) => cartaoProjeto(p))
    : `<div class="vazio">
         <p>${esc(t("projetos.nenhum"))}</p>
         <button type="button" class="botao botao--contorno" data-limpar>${esc(t("projetos.limpar"))}</button>
       </div>`;

  revelarAoRolar(raiz);
  guardarNaUrl();
}

function guardarNaUrl() {
  const params = new URLSearchParams(location.search);
  estado.cat === "todos" ? params.delete("cat") : params.set("cat", estado.cat);
  estado.busca.trim() ? params.set("q", estado.busca.trim()) : params.delete("q");
  const query = params.toString();
  history.replaceState(null, "", query ? `?${query}` : location.pathname);
}
