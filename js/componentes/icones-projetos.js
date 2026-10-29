// ========================================================================
// O ícone de cada projeto (a "foto de perfil" do cartão), em traço,
// na cor do projeto. A chave é o campo `icone` dos dados do projeto.
// ========================================================================

export const iconesDeProjeto = {
  // Ancient Souls: espada
  espada: '<path d="M14.5 3H21v6.5L10 20.5 3.5 14Z"/><path d="m7 17-3 3"/><path d="m5 12 7 7"/>',
  // RPG Skills: subir de nível
  nivel: '<path d="m6 11 6-6 6 6"/><path d="m6 18 6-6 6 6"/>',
  // RPG Skills Site: livro (o manual do mod)
  livro: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z"/><path d="M4 19V5"/><path d="M9 7h6"/>',
  // Forbidden Legacy: cartas
  cartas: '<rect x="3" y="6" width="11" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v13"/><path d="m8.5 11 1 2 2 .3-1.5 1.4.4 2-1.9-1-1.9 1 .4-2L5.5 13.3l2-.3Z"/>',
  // Forbidden Legacy Patch: camadas sobre o jogo
  camadas: '<path d="m12 3 9 5-9 5-9-5Z"/><path d="m3 13 9 5 9-5"/>',
  // Save Editor: disquete
  disquete: '<path d="M5 3h11l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 1-2Z"/><path d="M8 3v5h7V3"/><rect x="7" y="13" width="10" height="6" rx="1"/>',
  // Deck Building: pilha de cartas em leque
  baralho: '<rect x="8" y="4" width="10" height="15" rx="2" transform="rotate(10 13 11.5)"/><rect x="5" y="5" width="10" height="15" rx="2" transform="rotate(-8 10 12.5)"/>',
  // Nexus Translator: idiomas
  traduzir: '<path d="M4 5h8M8 3v2M5.5 5c.8 3 3 5.5 6 7"/><path d="M10.5 5c-.8 3.5-3 6.5-6.5 8"/><path d="m12 21 4.5-10 4.5 10M13.5 18h6"/>',
  // Traduções: balões de conversa
  baloes: '<path d="M4 4h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"/><path d="M16 9h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1v3l-4-3h-4a1 1 0 0 1-1-1v-1"/>',
  // CláudioEditor: claquete
  claquete: '<rect x="3" y="9" width="18" height="12" rx="2"/><path d="m3 9 17-5 1 3.5L4 12.5"/><path d="m8 7.5 2 3.5M14 5.7l2 3.5"/>',
  // OBS Overlay: cronômetro
  cronometro: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5"/><path d="M10 2h4M12 2v3"/>',
  // MO2 Tools: caixa (pacote de mods)
  caixa: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>',
  // Controle Financeiro: carteira
  carteira: '<path d="M4 7a2 2 0 0 1 2-2h12v4"/><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 13.5h2"/>',
  // FisioHub: coração com pulso
  pulso: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/><path d="M5.5 12h3l1.5-2.5 2 5 1.5-2.5h5"/>',
  // ZenFisio Coletor: agenda com seta de coleta
  agenda: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/><path d="M12 13v5M9.5 15.5 12 18l2.5-2.5"/>',
  // ZenFisio Notificar: sino
  sino: '<path d="M6 9a6 6 0 0 1 12 0c0 6 2.5 7.5 2.5 7.5h-17S6 15 6 9Z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  // ZenFisio Alerta Repetidor: ciclo
  ciclo: '<path d="M20 11a8 8 0 0 0-14.7-4.3L3 9"/><path d="M3 4v5h5"/><path d="M4 13a8 8 0 0 0 14.7 4.3L21 15"/><path d="M21 20v-5h-5"/>',
  // Declaração de Comparecimento: documento assinado
  documento: '<path d="M6 3h8l5 5v13H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/><path d="M8.5 13h7M8.5 16.5c1-1 2-1 3 0s2 1 3 0"/>',
};

export function iconeDeProjeto(nome) {
  const corpo = iconesDeProjeto[nome];
  if (!corpo) return "";
  return `<svg class="marca__icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${corpo}</svg>`;
}
