// ========================================================================
// Capas de destaque: a lista, o HTML da grade e o download em PNG
// quadrado de 1080 px (fundo escuro, ícone dourado no centro; o Instagram
// recorta em círculo).
// ========================================================================

import { ICONES } from "./icones.js";

// [ícone, nome do destaque, o que guardar dentro]
export const CAPAS = [
  ["agenda", "Agenda", "Horários livres da semana"],
  ["antes", "Antes/Depois", "Os melhores resultados"],
  ["estrela", "Clientes", "Feedbacks e marcações"],
  ["valores", "Valores", "Serviços com preço \"a partir de\""],
  ["local", "Como chegar", "Endereço e mapa do Studio Nove"],
  ["tesoura", "Masculino", "Cortes, degradê, freestyle"],
  ["feminino", "Feminino", "Cortes, escovas e penteados"],
  ["progressiva", "Progressiva", "Antes e depois do liso"],
  ["semidefinitiva", "Semidefinitiva", "Menos volume, mais brilho"],
  ["gota", "Química", "Coloração e tratamentos"],
];

const TAMANHO = 1080;
const COR_ICONE = "#ecd7a6";

// "Antes/Depois" vira "antes-depois", "Química" vira "quimica".
const nomeDoArquivo = (titulo) =>
  "destaque-" + titulo.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function carregarImagem(src) {
  return new Promise((ok, falha) => {
    const img = new Image();
    img.onload = () => ok(img);
    img.onerror = falha;
    img.src = src;
  });
}

async function baixarCapa(icone, titulo) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${COR_ICONE}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONES[icone]}</svg>`;
  const img = await carregarImagem("data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg));
  const tela = document.createElement("canvas");
  tela.width = tela.height = TAMANHO;
  const ctx = tela.getContext("2d");
  const meio = TAMANHO / 2;
  const fundo = ctx.createRadialGradient(meio, meio, 0, meio, meio, meio * 1.42);
  fundo.addColorStop(0, "#231c11");
  fundo.addColorStop(1, "#0c0a07");
  ctx.fillStyle = fundo;
  ctx.fillRect(0, 0, TAMANHO, TAMANHO);
  const lado = TAMANHO * 0.42;
  ctx.drawImage(img, meio - lado / 2, meio - lado / 2, lado, lado);
  const link = document.createElement("a");
  link.download = nomeDoArquivo(titulo) + ".png";
  link.href = tela.toDataURL("image/png");
  link.click();
}

export function htmlDasCapas() {
  const itens = CAPAS.map(([icone, titulo, dentro], i) => `
    <div><i data-icone="${icone}"></i><b>${titulo}</b><small>${dentro}</small>
      <button class="botao vazado pequeno" type="button" data-baixar-capa="${i}">Baixar</button></div>`).join("");
  return `
    <div class="peca">
      <p class="peca-titulo">As capas para baixar</p>
      <p><button class="botao" type="button" data-baixar-todas>Baixar todas as capas</button></p>
      <div class="capas">${itens}</div>
    </div>`;
}

export function montarCapas(raiz = document) {
  for (const botao of raiz.querySelectorAll("[data-baixar-capa]")) {
    const [icone, titulo] = CAPAS[botao.dataset.baixarCapa];
    botao.addEventListener("click", () => baixarCapa(icone, titulo));
  }
  // Uma por vez, com intervalo: alguns navegadores barram vários downloads juntos.
  for (const botao of raiz.querySelectorAll("[data-baixar-todas]")) {
    botao.addEventListener("click", async () => {
      for (const [icone, titulo] of CAPAS) {
        await baixarCapa(icone, titulo);
        await new Promise((r) => setTimeout(r, 400));
      }
    });
  }
}
