// ========================================================================
// O que a página lembra neste navegador (passos feitos, listas marcadas).
// Ler e gravar pode falhar (aba anônima com bloqueio, etc.): aí a página
// segue funcionando, só sem lembrar.
// ========================================================================

export function guardar(armazem, chave, valor) {
  try { armazem.setItem(chave, valor); } catch { /* segue sem lembrar */ }
}

export function ler(armazem, chave) {
  try { return armazem.getItem(chave); } catch { return null; }
}

export function lerLista(chave) {
  try { return JSON.parse(ler(localStorage, chave) ?? "[]"); } catch { return []; }
}

export function guardarLista(chave, lista) {
  guardar(localStorage, chave, JSON.stringify(lista));
}
