// ========================================================================
// Competências: as áreas, as tecnologias de cada uma e os projetos que
// provam cada área (por slug; o site liga para a página do projeto).
// ========================================================================

export const competencias = [
  {
    id: "web",
    icone: "janela",
    titulo: { pt: "Web, PWA e extensões", en: "Web, PWA and extensions" },
    texto: {
      pt: "Interfaces rápidas, acessíveis e offline-first, do PWA instalável à extensão de navegador.",
      en: "Fast, accessible, offline-first interfaces, from installable PWAs to browser extensions.",
    },
    itens: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Vite", "PWA", "Chrome MV3", "IndexedDB", "Capacitor"],
    casos: ["fisiohub", "controle-financeiro", "rpg-skills-site"],
  },
  {
    id: "game",
    icone: "controle",
    titulo: { pt: "Jogos e modding", en: "Games and modding" },
    texto: {
      pt: "Do JRPG no navegador ao mod Java com 8,5 mil inscritos e ao patch de Godot.",
      en: "From a browser JRPG to a Java mod with 8.5k subscribers and Godot patching.",
    },
    itens: ["PixiJS", "Java 17", "Gradle", "Necesse API", "Godot 4", "GDScript", "C# .NET 9", "Avalonia"],
    casos: ["ancient-souls", "rpg-skills-mod", "forbidden-legacy-patchs"],
  },
  {
    id: "backend",
    icone: "servidor",
    titulo: { pt: "Servidores, dados e automação", en: "Servers, data and automation" },
    texto: {
      pt: "Servidor autoritativo, pipelines de dados e automações que tiram trabalho manual do caminho.",
      en: "Authoritative servers, data pipelines and automations that remove manual work.",
    },
    itens: ["Node.js", "WebSocket", "Zod", "SQLite", "Python", "SheetJS", "Docker", "GitHub Actions"],
    casos: ["ancient-souls", "deck-building-system", "zenfisio-notificar"],
  },
  {
    id: "ia",
    icone: "faisca",
    titulo: { pt: "IA aplicada", en: "Applied AI" },
    texto: {
      pt: "IA como ferramenta de produção: tradução com glossário, edição de vídeo e desenvolvimento direcionado.",
      en: "AI as a production tool: glossary-driven translation, video editing and directed development.",
    },
    itens: ["Claude Code", "Cursor SDK", "Ollama", "faster-whisper", "Prompting", "LQA com IA"],
    casos: ["nexustranslator", "claudio-editor", "traducoes-jogos-mods"],
  },
  {
    id: "translation",
    icone: "idiomas",
    titulo: { pt: "Tradução e localização", en: "Translation and localization" },
    texto: {
      pt: "Traduções PT-BR não oficiais, autorizadas pelos autores, com revisão humana e glossários vivos.",
      en: "Unofficial PT-BR translations, authorized by the authors, with human review and living glossaries.",
    },
    itens: ["PT-BR", "LQA", "Glossários", "Unity / IL2CPP", "Unreal", "Hytale", "i18n"],
    casos: ["traducoes-jogos-mods", "nexustranslator", "rpg-skills-mod"],
  },
  {
    id: "desktop",
    icone: "ferramenta",
    titulo: { pt: "Desktop e ferramentas", en: "Desktop and tooling" },
    texto: {
      pt: "Aplicativos e plugins que resolvem uma tarefa só, e bem: PDFs, OBS, gerenciadores de mods.",
      en: "Apps and plugins that solve one job well: PDFs, OBS, mod managers.",
    },
    itens: ["Python", "Tkinter", "ReportLab", "pywebview", "C++17", "Qt6", "CMake", "PyQt"],
    casos: ["attendance-declaration", "obs-overlay", "mo2tools"],
  },
];

// ------------------------------------------------------------------------
// Como eu trabalho (os quatro passos)
// ------------------------------------------------------------------------

export const processo = [
  {
    titulo: { pt: "Arquitetar", en: "Architect" },
    texto: {
      pt: "Defino objetivo, regras, experiência e critérios de qualidade antes da primeira linha.",
      en: "I set goals, rules, experience and quality bars before the first line of code.",
    },
  },
  {
    titulo: { pt: "Direcionar a IA", en: "Direct the AI" },
    texto: {
      pt: "Os modelos mais avançados executam e refinam; eu conduzo cada ciclo com instruções precisas.",
      en: "The most capable models execute and refine; I steer every cycle with precise instructions.",
    },
  },
  {
    titulo: { pt: "Revisar e testar", en: "Review and test" },
    texto: {
      pt: "Leio o que mudou, meço, testo e corrijo. Nada vai ao ar só porque compilou.",
      en: "I read every change, measure, test and fix. Nothing ships just because it compiled.",
    },
  },
  {
    titulo: { pt: "Entregar e evoluir", en: "Ship and evolve" },
    texto: {
      pt: "Publico com notas de versão claras e sigo melhorando a partir do uso real.",
      en: "I ship with clear release notes and keep improving from real usage.",
    },
  },
];
