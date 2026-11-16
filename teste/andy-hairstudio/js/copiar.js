// ========================================================================
// Botão Copiar: copia o texto e mostra "Copiado ✓" por 2 segundos.
// Se o navegador não deixar copiar, pede para selecionar à mão.
// ========================================================================

export function ligarCopiar(botao, pegarTexto) {
  botao.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(pegarTexto());
      botao.textContent = "Copiado ✓";
    } catch {
      botao.textContent = "Selecione e copie";
    }
    setTimeout(() => (botao.textContent = "Copiar"), 2000);
  });
}
