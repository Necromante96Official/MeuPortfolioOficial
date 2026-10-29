// ========================================================================
// Projetos: web, PWA e tradução (Controle Financeiro, RPG Skills Site,
// Traduções de Mods).
// ========================================================================

export const web = [
  {
    slug: "controle-financeiro",
    categoria: "web",
    destaque: false,
    privado: false,
    status: "estavel",
    cor: "#22c55e",
    sigla: "CF",
    icone: "carteira",
    links: [
      { tipo: "site", url: "https://necromante96official.github.io/ControleFinanceiroOficial/" },
      { tipo: "repo", url: "https://github.com/Necromante96Official/ControleFinanceiroOficial" },
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "PWA", "Service Worker", "IndexedDB", "Capacitor"],
    numeros: [
      { valor: "v1.0.5", rotulo: { pt: "versão", en: "version" } },
      { valor: "100%", rotulo: { pt: "offline", en: "offline" } },
      { valor: "MIT", rotulo: { pt: "código aberto", en: "open source" } },
    ],
    pt: {
      titulo: "Controle Financeiro",
      chamada: "Finanças pessoais simples e offline, instalável no celular e no computador.",
      descricao: [
        "O Controle Financeiro organiza receitas, despesas e cartões, com categorias, extrato e gráficos mensais e anuais. É um PWA instalável que funciona sem internet e sem nuvem.",
        "Os dados ficam só no aparelho de quem usa, com exportação e importação de backup para trocar de dispositivo em segundos. Feito em JavaScript puro, sem framework, para abrir instantâneo.",
      ],
      papel: "Projeto completo: interface, modelo de dados em IndexedDB, Service Worker e build Android com Capacitor.",
      destaques: [
        "Instalável no celular e no PC",
        "Funciona 100% offline, sem conta",
        "Backup local para exportar e importar",
        "Código aberto sob licença MIT",
      ],
    },
    en: {
      titulo: "Controle Financeiro",
      chamada: "Simple, offline personal finance, installable on phone and desktop.",
      descricao: [
        "Controle Financeiro tracks income, expenses and cards, with categories, a ledger and monthly and yearly charts. It is an installable PWA that works with no internet and no cloud.",
        "Data stays only on the user's device, with backup export and import to switch devices in seconds. Built in plain JavaScript, no framework, so it opens instantly.",
      ],
      papel: "End-to-end project: interface, IndexedDB data model, Service Worker and Android build with Capacitor.",
      destaques: [
        "Installable on phone and desktop",
        "100% offline, no account needed",
        "Local backup export and import",
        "Open source under the MIT license",
      ],
    },
  },
  {
    slug: "rpg-skills-site",
    categoria: "web",
    grupo: "rpg-skills",
    destaque: false,
    privado: false,
    status: "estavel",
    cor: "#f59e0b",
    sigla: "RW",
    icone: "livro",
    links: [
      { tipo: "site", url: "https://necromante96official.github.io/RPG-Skills-Site/" },
      { tipo: "repo", url: "https://github.com/Necromante96Official/RPG-Skills-Site" },
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "i18n", "GitHub Pages"],
    numeros: [
      { valor: "14", rotulo: { pt: "páginas", en: "pages" } },
      { valor: "PT · EN", rotulo: { pt: "idiomas", en: "languages" } },
    ],
    pt: {
      titulo: "RPG Skills Site",
      chamada: "O site oficial do mod RPG Skills, com classes, progressão, guias e novidades.",
      descricao: [
        "O RPG Skills Site é a vitrine e o manual do mod: classes, passivas, progressão, configuração, comandos e notas de versão, organizados em 14 páginas responsivas.",
        "Bilíngue (PT-BR e EN) com troca instantânea, sem framework e publicado no GitHub Pages. É para onde a página do Workshop aponta quando o jogador quer o detalhe completo.",
      ],
      papel: "Design e desenvolvimento do site inteiro, da identidade visual ao sistema de idiomas.",
      destaques: [
        "14 páginas responsivas",
        "Troca de idioma instantânea PT-BR / EN",
        "Notas de versão de cada atualização do mod",
        "Publicado no GitHub Pages",
      ],
    },
    en: {
      titulo: "RPG Skills Site",
      chamada: "The official RPG Skills website, with classes, progression, guides and news.",
      descricao: [
        "The RPG Skills Site is the mod's showcase and manual: classes, passives, progression, configuration, commands and release notes, organized in 14 responsive pages.",
        "Bilingual (PT-BR and EN) with instant switching, framework-free and hosted on GitHub Pages. It is where the Workshop page sends players who want the full detail.",
      ],
      papel: "Design and development of the whole site, from visual identity to the language system.",
      destaques: [
        "14 responsive pages",
        "Instant PT-BR / EN switching",
        "Release notes for every mod update",
        "Hosted on GitHub Pages",
      ],
    },
  },
  {
    slug: "traducoes-jogos-mods",
    categoria: "translation",
    grupo: "traducao",
    destaque: true,
    privado: false,
    status: "ativo",
    cor: "#fbbf24",
    sigla: "TR",
    icone: "baloes",
    links: [
      { tipo: "nexus", url: "https://www.nexusmods.com/profile/Necromante96Official" },
      { tipo: "curseforge", url: "https://www.curseforge.com/hytale/mods/maior-pack-de-traducoes-pt-br" },
    ],
    stack: ["PT-BR", "LQA", "Glossários", "Unity / IL2CPP", "Unreal", "Hytale"],
    numeros: [
      { valor: "PT-BR", rotulo: { pt: "localização", en: "localization" } },
      { valor: "4", rotulo: { pt: "jogos e mods traduzidos", en: "games and mods translated" } },
    ],
    pt: {
      titulo: "Traduções de Jogos e Mods",
      chamada: "Traduções PT-BR não oficiais, autorizadas pelos autores e revisadas linha a linha.",
      descricao: [
        "Pacotes em português do Brasil para jogos e mods, feitos com autorização de quem os criou. Cada tradução passa por revisão humana para que diálogos, piadas, lore e termos soem naturais, mantendo a identidade original.",
        "O trabalho usa o Nexus Translator para extrair e organizar os textos e glossários vivos para manter a consistência entre versões. As traduções são publicadas no Nexus Mods e na CurseForge.",
      ],
      papel: "Tradução, revisão (LQA), contato com os autores e publicação nas plataformas.",
      destaques: [
        "Forsaken Realms: tradução autorizada pelo autor",
        "Hytale: Maior Pack de Traduções PT-BR, na CurseForge",
        "Elementallis: tradução autorizada",
        "Dragon Quest I & II HD-2D Remake: em andamento (não oficial)",
      ],
    },
    en: {
      titulo: "Game and Mod Translations",
      chamada: "Unofficial PT-BR translations, authorized by the authors and reviewed line by line.",
      descricao: [
        "Brazilian Portuguese packs for games and mods, made with the creators' permission. Every translation goes through human review so dialogue, jokes, lore and terms read naturally while keeping the original identity.",
        "The workflow uses Nexus Translator to extract and organize text, plus living glossaries to keep terms consistent across versions. Translations are published on Nexus Mods and CurseForge.",
      ],
      papel: "Translation, review (LQA), author liaison and publishing.",
      destaques: [
        "Forsaken Realms: translation authorized by the author",
        "Hytale: the \"Maior Pack de Traduções PT-BR\" on CurseForge",
        "Elementallis: authorized translation",
        "Dragon Quest I & II HD-2D Remake: in progress (unofficial)",
      ],
    },
  },
];
