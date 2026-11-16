// ========================================================================
// Aviso rápido: uma faixa embaixo da tela por alguns segundos
// ("Passo feito ✓ Próximo: …", "Fase completa!").
// ========================================================================

const DURACAO_MS = 3800;
let tempo;

export function avisar(html) {
  let faixa = document.querySelector(".aviso-rapido");
  if (!faixa) {
    faixa = document.createElement("div");
    faixa.className = "aviso-rapido";
    faixa.setAttribute("role", "status");
    document.body.append(faixa);
  }
  faixa.innerHTML = html;
  faixa.classList.add("visivel");
  clearTimeout(tempo);
  tempo = setTimeout(() => faixa.classList.remove("visivel"), DURACAO_MS);
}
