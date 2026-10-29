// ========================================================================
// Ícones de linha (SVG em traço, herdam a cor do texto).
// icone("seta") devolve o <svg> pronto para colar no HTML.
// ========================================================================

const caminhos = {
  seta: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  voltar: '<path d="M19 12H5"/><path d="m11 6-6 6 6 6"/>',
  externo: '<path d="M14 4h6v6"/><path d="M10 14 20 4"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>',
  menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',
  fechar: '<path d="M6 6l12 12"/><path d="M18 6 6 18"/>',
  busca: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  copiar: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/>',
  ok: '<path d="m5 12 5 5 9-10"/>',
  cadeado: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  janela: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M7 6.5h.01M10 6.5h.01"/>',
  controle: '<path d="M7 9h4M9 7v4"/><path d="M15 10h.01M17.5 12.5h.01"/><path d="M6 5h12a4 4 0 0 1 4 4v4a5 5 0 0 1-9 3h-2a5 5 0 0 1-9-3V9a4 4 0 0 1 4-4Z"/>',
  servidor: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
  faisca: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="m6 6 2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>',
  idiomas: '<path d="M4 5h8M8 3v2M5.5 5c.8 3 3 5.5 6 7"/><path d="M10.5 5c-.8 3.5-3 6.5-6.5 8"/><path d="m12 21 4.5-10 4.5 10M13.5 18h6"/>',
  ferramenta: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.4-.6-.6-2.4Z"/>',
  saude: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/><path d="M9 11h2v-2h2v2h2v2h-2v2h-2v-2H9z"/>',
  pulso: '<path d="M3 12h4l3-7 4 14 3-7h4"/>',
  topo: '<path d="M12 19V5"/><path d="m6 11 6-6 6 6"/>',
};

export function icone(nome, classe = "icone") {
  const corpo = caminhos[nome] ?? caminhos.seta;
  return `<svg class="${classe}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${corpo}</svg>`;
}

// O ícone de cada categoria de projeto
export const iconeDaCategoria = {
  web: "janela",
  game: "controle",
  tool: "ferramenta",
  translation: "idiomas",
  institucional: "saude",
};

// O ícone de cada tipo de link de projeto (marcas usam o SVG de assets/)
export const iconeDoLink = {
  site: { linha: "externo" },
  repo: { marca: "assets/icones/github.svg" },
  workshop: { marca: "assets/icones/steam.svg" },
  discord: { linha: "externo" },
  nexus: { marca: "assets/icones/nexus.svg" },
  curseforge: { marca: "assets/icones/curseforge.svg" },
  youtube: { marca: "assets/icones/youtube.svg" },
};
