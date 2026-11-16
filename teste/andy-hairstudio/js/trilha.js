// ========================================================================
// A trilha: monta as fases e os passos, lembra o que já foi feito e deixa
// aberto o passo atual ("Você está aqui"). A barra do topo mostra o
// progresso geral e o botão "Continuar" leva ao passo atual.
// ========================================================================

import { FASES } from "./passos/index.js";
import { EVITAR } from "./passos/crescer.js";
import { htmlDaPeca, montarPecas, avisarMudanca } from "./pecas.js";
import { avisar } from "./aviso-rapido.js";
import { desenharIcones } from "./icones.js";
import { lerLista, guardarLista } from "./armazem.js";

const CHAVE_FEITOS = "andy-trilha-feitos";
const PASSOS = FASES.flatMap((f) => f.passos.map((p) => ({ ...p, fase: f })));
const TODOS = PASSOS.map((p) => p.id);
const numeroDo = (id) => TODOS.indexOf(id) + 1;
const passoDo = (id) => PASSOS.find((p) => p.id === id);

function htmlPasso(passo) {
  const numero = numeroDo(passo.id);
  const onde = passo.onde
    ? `<div class="onde"><span class="onde-rotulo">Onde fica</span><ol class="caminho">${passo.onde.map((o) => `<li><span>${o}</span></li>`).join("")}</ol></div>`
    : "";
  return `
    <li class="passo" id="passo-${passo.id}" data-passo="${passo.id}">
      <details>
        <summary>
          <span class="bolinha" data-numero="${numero}">${numero}</span>
          <span class="passo-nome"><b>${passo.titulo}</b><small>${passo.tempo}</small></span>
          <span class="selo-agora">Você está aqui</span>
        </summary>
        <div class="passo-corpo">
          <p class="porque"><b>Por que fazer:</b> ${passo.porque}</p>
          ${onde}
          <p class="peca-titulo">Passo a passo</p>
          <ol class="como">${passo.como.map((c) => `<li>${c}</li>`).join("")}</ol>
          ${passo.pecas.map(htmlDaPeca).join("")}
          <div class="pronto"><b>Pronto quando:</b> ${passo.pronto}</div>
          <div class="passo-acoes"><button class="botao" type="button" data-feito></button></div>
        </div>
      </details>
    </li>`;
}

function htmlFase(fase, indice) {
  return `
    <section class="fase" id="fase-${fase.id}">
      <header class="fase-topo">
        <span class="fase-icone" data-icone="${fase.icone}"></span>
        <div>
          <p class="rotulo">Fase ${indice + 1} de ${FASES.length} · ${fase.quando}</p>
          <h2>${fase.titulo}</h2>
          <p class="fase-tempo">${fase.tempo} · <span data-progresso-fase="${fase.id}"></span></p>
        </div>
      </header>
      <p class="fase-resumo">${fase.resumo}</p>
      <ol class="passos">${fase.passos.map(htmlPasso).join("")}</ol>
    </section>`;
}

function htmlChegada() {
  return `
    <section class="fase chegada" id="chegada">
      <header class="fase-topo">
        <span class="fase-icone" data-icone="estrela"></span>
        <div><p class="rotulo">Chegada</p><h2>E depois?</h2></div>
      </header>
      <p class="fase-resumo" data-mensagem-final></p>
      <div class="aviso atencao"><b>Para não atrapalhar: evite</b>
        <ul class="lista ruim">${EVITAR.map((e) => `<li>${e}</li>`).join("")}</ul>
      </div>
    </section>`;
}

// ------------------------------------------------------------------------
// Estado: feito, atual, progresso
// ------------------------------------------------------------------------

const feitos = new Set(lerLista(CHAVE_FEITOS).filter((id) => TODOS.includes(id)));
const passoAtual = () => TODOS.find((id) => !feitos.has(id));
const elPasso = (id) => document.getElementById(`passo-${id}`);
const faseCompleta = (fase) => fase.passos.every((p) => feitos.has(p.id));

// Para o painel "Seu dia hoje".
export const totalDePassos = () => TODOS.length;
export function passoAtualInfo() {
  const id = passoAtual();
  if (!id) return null;
  const { titulo, tempo } = passoDo(id);
  return { id, numero: numeroDo(id), titulo, tempo };
}

function atualizar() {
  const atual = passoAtual();
  for (const id of TODOS) {
    const el = elPasso(id);
    const feito = feitos.has(id);
    el.classList.toggle("feito", feito);
    el.classList.toggle("agora", id === atual);
    const bolinha = el.querySelector(".bolinha");
    bolinha.textContent = feito ? "✓" : bolinha.dataset.numero;
    el.querySelector("[data-feito]").textContent = feito ? "Desmarcar" : "Marcar como feito ✓";
    el.querySelector("[data-feito]").classList.toggle("vazado", feito);
  }
  for (const fase of FASES) {
    const n = fase.passos.filter((p) => feitos.has(p.id)).length;
    document.querySelector(`[data-progresso-fase="${fase.id}"]`).textContent =
      n === fase.passos.length ? "fase completa ✓" : `${n} de ${fase.passos.length} feitos`;
    document.querySelector(`.mapa a[href="#fase-${fase.id}"]`).classList.toggle("completa", faseCompleta(fase));
  }
  const total = feitos.size;
  document.querySelector("[data-progresso-geral] i").style.width = `${(total / TODOS.length) * 100}%`;
  document.querySelector("[data-progresso-geral] span").textContent = `${total} de ${TODOS.length} passos`;
  document.querySelector("[data-mensagem-final]").innerHTML = atual
    ? "Quando terminar todos os passos, a parte que fica para sempre é a <b>rotina</b> (fase 3): stories todo dia, 3 a 4 Reels por semana e o fechamento do mês. É ela que mantém o Instagram trazendo cliente."
    : "<b>Trilha completa!</b> O perfil está arrumado e o atendimento também. Agora é manter a <b>rotina</b> (fase 3) e repetir o fechamento do mês: é ela que mantém o Instagram trazendo cliente.";
}

function irPara(id) {
  const el = elPasso(id);
  if (!el) return document.getElementById("chegada").scrollIntoView({ behavior: "smooth" });
  el.querySelector("details").open = true;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function alternarFeito(id) {
  if (feitos.has(id)) {
    feitos.delete(id);
  } else {
    feitos.add(id);
    elPasso(id).querySelector("details").open = false;
  }
  guardarLista(CHAVE_FEITOS, [...feitos]);
  atualizar();
  avisarMudanca();
  if (!feitos.has(id)) return;
  const proximo = passoAtual();
  const fase = passoDo(id).fase;
  const seguinte = proximo ? `Próximo: <b>${numeroDo(proximo)}. ${passoDo(proximo).titulo}</b>` : "Você terminou a trilha inteira!";
  avisar(faseCompleta(fase)
    ? `🎉 <b>Fase "${fase.titulo}" completa!</b><br>${seguinte}`
    : `Passo ${numeroDo(id)} feito ✓<br>${seguinte}`);
  irPara(proximo);
}

// O mapa no alto da trilha e a contagem do "Como usar" saem dos mesmos dados.
function montarMapa() {
  document.querySelector("[data-mapa]").innerHTML = FASES.map((f, i) =>
    `<a href="#fase-${f.id}"><b>${i + 1}</b>${f.titulo}<small>${f.quando}</small></a>`).join("");
  document.querySelector("[data-contagem-fases]").textContent = FASES.length;
  document.querySelector("[data-contagem-passos]").textContent = TODOS.length;
}

export function montarTrilha() {
  montarMapa();
  const raiz = document.getElementById("trilha");
  raiz.innerHTML = FASES.map(htmlFase).join("") + htmlChegada();
  desenharIcones(raiz);
  montarPecas(raiz);
  for (const id of TODOS) {
    elPasso(id).querySelector("[data-feito]").addEventListener("click", () => alternarFeito(id));
  }
  atualizar();
  const atual = passoAtual();
  if (atual) elPasso(atual).querySelector("details").open = true;
  // Por delegação: o painel "Seu dia hoje" redesenha os próprios botões.
  document.addEventListener("click", (ev) => {
    if (ev.target.closest("[data-continuar]")) irPara(passoAtual());
    const abrir = ev.target.closest("[data-abrir-passo]");
    if (abrir) irPara(abrir.dataset.abrirPasso);
  });
}
