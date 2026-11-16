// ========================================================================
// As peças que entram dentro de um passo ({ tipo: ... } nos dados):
//   copiar      um texto pronto com botão Copiar      { texto: "bio" }
//   checklist   lista de marcar com barra de progresso { id, zeraTodoDia, grupos }
//   lista       lista com bolinhas                     { titulo, itens, estilo? }
//   dica        quadro dourado de dica                 { html }
//   atencao     quadro de cuidado                      { html }
//   semana      o calendário da semana modelo          { dias }
//   ideias      lista numerada que abre ao tocar       { titulo, itens }
//   cartoes     cartões de título, como e por quê      { itens }
//   capas       as capas de destaque para baixar
//   legenda     o montador de legenda
//   numeros     o painel do mês
//   calendario  as datas especiais do ano
// Depois de pôr o HTML na página, montarPecas() liga os botões.
// ========================================================================

import { TEXTOS_PRONTOS } from "./textos-prontos.js";
import { htmlDasCapas, montarCapas } from "./capas.js";
import { htmlMontadorDeLegenda, montarMontadorDeLegenda } from "./montador-de-legenda.js";
import { htmlPainelDoMes, montarPainelDoMes } from "./painel-do-mes.js";
import { htmlCalendario } from "./datas.js";
import { ligarCopiar } from "./copiar.js";
import { lerLista, guardarLista } from "./armazem.js";

// Avisa a página que algo foi marcado (o painel "Seu dia hoje" escuta).
export const avisarMudanca = () => document.dispatchEvent(new CustomEvent("andy:mudou"));

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function htmlCopiar(id) {
  const { titulo, texto, limite } = TEXTOS_PRONTOS[id];
  const contagem = limite ? `<p class="contagem">${[...texto].length} de ${limite} letras permitidas</p>` : "";
  return `
    <div class="copiavel">
      <h4>${titulo}</h4>
      <button class="botao vazado pequeno copiar" type="button" data-copiar="${id}">Copiar</button>
      <span class="texto-pronto">${esc(texto)}</span>
    </div>${contagem}`;
}

function htmlChecklist({ id, zeraTodoDia, grupos }) {
  const cartoes = grupos.map((g) => `
    <div class="periodo">
      <p class="quando">${g.quando} <span class="tempo">${g.tempo}</span></p>
      <h4>${g.titulo}</h4>
      ${g.itens.map(([texto, detalhe]) => `
        <label class="check"><input type="checkbox"><span>${texto}${detalhe ? `<small>${detalhe}</small>` : ""}</span></label>`).join("")}
    </div>`).join("");
  return `
    <div class="peca">
      <div class="barra-progresso" data-progresso="${id}"><div class="progresso"><i></i></div><span></span></div>
      <div class="periodos" data-checklist="${id}" ${zeraTodoDia ? "data-zera-todo-dia" : ""}>${cartoes}</div>
    </div>`;
}

const HTML_DA_PECA = {
  copiar: (p) => htmlCopiar(p.texto),
  checklist: htmlChecklist,
  lista: (p) => `
    <div class="peca">
      <p class="peca-titulo">${p.titulo}</p>
      <ul class="lista ${p.estilo ?? ""}">${p.itens.map((i) => `<li>${i}</li>`).join("")}</ul>
    </div>`,
  dica: (p) => `<div class="aviso dica"><b>Dica</b><p>${p.html}</p></div>`,
  atencao: (p) => `<div class="aviso atencao"><b>Atenção</b><p>${p.html}</p></div>`,
  semana: (p) => `
    <div class="semana">${p.dias.map(([dia, oque, detalhe]) => `
      <div class="dia ${oque === "Folga" ? "folga" : ""}"><b>${dia}</b><span>${oque}</span><small>${detalhe}</small></div>`).join("")}
    </div>`,
  ideias: (p) => `
    <details class="abre-fecha">
      <summary>${p.titulo} <span class="quantas">${p.itens.length}</span></summary>
      <ol class="ideias">${p.itens.map(([titulo, oque]) => `<li><span><b>${titulo}</b><small>${oque}</small></span></li>`).join("")}</ol>
    </details>`,
  cartoes: (p) => `
    <div class="cartoes">${p.itens.map(([titulo, como, porque]) => `
      <div class="cartao-ideia"><b>${titulo}</b><p>${como}</p><p class="porque-curto">${porque}</p></div>`).join("")}
    </div>`,
  capas: htmlDasCapas,
  legenda: htmlMontadorDeLegenda,
  numeros: htmlPainelDoMes,
  calendario: htmlCalendario,
};

export const htmlDaPeca = (peca) => HTML_DA_PECA[peca.tipo](peca);

// ------------------------------------------------------------------------
// Listas de marcar
// ------------------------------------------------------------------------

// A rotina do dia guarda com a data no nome: amanhã a chave é outra e a lista começa limpa.
export function chaveDaLista(nome, zeraTodoDia, dia = new Date()) {
  if (!zeraTodoDia) return `andy-lista-${nome}`;
  return `andy-lista-${nome}-${dia.getFullYear()}-${dia.getMonth() + 1}-${dia.getDate()}`;
}

function montarChecklist(lista) {
  const nome = lista.dataset.checklist;
  const zeraTodoDia = lista.hasAttribute("data-zera-todo-dia");
  const caixas = [...lista.querySelectorAll(".check input")];
  const barra = document.querySelector(`[data-progresso="${nome}"]`);
  const marcados = lerLista(chaveDaLista(nome, zeraTodoDia));

  const atualizar = () => {
    const feitos = caixas.filter((c) => c.checked).length;
    barra.querySelector("i").style.width = `${(feitos / caixas.length) * 100}%`;
    barra.querySelector("span").textContent = `${feitos} de ${caixas.length}${zeraTodoDia ? " hoje" : ""}`;
  };

  caixas.forEach((c, i) => {
    c.checked = marcados.includes(i);
    c.addEventListener("change", () => {
      // A chave é calculada na hora: se a página ficou aberta de um dia para o outro, grava no dia certo.
      guardarLista(chaveDaLista(nome, zeraTodoDia), caixas.flatMap((x, j) => (x.checked ? [j] : [])));
      atualizar();
      avisarMudanca();
    });
  });
  atualizar();
}

export function montarPecas(raiz = document) {
  for (const botao of raiz.querySelectorAll("[data-copiar]")) {
    ligarCopiar(botao, () => TEXTOS_PRONTOS[botao.dataset.copiar].texto);
  }
  montarCapas(raiz);
  montarMontadorDeLegenda(raiz);
  montarPainelDoMes(raiz);
  raiz.querySelectorAll("[data-checklist]").forEach(montarChecklist);
}
