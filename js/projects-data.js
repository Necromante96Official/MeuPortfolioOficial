/* Portfolio projects data — Lucas Tavares / Necromante96Official */
window.PROJECTS = [
  {
    slug: "fisiohub",
    category: "institucional",
    icon: "🏥",
    color: "#60a5fa",
    year: "2024-2025",
    destaque: true,
    private: false,
    links: { github: "", demo: "", docs: "" },
    thumb: "assets/img/fisiohub.webp",
    pt: {
      titulo: "FisioHub — Sistema Clínica ESEFID/UFRGS",
      resumo: "Gestão offline e privativa para fisioterapia: importação ZenFisio → organização por data, evoluções pendentes, financeiro e pacientes.",
      descricao: "Sistema em uso real na clínica da UFRGS. Importa dados do ZenFisio via 3 extensões Chrome (Coletor Ctrl+Shift+X, Notificador Ctrl+Shift+Z, Alerta Repetidor Alt+Z), filtra por competência, lista evoluções pendentes e consolida financeiro/agenda. 100% local (LocalStorage), sem servidor.",
      papel: "Arquitetura, frontend TS/Vite, extensões MV3, roteamento hash SPA e testes.",
      techs: ["TypeScript 5.9","Vite 8","Chrome Extensions MV3","Hash SPA","LocalStorage","GitHub Pages"],
      resultados: ["Em uso institucional contínuo (v0.5.7)","382 linhas de README + testes","3 extensões em produção","Dados nunca saem do dispositivo"]
    },
    en: {
      titulo: "FisioHub — ESEFID/UFRGS Clinic System",
      resumo: "Offline, private physio management: ZenFisio import → date-organized pending evolutions, finance & patients.",
      descricao: "Real-world system at UFRGS clinic. Imports ZenFisio data via 3 Chrome extensions, filters by date, flags pending evolutions and consolidates finance/schedule. 100% local.",
      papel: "Architecture, TS/Vite frontend, MV3 extensions, hash SPA routing & tests.",
      techs: ["TypeScript 5.9","Vite 8","Chrome Extensions MV3","Hash SPA","LocalStorage","GitHub Pages"],
      resultados: ["Live institutional use (v0.5.7)","382-line README + tests","3 extensions in prod","Data never leaves device"]
    }
  },
  {
    slug: "nexustranslator",
    category: "tool",
    icon: "🌐",
    color: "#a78bfa",
    year: "2024-2025",
    destaque: true,
    private: true,
    links: { github: "", demo: "https://www.nexusmods.com/profile/Necromante96Official", docs: "" },
    thumb: "assets/img/nexustranslator.webp",
    pt: {
      titulo: "NexusTranslator — Central de Tradução com IA",
      resumo: "v6.3.5, 31 módulos: traduz mods Stardew Valley, Hytale e jogos Unreal Engine + Unity; scan, normalização, progresso, ZIPs e LQA. Cursor + Ollama + UnityPy.",
      descricao: "Tool proprietária para traduzir mods Stardew Valley, Hytale e jogos Unreal Engine + Unity. Pipeline completo: detecta Unity Mono/IL2CPP e pacotes Unreal, integra NexusMods + Cursor Auto, gera zips traduzidos, audita vazamentos de inglês e glossários. CI com security audit e 15 scripts de qualidade.",
      papel: "Arquitetura Node/TS, esbuild, Cursor SDK, pipelines de LQA e automação de ZIPs para Stardew/Hytale/Unreal/Unity.",
      techs: ["TypeScript 5.5","Node 20","esbuild","Cursor SDK","archiver/ws/yauzl","UnityPy","Ollama","Unreal Engine","Unity"],
      resultados: ["6.3.5 estável, 31 módulos","Stardew + Hytale + Unreal + Unity","Base para pack 12 idiomas RPG Skills"]
    },
    en: {
      titulo: "NexusTranslator — AI Translation Hub",
      resumo: "v6.3.5, 31 modules: translates Stardew Valley, Hytale and Unreal Engine + Unity games; scanning, normalization, progress, ZIPs & LQA. Cursor + Ollama + UnityPy.",
      descricao: "Proprietary tool to translate Stardew Valley, Hytale and Unreal Engine + Unity games. Detects Unity Mono/IL2CPP and Unreal packages, drives Cursor Auto, builds translated ZIPs, audits English leaks & glossaries. CI + security audit.",
      papel: "Node/TS architecture, esbuild, Cursor SDK, LQA & ZIP automation for Stardew/Hytale/Unreal/Unity.",
      techs: ["TypeScript 5.5","Node 20","esbuild","Cursor SDK","archiver/ws/yauzl","UnityPy","Ollama","Unreal Engine","Unity"],
      resultados: ["Stable 6.3.5, 31 modules","Stardew + Hytale + Unreal + Unity","Powers 12-language RPG Skills pack"]
    }
  },
  {
    slug: "rpg-skills-mod",
    category: "game",
    icon: "⚔️",
    color: "#ef4444",
    year: "2023-2025",
    destaque: true,
    private: false,
    links: { github: "https://github.com/Necromante96Official", demo: "https://steamcommunity.com/workshop/filedetails/?id=3694501995", docs: "" },
    thumb: "assets/img/rpg-skills-mod.webp",
    pt: {
      titulo: "RPG Skills Mod — Necesse (Java)",
      resumo: "Mod de progressão RPG para Necesse 1.3.2: 33 classes, 19 passivas, XP dinâmico, 12 idiomas. 18.5k acessos, 457 favs, 143 avaliações.",
      descricao: "Transforma Necesse em RPG: 33 classes (5 categorias), nível máx 165, 19 passivas desbloqueáveis, loja QoL, suporte controle e multi-idioma. Gradle 8 multi-módulo (core, gameplay, ui, network, persistence, etc) + ADRs.",
      papel: "Java 17, Gradle multi-projeto, Necesse API, sistema de progressão, balanceamento e localização.",
      techs: ["Java 17","Gradle 8","Necesse API","JUnit","Eclipse JDT","12 idiomas"],
      resultados: ["v2.7 compat Necesse 1.3.2","18.5k acessos Workshop","457 favoritos • 143 avaliações"]
    },
    en: {
      titulo: "RPG Skills Mod — Necesse (Java)",
      resumo: "RPG progression mod for Necesse 1.3.2: 33 classes, 19 passives, dynamic XP, 12 locales. 18.5k views, 457 favs, 143 ratings.",
      descricao: "Turns Necesse into an RPG: 33 classes (5 cats), max 165, 19 passives, QoL shop, controller & i18n. Gradle 8 multi-module + ADRs.",
      papel: "Java 17, multi-module Gradle, Necesse API, progression, balancing & i18n.",
      techs: ["Java 17","Gradle 8","Necesse API","JUnit","Eclipse JDT","12 locales"],
      resultados: ["v2.7 for Necesse 1.3.2","18.5k Workshop views","457 favs • 143 ratings"]
    }
  },
  {
    slug: "forbidden-legacy-patchs",
    category: "tool",
    icon: "🛡️",
    color: "#1ea54a",
    year: "2024-2025",
    destaque: true,
    private: false,
    links: { github: "", demo: "", docs: "" },
    thumb: "assets/img/forbidden-legacy.webp",
    pt: {
      titulo: "Forbidden Legacy Patch Manager",
      resumo: "Gerenciador C# .NET 9 + Avalonia 11.2.5 que gera overlays patch_{N:04d}.pck (AES) e mescla ao patch oficial via Python.",
      descricao: "Reverse Godot 4: extrai/decompila GDExtension PCK, criptografa com pycryptodome, unifica presets/drops (Rules) + Features UI, gerencia saves .flsave sem sobrescrever exe/version.json. Publish single-file win-x64.",
      papel: "C# Avalonia UI, Python pipelines (pck_writer, pck_crypto, GDRE), pesquisa de formato PCK e UX do manager.",
      techs: ["C# .NET 9","Avalonia 11.2.5","Python 3.10","pycryptodome","Godot PCK v4","GDRE"],
      resultados: ["Overlays patch_xxxx.pck estáveis","Instalação segura sem conflito com launcher","Arquitetura Rules + Features"]
    },
    en: {
      titulo: "Forbidden Legacy Patch Manager",
      resumo: "C# .NET 9 + Avalonia 11.2.5 manager that builds patch_{N:04d}.pck overlays (AES) and merges with official patch via Python.",
      descricao: "Godot 4 reverse: extracts/decompiles PCK, encrypts via pycryptodome, merges Rules presets + Features UI, manages .flsave without touching exe/version.json.",
      papel: "C# Avalonia UI, Python pipelines, PCK research & manager UX.",
      techs: ["C# .NET 9","Avalonia 11.2.5","Python 3.10","pycryptodome","Godot PCK v4","GDRE"],
      resultados: ["Stable patch_xxxx.pck overlays","Safe install no launcher conflict","Rules + Features arch"]
    }
  },
  {
    slug: "controle-financeiro",
    category: "web",
    icon: "💳",
    color: "#22c55e",
    year: "2024-2025",
    destaque: true,
    private: false,
    links: { github: "https://github.com/Necromante96Official", demo: "", docs: "" },
    thumb: "assets/img/controle-financeiro.webp",
    pt: {
      titulo: "Controle Financeiro PWA",
      resumo: "PWA MIT offline-first com extrato dinâmico, VA/VR, cartões e backup local. Instalável (Service Worker + manifest) — build 281.",
      descricao: "Gestão familiar 100% local: categorias coloridas, extrato dinâmico, controle de benefícios e cartões, import/export backup sem servidor. Capacitor 5.7 para Android.",
      papel: "Vanilla JS (type:module), PWA, Service Worker, design de dados e build Android.",
      techs: ["Vanilla JS","PWA","Service Worker","Capacitor 5.7","IndexedDB","HTML/CSS"],
      resultados: ["v1.0.5 build 281","MIT aberto","Instalável em celular/PC"]
    },
    en: {
      titulo: "Finance Control PWA",
      resumo: "MIT offline-first PWA with dynamic ledger, VA/VR, cards & local backup. Installable (SW + manifest) — build 281.",
      descricao: "Family finance 100% local: colored categories, dynamic ledger, benefit/card tracking, import/export backup with no server. Capacitor 5.7 for Android.",
      papel: "Vanilla JS, PWA, SW, data design & Android build.",
      techs: ["Vanilla JS","PWA","Service Worker","Capacitor 5.7","IndexedDB","HTML/CSS"],
      resultados: ["v1.0.5 build 281","MIT open","Installable on phone/PC"]
    }
  },
  {
    slug: "traducoes-jogos-mods",
    category: "translation",
    icon: "📖",
    color: "#d4881c",
    year: "2023-2025",
    destaque: true,
    private: false,
    links: { github: "", demo: "https://www.nexusmods.com/profile/Necromante96Official", docs: "https://www.curseforge.com/hytale/mods/maior-pack-de-traducoes-pt-br" },
    thumb: "assets/img/traducoes.webp",
    pt: {
      titulo: "Mods de Tradução PT-BR — Jogos & Mods (não oficiais, autorizados pelas devs)",
      resumo: "Mods não oficiais autorizados: Stardew Valley (Nexus), Forsaken Realms: Vahrin's Call (Nexus mods/5), Hytale (CurseForge), Elementallis (Steam 1304280) e Dragon Quest I & II Remake (em tradução).",
      descricao: "Localização PT-BR não oficial distribuída como mod autorizado pelas desenvolvedoras: packs Stardew Valley (Nexus), Forsaken Realms: Vahrin's Call — mod autorizado pela dev (Nexus mods/5), Hytale PT-BR na CurseForge e Unreal/Unity, Elementallis — tradução autorizada aguardando publicação Nexus — e Dragon Quest I & II HD-2D Remake em tradução (sem vínculo oficial com a publisher). Fluxo NexusTranslator + LQA + glossários. Aviso: sem afiliação com publishers oficiais.",
      papel: "Tradução, revisão, LQA, geração de ZIPs, contato com devs e publicação Nexus/CurseForge/Steam como mods não oficiais autorizados.",
      techs: ["NexusTranslator","LQA","Glossários","Unity/IL2CPP","Unreal Engine","Hytale","Steam Workshop"],
      resultados: ["Forsaken Realms — mod autorizado mods/5","Hytale PT-BR na CurseForge","Elementallis autorizado (aguardando Nexus)","DQ I&II em progresso (mod não oficial)"]
    },
    en: {
      titulo: "PT-BR Translation Mods — Games & Mods (unofficial, dev-authorized)",
      resumo: "Authorized unofficial mods: Stardew (Nexus), Forsaken Realms: Vahrin's Call (Nexus mods/5), Hytale (CurseForge), Elementallis (Steam 1304280) & Dragon Quest I & II Remake (WIP).",
      descricao: "Unofficial PT-BR localization distributed as dev-authorized mods: Stardew Valley packs (Nexus), Forsaken Realms: Vahrin's Call — dev-authorized mod (Nexus mods/5), Hytale PT-BR on CurseForge and Unreal/Unity, Elementallis — authorized translation pending Nexus — and Dragon Quest I & II HD-2D WIP (no official publisher affiliation). NexusTranslator + LQA + glossaries. Disclaimer: no affiliation with official publishers.",
      papel: "Translation, review, LQA, ZIP builds, dev liaison & Nexus/CurseForge/Steam publishing as authorized unofficial mods.",
      techs: ["NexusTranslator","LQA","Glossaries","Unity/IL2CPP","Unreal Engine","Hytale","Steam Workshop"],
      resultados: ["Forsaken — authorized mod mods/5","Hytale PT-BR on CurseForge","Elementallis authorized (pending Nexus)","DQ I&II WIP (unofficial mod)"]
    }
  },
  {
    slug: "ancient-souls",
    category: "game",
    icon: "🗺️",
    color: "#a78bfa",
    year: "2023-2024",
    destaque: false,
    private: true,
    links: { github: "", demo: "", docs: "" },
    thumb: "assets/img/ancient-souls.webp",
    pt: {
      titulo: "Ancient Souls — JRPG (RPG Maker MZ)",
      resumo: "Jogo autoral 'As Crônicas de Ancient Souls' com 12+ plugins AS_* custom (Title/Config/Menu) e CSS isolado.",
      descricao: "RPG 2D JRPG medieval completo em RPG Maker MZ 1.10.0 / NW.js. Plugins proprietários AS_0.0 Orchestrator, AS_1.0 Title, etc, telas custom e >500 assets (tilesets, system, sv_enemies).",
      papel: "Game design, arquitetura de plugins JS ES6, CSS premium e level design.",
      techs: ["RPG Maker MZ 1.10","JavaScript ES6","NW.js","CSS","HTML5"],
      resultados: ["Engine custom completa","500+ assets","Sistema de telas proprietário"]
    },
    en: {
      titulo: "Ancient Souls — JRPG (RPG Maker MZ)",
      resumo: "Original 'Chronicles of Ancient Souls' with 12+ AS_* custom plugins (Title/Config/Menu) & isolated CSS.",
      descricao: "Full 2D medieval JRPG on RPG Maker MZ 1.10.0 / NW.js. Proprietary AS_0.0 Orchestrator etc, custom screens & 500+ assets.",
      papel: "Game design, JS plugin arch, premium CSS & level design.",
      techs: ["RPG Maker MZ 1.10","JavaScript ES6","NW.js","CSS","HTML5"],
      resultados: ["Full custom engine","500+ assets","Proprietary screen system"]
    }
  },
  {
    slug: "deck-building-system",
    category: "tool",
    icon: "🃏",
    color: "#c8973a",
    year: "2024",
    destaque: false,
    private: false,
    links: { github: "", demo: "", docs: "" },
    thumb: "assets/img/deck-building.webp",
    pt: {
      titulo: "DeckBuildingSystem — Forbidden Legacy",
      resumo: "Pipeline TS 5.8 + esbuild que cataloga Power Tier, arquétipos, sincroniza imagens e publica docs/ no GitHub Pages.",
      descricao: "Tooling de balanceamento: ingest de catálogo xlsx, analyze-effects, build-archetype-index, validate-inventory, sync-images. Frontend estático com 200+ cartas webp.",
      papel: "TypeScript strict, esbuild, TSX, pipelines ingest/validate/build e publisher Pages.",
      techs: ["TypeScript 5.8","Node 22","esbuild","TSX","XLSX","GitHub Pages"],
      resultados: ["200+ cartas webp","Pipeline strict TS validado","Publicação automática Pages"]
    },
    en: {
      titulo: "DeckBuildingSystem — Forbidden Legacy",
      resumo: "TS 5.8 + esbuild pipeline cataloging Power Tier, archetypes, syncing images & publishing to GitHub Pages.",
      descricao: "Balancing tooling: xlsx catalog ingest, analyze-effects, archetype index, inventory validation, image sync. Static frontend with 200+ webp cards.",
      papel: "Strict TS, esbuild, TSX, ingest/validate/build & Pages publisher.",
      techs: ["TypeScript 5.8","Node 22","esbuild","TSX","XLSX","GitHub Pages"],
      resultados: ["200+ webp cards","Strict validated pipeline","Automated Pages publish"]
    }
  },
  {
    slug: "obs-overlay",
    category: "tool",
    icon: "⏱️",
    color: "#ef4444",
    year: "2024",
    destaque: false,
    private: false,
    links: { github: "", demo: "", docs: "" },
    thumb: "assets/img/obs-overlay.webp",
    pt: {
      titulo: "OBS Overlay — Timer estilo Action!",
      resumo: "Timer que flutua mas é excluído da captura (WDA_EXCLUDEFROMCAPTURE). 3 modos: Python overlay, plugin nativo C++/CMake e Browser Dock.",
      descricao: "Mostra tempo de gravação com ponto pulsante pill HUD, pausa/retoma com OBS e some ao parar. Requer OBS 28+ e Windows 10 2004+. WebSocket 5.x, movable por mouse.",
      papel: "Python 3.10 (obs-websocket), C++ CMake plugin nativo, HTML/JS dock e Win32 API.",
      techs: ["Python 3.10","C++ / CMake","OBS WebSocket 5","Win32 API","HTML/JS"],
      resultados: ["3 modos de uso","Não entra no vídeo","Live para streamers"]
    },
    en: {
      titulo: "OBS Overlay — Action! style Timer",
      resumo: "Floating timer excluded from capture (WDA_EXCLUDEFROMCAPTURE). 3 modes: Python overlay, native C++/CMake plugin & Browser Dock.",
      descricao: "Shows recording time with pill HUD, pauses/resumes with OBS. Needs OBS 28+ & Win 10 2004+. WebSocket 5, mouse-draggable.",
      papel: "Python (obs-websocket), C++ native plugin, HTML dock & Win32 API.",
      techs: ["Python 3.10","C++ / CMake","OBS WebSocket 5","Win32 API","HTML/JS"],
      resultados: ["3 usage modes","Excluded from capture","Live for streamers"]
    }
  },
  {
    slug: "mo2tools",
    category: "tool",
    icon: "🧩",
    color: "#6b7280",
    year: "2023-2024",
    destaque: false,
    private: false,
    links: { github: "", demo: "", docs: "" },
    thumb: "assets/img/mo2tools.webp",
    pt: {
      titulo: "MO2Tools — Automação Mod Organizer 2",
      resumo: "Plugin MO2 (mobase) que automatiza download→instalação, sanitiza nome, version-fix Ctrl+Shift+Z, retry 8x.",
      descricao: "Central modular (Core/Automation/UI) em Python/PyQt: seleção rápida, sanitização TitleCase, delete sidecars, update in-place e painel com 18+ settings. v0.2.2 FINAL.",
      papel: "Python, mobase IPluginTool, PyQt, arquitetura modular e QoL de modding.",
      techs: ["Python 3","mobase MO2 API","PyQt5/6","Qt"],
      resultados: ["Fluxo download→instalação automático","Sanitização e version fix","18+ settings"]
    },
    en: {
      titulo: "MO2Tools — Mod Organizer 2 Automation",
      resumo: "MO2 plugin (mobase) automating download→install, name sanitize, version-fix Ctrl+Shift+Z, 8x retry.",
      descricao: "Modular hub (Core/Automation/UI) in Python/PyQt: quick install, TitleCase sanitize, sidecar delete, in-place update & 18+ settings. v0.2.2 FINAL.",
      papel: "Python, mobase IPluginTool, PyQt, modular arch & modding QoL.",
      techs: ["Python 3","mobase MO2 API","PyQt5/6","Qt"],
      resultados: ["Auto download→install","Name sanitize + version fix","18+ settings"]
    }
  },
  {
    slug: "rpg-skills-site",
    category: "web",
    icon: "🌙",
    color: "#d4881c",
    year: "2024-2025",
    destaque: false,
    private: false,
    links: { github: "", demo: "", docs: "" },
    thumb: "assets/img/rpg-skills-site.webp",
    pt: {
      titulo: "RPG Skills Site — Vitrine Premium",
      resumo: "Site vanilla HTML/CSS/JS com 11 páginas, hero com orbs/partículas, i18n PT/EN e deploy .nojekyll. Base deste portfólio.",
      descricao: "Landing premium + 10 páginas dedicadas (progressão, classes, passivas, janela mockup, QoLs, changelog). Google Fonts (Exo 2/Rajdhani) + flag-icons, reveal IntersectionObserver, sem framework.",
      papel: "HTML5, CSS tokens→polish (10 arquivos), JS vanilla IIFE e i18n vanilla.",
      techs: ["HTML5","CSS vanilla","JavaScript","i18n","GitHub Pages"],
      resultados: ["Hub 11 páginas","Hero premium premiado","Bilíngue instantâneo"]
    },
    en: {
      titulo: "RPG Skills Site — Premium Showcase",
      resumo: "Vanilla HTML/CSS/JS site with 11 pages, orbs/particles hero, PT/EN i18n & .nojekyll deploy. Basis for this portfolio.",
      descricao: "Premium landing + 10 dedicated pages. Google Fonts + flag-icons, IntersectionObserver reveal, no framework.",
      papel: "HTML5, CSS tokens→polish, vanilla JS & i18n.",
      techs: ["HTML5","CSS vanilla","JavaScript","i18n","GitHub Pages"],
      resultados: ["11-page hub","Premium hero","Instant bilingual"]
    }
  }
];
