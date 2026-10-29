// ========================================================================
// Idioma: qual está ativo, a tradução das chaves e a troca.
// O idioma fica salvo no navegador; na primeira visita segue o do sistema.
// ========================================================================

import { pt } from "../textos/pt.js";
import { en } from "../textos/en.js";

const textos = { pt, en };
const CHAVE = "portfolio.idioma";
const ouvintes = new Set();

let atual = idiomaInicial();

function idiomaInicial() {
  const daUrl = new URLSearchParams(location.search).get("lang");
  if (daUrl === "pt" || daUrl === "en") return daUrl;
  try {
    const salvo = localStorage.getItem(CHAVE);
    if (salvo === "pt" || salvo === "en") return salvo;
  } catch {
    // Navegação privada sem armazenamento: segue o do sistema
  }
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function idioma() {
  return atual;
}

// t("inicio.chamada") ou t("projetos.contagem", { n: 4 })
export function t(chave, vars) {
  const achar = (dic) => chave.split(".").reduce((o, k) => (o == null ? undefined : o[k]), dic);
  let valor = achar(textos[atual]) ?? achar(textos.pt) ?? chave;
  if (vars && typeof valor === "string") {
    valor = valor.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");
  }
  return valor;
}

// Escolhe o lado do idioma em objetos { pt, en } (ou devolve o texto como está)
export function tr(valor) {
  if (valor == null || typeof valor !== "object") return valor;
  return valor[atual] ?? valor.pt;
}

// Número com versão própria em inglês ({ valor, valorEn })
export function numero(item) {
  return atual === "en" && item.valorEn ? item.valorEn : item.valor;
}

export function trocarIdioma(novo) {
  if (novo === atual || !textos[novo]) return;
  atual = novo;
  try {
    localStorage.setItem(CHAVE, novo);
  } catch {
    // Sem armazenamento: vale só nesta página
  }
  aplicarNoDocumento();
  ouvintes.forEach((fn) => fn(novo));
}

export function aoTrocarIdioma(fn) {
  ouvintes.add(fn);
}

export function aplicarNoDocumento() {
  document.documentElement.lang = atual === "pt" ? "pt-BR" : "en";
}
