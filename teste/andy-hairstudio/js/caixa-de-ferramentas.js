// ========================================================================
// Caixa de ferramentas: no fim da página, todos os textos prontos juntos
// para consultar depois que a trilha acabar (são os mesmos dos passos).
// ========================================================================

import { TEXTOS_PRONTOS } from "./textos-prontos.js";
import { htmlCopiar, montarPecas } from "./pecas.js";
import { htmlDasCapas } from "./capas.js";
import { desenharIcones } from "./icones.js";

export function montarCaixaDeFerramentas() {
  const raiz = document.getElementById("caixa");
  const textos = Object.keys(TEXTOS_PRONTOS).map((id) => `<div>${htmlCopiar(id)}</div>`).join("");
  raiz.innerHTML = `<div class="grade-2">${textos}</div>${htmlDasCapas()}`;
  desenharIcones(raiz);
  montarPecas(raiz);
}
