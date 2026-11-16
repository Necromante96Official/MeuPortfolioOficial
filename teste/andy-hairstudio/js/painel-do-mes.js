// ========================================================================
// Painel do mês (peça "numeros"): o Andy anota os números de cada mês e
// vê se subiu ou desceu. Fica guardado neste navegador. A primeira linha
// é o ponto de partida: os números da análise de novembro de 2026.
// ========================================================================

import { lerLista, guardarLista } from "./armazem.js";

const CHAVE = "andy-numeros-do-mes";

// [campo, nome na tela]
const CAMPOS = [
  ["seguidores", "Seguidores"],
  ["posts", "Publicações"],
  ["agendamentos", "Agendamentos do Instagram"],
  ["avaliacoes", "Avaliações no Google"],
];

const PONTO_DE_PARTIDA = { mes: "2026-11", partida: true, seguidores: 1317, posts: 10, agendamentos: null, avaliacoes: null };

const NOMES_DOS_MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const nomeDoMes = (aaaamm) => `${NOMES_DOS_MESES[+aaaamm.slice(5) - 1]}/${aaaamm.slice(0, 4)}`;
const mesDeHoje = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`; };

export function htmlPainelDoMes() {
  return `
    <div class="peca painel-mes" data-painel-mes>
      <p class="peca-titulo">Painel do mês</p>
      <div class="campos">
        <label>Mês <input type="month" data-mes></label>
        ${CAMPOS.map(([campo, nome]) => `<label>${nome} <input type="number" min="0" step="1" inputmode="numeric" data-campo="${campo}"></label>`).join("")}
      </div>
      <p class="erro-campo" role="alert"></p>
      <button class="botao pequeno" type="button" data-guardar-mes>Guardar este mês</button>
      <div class="tabela-rolar"><table class="tabela-mes"></table></div>
    </div>`;
}

function diferenca(atual, anterior) {
  if (atual == null || anterior == null) return "";
  const d = atual - anterior;
  if (d === 0) return `<small class="igual">=</small>`;
  return `<small class="${d > 0 ? "subiu" : "desceu"}">${d > 0 ? "↑" : "↓"} ${Math.abs(d)}</small>`;
}

function desenharTabela(tabela, linhas) {
  const ordenadas = [PONTO_DE_PARTIDA, ...linhas].sort((a, b) => a.mes.localeCompare(b.mes) || (a.partida ? -1 : 1));
  const corpo = ordenadas.map((linha, i) => {
    const anterior = ordenadas[i - 1];
    const celulas = CAMPOS.map(([campo]) =>
      `<td>${linha[campo] ?? "–"} ${anterior ? diferenca(linha[campo], anterior[campo]) : ""}</td>`).join("");
    return `<tr><th>${nomeDoMes(linha.mes)}${linha.partida ? "<small>ponto de partida</small>" : ""}</th>${celulas}</tr>`;
  }).reverse().join("");
  tabela.innerHTML = `<thead><tr><th>Mês</th>${CAMPOS.map(([, nome]) => `<th>${nome}</th>`).join("")}</tr></thead><tbody>${corpo}</tbody>`;
}

export function montarPainelDoMes(raiz) {
  for (const painel of raiz.querySelectorAll("[data-painel-mes]")) {
    const mes = painel.querySelector("[data-mes]");
    const erro = painel.querySelector(".erro-campo");
    const tabela = painel.querySelector(".tabela-mes");
    const entradas = [...painel.querySelectorAll("[data-campo]")];
    mes.value = mesDeHoje();
    desenharTabela(tabela, lerLista(CHAVE));
    entradas.forEach((e) => e.addEventListener("input", () => (erro.textContent = "")));

    painel.querySelector("[data-guardar-mes]").addEventListener("click", () => {
      const valores = Object.fromEntries(entradas.map((e) => [e.dataset.campo, e.value === "" ? null : Number(e.value)]));
      if (!mes.value) return (erro.textContent = "Escolha o mês.");
      if (Object.values(valores).every((v) => v == null)) return (erro.textContent = "Preencha pelo menos um número.");
      if (Object.values(valores).some((v) => v != null && (!Number.isInteger(v) || v < 0))) return (erro.textContent = "Use só números inteiros, sem vírgula.");
      const linhas = lerLista(CHAVE).filter((l) => l.mes !== mes.value);
      linhas.push({ mes: mes.value, ...valores });
      guardarLista(CHAVE, linhas);
      desenharTabela(tabela, linhas);
      entradas.forEach((e) => (e.value = ""));
      erro.textContent = "";
    });
  }
}
