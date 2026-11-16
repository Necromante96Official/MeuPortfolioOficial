// ========================================================================
// Ícones de traço (viewBox 24), desenhados onde o HTML pede [data-icone].
// As capas de destaque para baixar usam os mesmos desenhos.
// ========================================================================

export const ICONES = {
  agenda: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4M8 14h3"/>',
  tesoura: '<circle cx="6" cy="17.5" r="2.8"/><circle cx="6" cy="6.5" r="2.8"/><path d="M8.3 8.2 20 18M8.3 15.8 20 6"/>',
  antes: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16M6.5 15l2-3 2 3M14.5 9.5h3"/>',
  estrela: '<path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z"/>',
  local: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
  feminino: '<path d="M12 3c-3.7 0-5.9 2.8-5.9 6.8 0 3.3-.7 6-2.1 8.7 1.5.6 3 .9 4.6 1M12 3c3.7 0 5.9 2.8 5.9 6.8 0 3.3.7 6 2.1 8.7-1.5.6-3 .9-4.6 1"/><path d="M12 3.3c-.9 2.3-2.5 3.6-3.2 5.6M12 3.3c.9 2.3 2.5 3.6 3.2 5.6"/><path d="M8.8 9c0 3.2 1.4 5.6 3.2 5.6s3.2-2.4 3.2-5.6"/><path d="M10.6 14.3 10.3 17M13.4 14.3l.3 2.7M7 21c1.1-2.5 2.9-3.9 5-3.9s3.9 1.4 5 3.9"/>',
  progressiva: '<g transform="rotate(-14 12 19)"><rect x="10.3" y="2.5" width="3.4" height="15.5" rx="1.7"/><path d="M10.3 8.5h3.4"/></g><g transform="rotate(14 12 19)"><rect x="10.3" y="2.5" width="3.4" height="15.5" rx="1.7"/><path d="M10.3 8.5h3.4"/></g><circle cx="12" cy="19" r="1.4"/><path d="M12 20.4c0 1.4 1.6 1.9 3.6 1.4"/>',
  semidefinitiva: '<rect x="2.5" y="9.5" width="11.5" height="6" rx="3"/><path d="M4.5 7.5v2M7 7.5v2M9.5 7.5v2M12 7.5v2M4.5 15.5v2M7 15.5v2M9.5 15.5v2M12 15.5v2M14 12.5h7"/><path d="M18.5 2.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8zM20 16.5l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5z"/>',
  gota: '<path d="M12 3.5s6 6.4 6 10.7a6 6 0 0 1-12 0c0-4.3 6-10.7 6-10.7z"/>',
  valores: '<path d="M3.5 12.5 11.5 4.5h8v8l-8 8z"/><circle cx="15.5" cy="8.5" r="1.4"/>',
  video: '<rect x="3" y="5" width="13" height="14" rx="2"/><path d="m16 10 5-3v10l-5-3z"/>',
  conversa: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8M8 13h5"/>',
  enviar: '<path d="M21 3 10 14M21 3l-7 18-4-7-7-4z"/>',
  retorno: '<path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18 3v4h-4M6 21v-4h4"/>',
  presente: '<rect x="3.5" y="9" width="17" height="11" rx="1.5"/><path d="M3.5 13h17M12 9v11M12 9S9 4 7 5.5 9 9 12 9zM12 9s3-5 5-3.5S15 9 12 9z"/>',
  pessoas: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c.5-3.5 3-5.5 6-5.5s5.5 2 6 5.5"/><circle cx="17" cy="9" r="2.5"/><path d="M16.5 14.6c2.4.3 4 2 4.5 4.9"/>',
  megafone: '<path d="M3 10v4h4l8 5V5L7 10z"/><path d="M18 9a4 4 0 0 1 0 6"/>',
  relogio: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  grafico: '<path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6"/>',
  cadeado: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
};

export function desenharIcones(raiz = document) {
  for (const el of raiz.querySelectorAll("[data-icone]")) {
    el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONES[el.dataset.icone] ?? ""}</svg>`;
  }
}
