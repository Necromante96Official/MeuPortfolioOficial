// ========================================================================
// Montador de legenda (peça "legenda"): o Andy escolhe o serviço, escreve
// como o cabelo chegou e recebe a legenda pronta, com as hashtags certas
// daquele serviço, para copiar.
// ========================================================================

import { ligarCopiar } from "./copiar.js";

// [serviço, "feito" ou "feita", hashtag do serviço]
const SERVICOS = [
  ["Corte masculino", "feito", "#cortemasculinoalvorada"],
  ["Degradê", "feito", "#degradealvorada"],
  ["Corte feminino", "feito", "#cortefemininoalvorada"],
  ["Progressiva", "feita", "#progressivaalvorada"],
  ["Semidefinitiva", "feita", "#semidefinitivaalvorada"],
  ["Coloração", "feita", "#coloracaoalvorada"],
  ["Tratamento", "feito", "#tratamentocapilar"],
  ["Visagismo", "feito", "#visagismo"],
];

const ABERTURAS = [
  (chegou) => `Chegou ${chegou} e saiu assim ✨`,
  (chegou) => `De ${chegou} para isso aqui 😍`,
  () => "Olha essa transformação ✨",
];

const FIXAS = "#cabeleireiroalvorada #alvoradars #studionove";

function montarTexto(servico, abertura, chegou) {
  const [nome, feito, hashtag] = SERVICOS[servico];
  return `${ABERTURAS[abertura](chegou.trim() || "[como estava]")}
${nome} ${feito} aqui no Studio Nove, em Alvorada.
Quer o seu? Agende pelo WhatsApp do link na bio 📲
${FIXAS} ${hashtag}`;
}

export function htmlMontadorDeLegenda() {
  return `
    <div class="peca montador" data-montador>
      <p class="peca-titulo">Montador de legenda</p>
      <div class="campos">
        <label>Serviço
          <select data-servico>${SERVICOS.map(([nome], i) => `<option value="${i}">${nome}</option>`).join("")}</select>
        </label>
        <label>Começo
          <select data-abertura>
            <option value="0">Chegou… e saiu assim</option>
            <option value="1">De… para isso aqui</option>
            <option value="2">Olha essa transformação</option>
          </select>
        </label>
        <label class="largo">Como o cabelo chegou
          <input type="text" data-chegou maxlength="80" placeholder="com o cabelo armado e sem forma">
        </label>
      </div>
      <div class="copiavel">
        <h4>Sua legenda</h4>
        <button class="botao vazado pequeno copiar" type="button" data-copiar-legenda>Copiar</button>
        <span class="texto-pronto" data-legenda></span>
      </div>
    </div>`;
}

export function montarMontadorDeLegenda(raiz) {
  for (const caixa of raiz.querySelectorAll("[data-montador]")) {
    const servico = caixa.querySelector("[data-servico]");
    const abertura = caixa.querySelector("[data-abertura]");
    const chegou = caixa.querySelector("[data-chegou]");
    const saida = caixa.querySelector("[data-legenda]");
    const botao = caixa.querySelector("[data-copiar-legenda]");
    const atualizar = () => (saida.textContent = montarTexto(+servico.value, +abertura.value, chegou.value));
    [servico, abertura, chegou].forEach((campo) => campo.addEventListener("input", atualizar));
    ligarCopiar(botao, () => saida.textContent);
    atualizar();
  }
}
