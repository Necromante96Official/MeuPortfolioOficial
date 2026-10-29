// ========================================================================
// Projetos: jogos e mods (Ancient Souls, RPG Skills, Forbidden Legacy).
// Formato de cada projeto: ver js/dados/projetos/index.js.
// ========================================================================

export const jogos = [
  {
    slug: "ancient-souls",
    categoria: "game",
    destaque: true,
    privado: true,
    status: "ativo",
    cor: "#a78bfa",
    sigla: "AS",
    icone: "espada",
    links: [{ tipo: "site", url: "https://ancientsouls.com.br/" }],
    stack: ["TypeScript", "PixiJS 8", "Vite", "Node.js + ws", "Zod", "SQLite", "Vitest", "Docker"],
    numeros: [
      { valor: "v0.0.67", rotulo: { pt: "versão alfa", en: "alpha build" } },
      { valor: "67", rotulo: { pt: "versões publicadas", en: "releases shipped" } },
      { valor: "1080p", rotulo: { pt: "pixel art nativa", en: "native pixel art" } },
    ],
    pt: {
      titulo: "Ancient Souls",
      chamada: "JRPG 2D em pixel art que roda no navegador, com conta e servidor próprio.",
      descricao: [
        "Ancient Souls é o meu JRPG autoral: uma aventura de fantasia em pixel art protagonizada por Azzazel, inspirada nos clássicos do gênero. O jogo roda direto no navegador, em ancientsouls.com.br, com conta, login e progresso guardado no servidor.",
        "Por dentro, as regras do jogo são puras e testadas, separadas da renderização em PixiJS. O servidor em Node.js com WebSocket é autoritativo e valida cada mensagem com Zod. Cada versão passa por revisão, testes e CI antes de ir ao ar, sempre com notas de versão completas.",
      ],
      papel: "Direção criativa e arquitetura. Defino a visão, as regras e os critérios de qualidade, conduzo a IA na implementação e reviso cada entrega.",
      destaques: [
        "Jogável no navegador, com conta e servidor próprio",
        "Regras do jogo independentes do motor gráfico e cobertas por testes",
        "Servidor WebSocket autoritativo com validação Zod e banco SQLite",
        "CI com lint, tipos, testes e build a cada versão",
      ],
    },
    en: {
      titulo: "Ancient Souls",
      chamada: "A 2D pixel-art JRPG that runs in the browser, with accounts and its own server.",
      descricao: [
        "Ancient Souls is my original JRPG: a pixel-art fantasy adventure starring Azzazel, inspired by the genre classics. It runs right in the browser at ancientsouls.com.br, with accounts, login and progress stored on the server.",
        "Under the hood, game rules are pure and tested, decoupled from the PixiJS renderer. The Node.js WebSocket server is authoritative and validates every message with Zod. Every release goes through review, tests and CI before going live, always with full patch notes.",
      ],
      papel: "Creative direction and architecture. I set the vision, rules and quality bar, steer the AI through implementation and review every delivery.",
      destaques: [
        "Playable in the browser, with accounts and a dedicated server",
        "Game rules independent of the renderer and covered by tests",
        "Authoritative WebSocket server with Zod validation and SQLite",
        "CI with lint, types, tests and build on every release",
      ],
    },
  },
  {
    slug: "rpg-skills-mod",
    categoria: "game",
    grupo: "rpg-skills",
    destaque: true,
    privado: true,
    status: "estavel",
    cor: "#ef4444",
    sigla: "RS",
    icone: "nivel",
    links: [
      { tipo: "workshop", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3694501995" },
      { tipo: "site", url: "https://necromante96official.github.io/RPG-Skills-Site/" },
    ],
    stack: ["Java 17", "Gradle 8", "Necesse API", "ByteBuddy", "JUnit 5"],
    numeros: [
      { valor: "20,8 mil", valorEn: "20.8k", rotulo: { pt: "visitantes únicos", en: "unique visitors" } },
      { valor: "8,5 mil", valorEn: "8.5k", rotulo: { pt: "inscritos", en: "subscribers" } },
      { valor: "539", rotulo: { pt: "favoritos", en: "favorites" } },
      { valor: "34", rotulo: { pt: "classes", en: "classes" } },
    ],
    pt: {
      titulo: "RPG Skills",
      chamada: "Transforma o Necesse em um RPG completo: 34 classes, nível 170 e 12 idiomas.",
      descricao: [
        "RPG Skills adiciona progressão de RPG ao Necesse sem mudar a identidade do jogo. O jogador ganha XP em combate, mineração, agricultura, pesca e trabalho no assentamento, sobe de nível e investe pontos em 34 classes de até 5 níveis cada.",
        "As classes cobrem combate, defesa, mobilidade, mineração, saque, pesca, assentamentos e necromancia, com sinergias como Damage God e Elemental Fusion. Funciona em single-player, mundos hospedados e servidores dedicados, com configuração completa e 12 idiomas.",
      ],
      papel: "Criado e planejado do zero: design da progressão, balanceamento, arquitetura em módulos Gradle, localização e publicação no Steam Workshop.",
      destaques: [
        "Versão 4.1 para Necesse 1.3.3 no Steam Workshop",
        "Nível máximo 170 (34 classes × 5 pontos)",
        "14 módulos Gradle com testes JUnit",
        "Single-player, mundos hospedados e servidores dedicados",
      ],
    },
    en: {
      titulo: "RPG Skills",
      chamada: "Turns Necesse into a full RPG: 34 classes, level 170 and 12 languages.",
      descricao: [
        "RPG Skills adds RPG progression to Necesse without changing the game's identity. Players earn XP from combat, mining, farming, fishing and settlement work, level up and spend points on 34 classes with up to 5 levels each.",
        "Classes cover combat, defense, mobility, mining, loot, fishing, settlements and necromancy, with synergies like Damage God and Elemental Fusion. It works in single-player, hosted worlds and dedicated servers, with full configuration and 12 languages.",
      ],
      papel: "Created and planned from scratch: progression design, balancing, multi-module Gradle architecture, localization and Steam Workshop publishing.",
      destaques: [
        "Version 4.1 for Necesse 1.3.3 on the Steam Workshop",
        "Max level 170 (34 classes × 5 points)",
        "14 Gradle modules with JUnit tests",
        "Single-player, hosted worlds and dedicated servers",
      ],
    },
  },
  {
    slug: "forbidden-legacy",
    categoria: "game",
    grupo: "forbidden",
    destaque: true,
    privado: true,
    status: "beta",
    cor: "#d4881c",
    sigla: "FL",
    icone: "cartas",
    links: [
      { tipo: "site", url: "https://forbiddenlegacy.com.br/" },
      { tipo: "discord", url: "https://discord.gg/MkJXZ9tNQ6" },
    ],
    stack: ["Godot 4", "GDScript", "C# .NET 9", "Avalonia", "Python", "TypeScript"],
    numeros: [
      { valor: "1.600+", valorEn: "1,600+", rotulo: { pt: "cartas", en: "cards" } },
      { valor: "63", rotulo: { pt: "NPCs com IA e deck próprios", en: "NPCs with their own AI and deck" } },
      { valor: "Beta 2.2", rotulo: { pt: "versão atual", en: "current version" } },
      { valor: "4", rotulo: { pt: "idiomas", en: "languages" } },
    ],
    pt: {
      titulo: "Forbidden Legacy",
      chamada: "Remake de fã de Yu-Gi-Oh! Forbidden Memories, da Trager Games, com PVP online e Season 2. Colaboro como dev.",
      descricao: [
        "Forbidden Legacy é o clássico do PS1 reconstruído do zero por Felipe França / Trager Games, \"com tudo que ele deveria ter tido\": fusão fiel ao Forbidden Memories, campanha com drama, IA de oponentes, banlist por grupos, loja, boosters, conquistas e interface refeita para PC e Android. Está no Beta 2.2, com mais de 1.600 cartas e 63 NPCs, cada um com IA e deck próprios.",
        "A campanha traz a Season 1 completa e a Season 2 até o Shadi, além do Torneio Sombrio e eventos. Tem Modo Torneio (Normal, Lendário e Sombrio), PVP online com busca de oponente, salas por código, espectadores e ranking ao vivo, e Cross-Save para continuar o mesmo progresso no PC e no celular. Disponível em 4 idiomas, com launcher que atualiza só o que mudou.",
        "Colaboro com a Trager Games no ecossistema do jogo, criando ferramentas internas que apoiam o desenvolvimento: o Patch Manager, o editor de save e o sistema de montagem de decks.",
      ],
      papel: "Desenvolvedor colaborador: ferramentas internas em C#, Python e TypeScript que ajudam a equipe a testar, equilibrar e evoluir o jogo.",
      destaques: [
        "Beta 2.2 com mais de 1.600 cartas e 63 NPCs",
        "Season 1 completa e Season 2 até o Shadi",
        "PVP online com ranking ao vivo e Cross-Save entre PC e celular",
        "Launcher para Windows e Linux e APK para Android",
        "Três ferramentas internas criadas por mim",
      ],
    },
    en: {
      titulo: "Forbidden Legacy",
      chamada: "Fan remake of Yu-Gi-Oh! Forbidden Memories by Trager Games, with online PVP and Season 2. I contribute as a developer.",
      descricao: [
        "Forbidden Legacy is the PS1 classic rebuilt from scratch by Felipe França / Trager Games, \"with everything it should have had\": FM-faithful fusion, a campaign with real drama, opponent AI, group banlist, shop, boosters, achievements and an interface redesigned for PC and Android. It is in Beta 2.2, with 1,600+ cards and 63 NPCs, each with its own AI and deck.",
        "The campaign has the full Season 1 and Season 2 up to Shadi, plus the Shadow Tournament and events. It features Tournament Mode (Normal, Legendary and Shadow), online PVP with matchmaking, code rooms, spectators and a live leaderboard, and Cross-Save to keep the same progress on PC and phone. Available in 4 languages, with a launcher that only downloads what changed.",
        "I collaborate with Trager Games on the game's ecosystem, building internal tools that support development: the Patch Manager, the save editor and the deck building system.",
      ],
      papel: "Contributing developer: internal tooling in C#, Python and TypeScript that helps the team test, balance and evolve the game.",
      destaques: [
        "Beta 2.2 with 1,600+ cards and 63 NPCs",
        "Full Season 1 and Season 2 up to Shadi",
        "Online PVP with a live leaderboard and Cross-Save between PC and phone",
        "Launcher for Windows and Linux, APK for Android",
        "Three internal tools built by me",
      ],
    },
  },
];
