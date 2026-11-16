// ========================================================================
// Painel "Seu dia hoje": o que o Andy vê ao abrir a página.
//   - o próximo passo da trilha;
//   - o que postar hoje, pela semana modelo;
//   - a rotina de hoje e quantos dias seguidos ele fez a rotina inteira;
//   - a próxima data especial e quantos dias faltam.
// Redesenha quando algo é marcado (evento "andy:mudou").
// ========================================================================

import { FASE_ROTINA, SEMANA_MODELO } from "./passos/rotina.js";
import { proximaData } from "./datas.js";
import { chaveDaLista } from "./pecas.js";
import { lerLista } from "./armazem.js";
import { passoAtualInfo, totalDePassos } from "./trilha.js";

const DIAS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const NOMES_DOS_DIAS = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
const AVISAR_DATA_COM_DIAS = 21;

const ROTINA = FASE_ROTINA.passos.find((p) => p.id === "rotina-diaria").pecas.find((p) => p.tipo === "checklist");
const ITENS_DA_ROTINA = ROTINA.grupos.flatMap((g) => g.itens).length;

const feitosNoDia = (dia) => lerLista(chaveDaLista(ROTINA.id, true, dia)).length;

// Dias seguidos com a rotina inteira. Hoje só conta quando estiver completo
// (ainda dá tempo) e o domingo de folga não quebra a sequência.
function sequencia(hoje = new Date()) {
  const dia = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
  if (feitosNoDia(dia) < ITENS_DA_ROTINA) dia.setDate(dia.getDate() - 1);
  let dias = 0;
  for (let volta = 0; volta < 400; volta++) {
    if (dia.getDay() !== 0) {
      if (feitosNoDia(dia) < ITENS_DA_ROTINA) break;
      dias++;
    }
    dia.setDate(dia.getDate() - 1);
  }
  return dias;
}

function saudacao(hora) {
  if (hora < 12) return "Bom dia";
  return hora < 18 ? "Boa tarde" : "Boa noite";
}

function desenhar() {
  const agora = new Date();
  const passo = passoAtualInfo();
  const [, oque, detalhe] = SEMANA_MODELO.find(([dia]) => dia === DIAS[agora.getDay()]);
  const feitos = feitosNoDia(agora);
  const seguidos = sequencia(agora);
  const data = proximaData(agora);
  const dataPerto = data.faltam <= AVISAR_DATA_COM_DIAS;

  document.querySelector("[data-saudacao]").textContent = `${saudacao(agora.getHours())}, Andy!`;
  document.getElementById("hoje-cartoes").innerHTML = `
    <div class="hoje-cartao destaque">
      <p class="quando">Seu próximo passo</p>
      ${passo
        ? `<b>${passo.numero}. ${passo.titulo}</b><small>Passo ${passo.numero} de ${totalDePassos()} · ${passo.tempo}</small>
           <button class="botao pequeno" type="button" data-continuar>Ir para o passo</button>`
        : `<b>Trilha completa ✓</b><small>Agora é manter a rotina e o fechamento do mês.</small>`}
    </div>
    <div class="hoje-cartao">
      <p class="quando">Hoje é ${NOMES_DOS_DIAS[agora.getDay()]}</p>
      <b>${oque}</b><small>${detalhe}</small>
    </div>
    <div class="hoje-cartao">
      <p class="quando">Rotina de hoje</p>
      <b>${feitos} de ${ITENS_DA_ROTINA} feitos</b>
      <div class="progresso"><i style="width:${(feitos / ITENS_DA_ROTINA) * 100}%"></i></div>
      <small>${seguidos > 0 ? `🔥 ${seguidos} ${seguidos === 1 ? "dia" : "dias"} seguidos com a rotina inteira` : "Faça a rotina inteira hoje para começar uma sequência 🔥"}</small>
      <button class="botao vazado pequeno" type="button" data-abrir-passo="rotina-diaria">Abrir a rotina</button>
    </div>
    <div class="hoje-cartao ${dataPerto ? "alerta-data" : ""}">
      <p class="quando">Próxima data especial</p>
      <b>${data.nome} · ${data.faltam === 0 ? "é hoje!" : `faltam ${data.faltam} ${data.faltam === 1 ? "dia" : "dias"}`}</b>
      <small>${data.ideia}${dataPerto ? " <strong>Já dá para começar a divulgar.</strong>" : ""}</small>
    </div>`;
}

export function montarHoje() {
  desenhar();
  document.addEventListener("andy:mudou", desenhar);
}
