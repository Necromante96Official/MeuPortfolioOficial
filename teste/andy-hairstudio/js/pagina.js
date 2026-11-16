// ========================================================================
// Guia do Instagram do Andy Machado (página de teste, fora do portfólio).
// Entrada: pede a senha e monta a trilha e a caixa de ferramentas.
// Formato escolhido pelo Lucas (16/11/2026): trilha numa página só, com
// "Você está aqui" no passo atual, e o material de consulta (textos,
// capas, ideias) dentro do passo em que é usado; no fim, a caixa junta tudo.
// A senha só esconde a página de quem cair no link por acaso; não é
// segurança de verdade (o conteúdo está nos arquivos públicos).
// ========================================================================

import { desenharIcones } from "./icones.js";
import { montarTrilha } from "./trilha.js";
import { montarCaixaDeFerramentas } from "./caixa-de-ferramentas.js";
import { montarHoje } from "./hoje.js";
import { ler, guardar } from "./armazem.js";

// SHA-256 de "123": a senha não fica escrita em texto puro no código.
const HASH_DA_SENHA = "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3";
const CHAVE_SESSAO = "andy-proposta-liberada";

async function sha256(texto) {
  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(texto));
  return [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function liberar() {
  document.getElementById("portao").remove();
  document.getElementById("conteudo").hidden = false;
}

function montarPortao() {
  if (ler(sessionStorage, CHAVE_SESSAO) === "sim") return liberar();
  const form = document.getElementById("form-senha");
  const campo = form.querySelector("input");
  const aviso = form.querySelector(".erro");
  campo.focus();
  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    if ((await sha256(campo.value.trim())) === HASH_DA_SENHA) {
      guardar(sessionStorage, CHAVE_SESSAO, "sim");
      liberar();
    } else {
      aviso.textContent = "Senha incorreta.";
      campo.select();
    }
  });
}

desenharIcones();
montarTrilha();
montarHoje();
montarCaixaDeFerramentas();
montarPortao();
