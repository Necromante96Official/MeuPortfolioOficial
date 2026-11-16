// ========================================================================
// Datas especiais do ano: o calendário (peça "calendario") e a próxima
// data que está chegando (usada pelo painel "Seu dia hoje").
// ========================================================================

import { DATAS_DO_ANO } from "./ideias.js";

const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const DIA_EM_MS = 24 * 60 * 60 * 1000;

// A próxima data especial a partir de hoje, com quantos dias faltam
// (vira o ano: em dezembro, depois do Natal, a próxima é a de janeiro).
export function proximaData(hoje = new Date()) {
  const inicio = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
  const futuras = DATAS_DO_ANO.map(([mes, dia, nome, ideia]) => {
    let quando = new Date(inicio.getFullYear(), mes - 1, dia);
    if (quando < inicio) quando = new Date(inicio.getFullYear() + 1, mes - 1, dia);
    return { nome, ideia, faltam: Math.round((quando - inicio) / DIA_EM_MS) };
  });
  return futuras.sort((a, b) => a.faltam - b.faltam)[0];
}

export function htmlCalendario() {
  const mesAtual = new Date().getMonth() + 1;
  const proxima = proximaData().nome;
  const itens = DATAS_DO_ANO.map(([mes, dia, nome, ideia]) => `
    <li class="${mes === mesAtual ? "este-mes" : ""} ${nome === proxima ? "proxima" : ""}">
      <span class="data-quando">${dia} ${MESES[mes - 1]}</span>
      <b>${nome}</b><small>${ideia}</small>
    </li>`).join("");
  return `
    <div class="peca">
      <p class="peca-titulo">Calendário do ano</p>
      <ol class="calendario">${itens}</ol>
      <p class="nota">Carnaval, Páscoa, Dia das Mães, Dia dos Pais e Black Friday mudam de dia a cada ano: confira a data certa no calendário do celular.</p>
    </div>`;
}
