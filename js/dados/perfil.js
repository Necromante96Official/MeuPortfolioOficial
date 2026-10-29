// ========================================================================
// Perfil: quem é, onde encontrar e os números que aparecem no site.
// Atualize os números aqui; nenhuma página escreve número solto.
// ========================================================================

export const perfil = {
  nome: "Lucas Tavares",
  apelido: "Necromante96Official",
  email: "lukastavaresmattos96@gmail.com",
  github: "https://github.com/Necromante96Official",

  // Revisado em 29/10/2026 (Steam Workshop e repositórios)
  atualizadoEm: "2026-10-29",
};

// ------------------------------------------------------------------------
// Onde o trabalho está publicado
// ------------------------------------------------------------------------

export const redes = [
  {
    id: "github",
    nome: "GitHub",
    usuario: "Necromante96Official",
    url: "https://github.com/Necromante96Official",
    icone: "assets/icones/github.svg",
  },
  {
    id: "youtube",
    nome: "YouTube",
    usuario: "@Necromante96Officiall",
    url: "https://www.youtube.com/@Necromante96Officiall",
    icone: "assets/icones/youtube.svg",
  },
  {
    id: "workshop",
    nome: "Steam Workshop",
    usuario: { pt: "RPG Skills", en: "RPG Skills" },
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3694501995",
    icone: "assets/icones/steam.svg",
  },
  {
    id: "nexus",
    nome: "Nexus Mods",
    usuario: { pt: "Traduções PT-BR", en: "PT-BR translations" },
    url: "https://www.nexusmods.com/profile/Necromante96Official",
    icone: "assets/icones/nexus.svg",
  },
  {
    id: "curseforge",
    nome: "CurseForge",
    usuario: { pt: "Hytale PT-BR", en: "Hytale PT-BR" },
    url: "https://www.curseforge.com/hytale/mods/maior-pack-de-traducoes-pt-br",
    icone: "assets/icones/curseforge.svg",
  },
];

// ------------------------------------------------------------------------
// Números do topo da página inicial
// ------------------------------------------------------------------------

export const numeros = [
  { valor: "20,8 mil", valorEn: "20.8k", rotulo: { pt: "visitantes no Workshop", en: "Workshop visitors" } },
  { valor: "8,5 mil", valorEn: "8.5k", rotulo: { pt: "inscritos no RPG Skills", en: "RPG Skills subscribers" } },
  { valor: "12", rotulo: { pt: "idiomas no mod", en: "languages in the mod" } },
  { valor: "5+", rotulo: { pt: "anos criando", en: "years building" } },
];

// ------------------------------------------------------------------------
// "Agora": o que está andando neste momento (painel do topo)
// ------------------------------------------------------------------------

export const agora = [
  {
    slug: "ancient-souls",
    rotulo: { pt: "v0.0.67 alfa no ar", en: "v0.0.67 alpha live" },
  },
  {
    slug: "rpg-skills-mod",
    rotulo: { pt: "4.1 no Workshop · 8,5 mil inscritos", en: "4.1 on Workshop · 8.5k subscribers" },
  },
  {
    slug: "fisiohub",
    rotulo: { pt: "Em uso na clínica da ESEFID/UFRGS", en: "In use at the ESEFID/UFRGS clinic" },
  },
  {
    slug: "nexustranslator",
    rotulo: { pt: "6.3.7 · Stardew, Hytale, Unity, Unreal", en: "6.3.7 · Stardew, Hytale, Unity, Unreal" },
  },
];
