/* Portfolio projects data: Lucas Tavares / Necromante96Official */
window.PROJECTS = [
  {
    slug: "fisiohub",
    category: "institucional",
    icon: "🏥",
    color: "#60a5fa",
    year: "2024-2026",
    destaque: true,
    private: false,
    links: { github: "", demo: "", docs: "" },
    thumb: "assets/img/fisiohub.webp",
    pt: {
      titulo: "FisioHub",
      resumo: "Sistema criado para a Clínica de Fisioterapia da ESEFID/UFRGS. Gestão offline e privativa com 3 extensões Chrome que importam dados do ZenFisio e organizam por data, evoluções pendentes, financeiro e pacientes. 100% local, sem servidor.",
      descricao: "Sistema criado para a Clínica de Fisioterapia da ESEFID/UFRGS, em uso real. Importa dados do ZenFisio via 3 extensões Chrome (Coletor Ctrl+Shift+X, Notificador Ctrl+Shift+Z, Alerta Repetidor Alt+Z), filtra por competência, lista evoluções pendentes e consolida financeiro e agenda. Arquitetura 100% local com LocalStorage, sem servidor, com foco em privacidade e fluxo clínico.",
      papel: "Arquitetura completa, frontend em TypeScript com Vite, extensões Chrome MV3 em JavaScript, roteamento hash SPA e testes. Código principal em TypeScript 98% e 3 content-scripts em JavaScript.",
      techs: ["TypeScript 5.9","Vite 8","Chrome Extensions MV3","JavaScript","Hash SPA","LocalStorage"],
      resultados: ["Em uso institucional contínuo na Clínica de Fisioterapia ESEFID/UFRGS (v0.5.7)","382 linhas de README + testes","3 extensões Chrome em produção","Dados nunca saem do dispositivo"]
    },
    en: {
      titulo: "FisioHub",
      resumo: "System created for the Physiotherapy Clinic of ESEFID/UFRGS. Offline, private management with 3 Chrome extensions importing ZenFisio data and organizing by date, pending evolutions, finance and patients. 100% local.",
      descricao: "System created for the Physiotherapy Clinic of ESEFID/UFRGS, live in production. Imports ZenFisio data via 3 Chrome extensions (Collector Ctrl+Shift+X, Notifier Ctrl+Shift+Z, Repeater Alert Alt+Z), filters by date, flags pending evolutions and consolidates finance and schedule. 100% local with LocalStorage, no server, focused on privacy and clinical flow.",
      papel: "Full architecture, frontend in TypeScript with Vite, Chrome MV3 extensions in JavaScript, hash SPA routing and tests. Main code 98% TypeScript and 3 content-scripts in JavaScript.",
      techs: ["TypeScript 5.9","Vite 8","Chrome Extensions MV3","JavaScript","Hash SPA","LocalStorage"],
      resultados: ["Live institutional use at ESEFID/UFRGS Physiotherapy Clinic (v0.5.7)","382-line README + tests","3 Chrome extensions in production","Data never leaves device"]
    }
  },
  {
    slug: "controle-financeiro",
    category: "web",
    icon: "💳",
    color: "#22c55e",
    year: "2024-2026",
    destaque: true,
    private: false,
    links: { github: "https://github.com/Necromante96Official", demo: "", docs: "" },
    thumb: "assets/img/controle-financeiro.webp",
    pt: {
      titulo: "Controle Financeiro",
      resumo: "PWA offline-first para controle familiar. Desenvolvido 100% em JavaScript vanilla com HTML5 e CSS3, sem frameworks. Extrato dinâmico, VA/VR, cartões e backup local instalável. Build 281, licença MIT.",
      descricao: "PWA 100% em JavaScript vanilla (type:module) com HTML5 e CSS3 puro (10 arquivos tokens→polish). Gestão familiar totalmente local com categorias coloridas, extrato dinâmico, controle de benefícios VA/VR e cartões, e backup import/export sem servidor. Build com Service Worker e manifest, instalável como app e com empacotamento Android via Capacitor 5.7.",
      papel: "Desenvolvimento 100% JavaScript vanilla, sem TypeScript ou frameworks, com PWA Service Worker, design de dados com IndexedDB e build Android. Código direto, leve e performático.",
      techs: ["JavaScript","HTML5","CSS3","PWA","Service Worker","Capacitor 5.7"],
      resultados: ["v1.0.5 build 281","Licença MIT aberta","Instalável em celular e PC","100% offline e local"]
    },
    en: {
      titulo: "Controle Financeiro",
      resumo: "Offline-first PWA for family finance. Built 100% in vanilla JavaScript with HTML5 and CSS3, no frameworks. Dynamic ledger, VA/VR, cards and local backup. Build 281, MIT license.",
      descricao: "100% vanilla JavaScript (type:module) PWA with pure HTML5 and CSS3 (10 files tokens→polish). Fully local family management with colored categories, dynamic ledger, VA/VR and card tracking, and backup without server. Service Worker and manifest build, installable as app and Android packaging via Capacitor 5.7.",
      papel: "100% vanilla JavaScript development, no TypeScript or frameworks, with PWA Service Worker, IndexedDB data design and Android build. Direct, lightweight and performant code.",
      techs: ["JavaScript","HTML5","CSS3","PWA","Service Worker","Capacitor 5.7"],
      resultados: ["v1.0.5 build 281","MIT open license","Installable on phone and PC","100% offline and local"]
    }
  },
  {
    slug: "nexustranslator",
    category: "tool",
    icon: "🌐",
    color: "#a78bfa",
    year: "2024-2026",
    destaque: true,
    private: true,
    links: { github: "", demo: "https://www.nexusmods.com/profile/Necromante96Official", docs: "" },
    thumb: "assets/img/nexustranslator.webp",
    pt: {
      titulo: "Nexus Translator",
      resumo: "Central de tradução com IA para Stardew Valley, Hytale e jogos Unreal Engine e Unity. Core 82% TypeScript com 31 módulos, 12% Python e 6% Shell. Scan, normalização, progresso, ZIPs e LQA com Cursor e Ollama.",
      descricao: "Tool proprietária 82% TypeScript (31 módulos), 12% Python (UnityPy) e 6% Shell. Pipeline completo para traduzir mods Stardew Valley, Hytale e jogos Unreal Engine (C++) e Unity (C# IL2CPP/Mono). Detecta Unity Mono/IL2CPP e pacotes Unreal, integra NexusMods + Cursor Auto, gera zips traduzidos, audita vazamentos e glossários. Automação com Node 20, esbuild e Cursor SDK, CI com security audit.",
      papel: "Arquitetura principal em TypeScript com Node, automação Python para UnityPy/Unreal, pipelines de LQA e geração de ZIPs para Stardew, Hytale, Unreal e Unity. Código revisado e testado com esbuild e Cursor SDK.",
      techs: ["TypeScript 5.5","Python","Node 20","esbuild","Cursor SDK","UnityPy","Unreal Engine"],
      resultados: ["6.3.5 estável, 31 módulos","Stardew + Hytale + Unreal + Unity","Base para pack 12 idiomas RPG Skills"]
    },
    en: {
      titulo: "Nexus Translator",
      resumo: "AI translation hub for Stardew Valley, Hytale and Unreal Engine and Unity games. Core 82% TypeScript with 31 modules, 12% Python and 6% Shell. Scan, normalization, progress, ZIPs and LQA with Cursor and Ollama.",
      descricao: "Proprietary tool 82% TypeScript (31 modules), 12% Python (UnityPy) and 6% Shell. Full pipeline to translate Stardew Valley, Hytale and Unreal Engine (C++) and Unity (C# IL2CPP/Mono) games. Detects Unity Mono/IL2CPP and Unreal packages, drives NexusMods + Cursor Auto, builds ZIPs, audits leaks and glossaries. Automation with Node 20, esbuild and Cursor SDK, CI with security audit.",
      papel: "Main architecture in TypeScript with Node, Python automation for UnityPy/Unreal, LQA pipelines and ZIP generation for Stardew, Hytale, Unreal and Unity. Reviewed code with esbuild and Cursor SDK.",
      techs: ["TypeScript 5.5","Python","Node 20","esbuild","Cursor SDK","UnityPy","Unreal Engine"],
      resultados: ["Stable 6.3.5, 31 modules","Stardew + Hytale + Unreal + Unity","Powers 12-language RPG Skills pack"]
    }
  },
  {
    slug: "traducoes-jogos-mods",
    category: "translation",
    icon: "📖",
    color: "#d4881c",
    year: "2023-2026",
    destaque: true,
    private: false,
    links: { github: "", demo: "https://www.nexusmods.com/profile/Necromante96Official", docs: "https://www.curseforge.com/hytale/mods/maior-pack-de-traducoes-pt-br" },
    thumb: "assets/img/traducoes.webp",
    pt: {
      titulo: "Traduções de Mods",
      resumo: "Coletânea de mods de tradução PT-BR não oficiais autorizados. Processo artesanal com revisão humana, LQA e glossários, usando NexusTranslator (TypeScript/Python) sobre engines Unreal (C++) e Unity (C#). Stardew, Forsaken Realms, Hytale, Elementallis e Dragon Quest.",
      descricao: "Localização PT-BR não oficial distribuída como mod autorizado pelas desenvolvedoras. Packs Stardew Valley (Nexus), Forsaken Realms: Vahrin's Call: mod autorizado pela dev (Nexus mods/5), Hytale PT-BR na CurseForge e em Unreal/Unity, Elementallis: tradução autorizada aguardando publicação Nexus: e Dragon Quest I & II HD-2D Remake em tradução. Fluxo 100% TypeScript/Python do NexusTranslator + LQA humano com glossários. Aviso: sem afiliação com publishers oficiais.",
      papel: "Tradução, revisão, LQA, geração de ZIPs, contato com devs e publicação Nexus/CurseForge/Steam como mods não oficiais autorizados. Uso avançado de TypeScript e Python para extração de strings de Unreal e Unity.",
      techs: ["TypeScript","Python","Unreal Engine","Unity/IL2CPP","LQA","Glossários","Hytale"],
      resultados: ["Forsaken Realms: mod autorizado mods/5","Hytale PT-BR na CurseForge","Elementallis autorizado (aguardando Nexus)","DQ I&II em progresso (mod não oficial)"]
    },
    en: {
      titulo: "Traduções de Mods",
      resumo: "Collection of authorized unofficial PT-BR translation mods. Handcrafted process with human review, LQA and glossaries, using NexusTranslator (TypeScript/Python) on Unreal (C++) and Unity (C#) engines. Stardew, Forsaken Realms, Hytale, Elementallis and Dragon Quest.",
      descricao: "Unofficial PT-BR localization distributed as dev-authorized mods. Stardew Valley packs (Nexus), Forsaken Realms: Vahrin's Call: dev-authorized mod (Nexus mods/5), Hytale PT-BR on CurseForge and Unreal/Unity, Elementallis: authorized translation pending Nexus: and Dragon Quest I & II HD-2D WIP. 100% TypeScript/Python flow from NexusTranslator + human LQA with glossaries. Disclaimer: no affiliation with official publishers.",
      papel: "Translation, review, LQA, ZIP builds, dev liaison & Nexus/CurseForge/Steam publishing as authorized unofficial mods. Advanced use of TypeScript and Python for Unreal and Unity string extraction.",
      techs: ["TypeScript","Python","Unreal Engine","Unity/IL2CPP","LQA","Glossaries","Hytale"],
      resultados: ["Forsaken: authorized mod mods/5","Hytale PT-BR on CurseForge","Elementallis authorized (pending Nexus)","DQ I&II WIP (unofficial mod)"]
    }
  },
  {
    slug: "rpg-skills-mod",
    category: "game",
    icon: "⚔️",
    color: "#ef4444",
    year: "2023-2026",
    destaque: true,
    private: true,
    links: { github: "", demo: "https://steamcommunity.com/workshop/filedetails/?id=3694501995", docs: "" },
    thumb: "assets/img/rpg-skills-mod.webp",
    pt: {
      titulo: "RPG Skills Mod",
      resumo: "Mod de progressão RPG para Necesse 1.3.2. Código 100% Java 17 com Gradle 8 multi-módulo (core, gameplay, ui). 33 classes, 19 passivas, XP dinâmico e 12 idiomas. 18,5 mil no Workshop Necesse (Steam).",
      descricao: "Mod 100% Java 17 que transforma Necesse em RPG. 33 classes em 5 categorias, nível máximo 165, 19 passivas desbloqueáveis, loja QoL, suporte a controle e 12 idiomas. Arquitetura Gradle 8 multi-módulo (core, gameplay, ui, network, persistence) com ADRs e testes JUnit 5. Código Java puro, sem Kotlin, com Necesse API e Eclipse JDT.",
      papel: "Desenvolvimento 100% Java 17, Gradle multi-projeto, Necesse API, sistema de progressão, balanceamento e localização. Código Java com testes JUnit e build Gradle.",
      techs: ["Java 17","Gradle 8","Necesse API","JUnit","Eclipse JDT","Java"],
      resultados: ["v2.7 compat Necesse 1.3.2","18,5 mil no Workshop Necesse (Steam)","457 favoritos • 143 avaliações"]
    },
    en: {
      titulo: "RPG Skills Mod",
      resumo: "RPG progression mod for Necesse 1.3.2. Code 100% Java 17 with Gradle 8 multi-module (core, gameplay, ui). 33 classes, 19 passives, dynamic XP and 12 locales. 18.5k on Necesse Workshop (Steam).",
      descricao: "100% Java 17 mod that turns Necesse into an RPG. 33 classes in 5 categories, max level 165, 19 unlockable passives, QoL shop, controller support and 12 locales. Gradle 8 multi-module architecture (core, gameplay, ui, network, persistence) with ADRs and JUnit 5 tests. Pure Java code, no Kotlin, with Necesse API and Eclipse JDT.",
      papel: "100% Java 17 development, multi-module Gradle, Necesse API, progression system, balancing and localization. Java code with JUnit tests and Gradle build.",
      techs: ["Java 17","Gradle 8","Necesse API","JUnit","Eclipse JDT","Java"],
      resultados: ["v2.7 for Necesse 1.3.2","18.5k on Necesse Workshop (Steam)","457 favs • 143 ratings"]
    }
  },
  {
    slug: "rpg-skills-site",
    category: "web",
    icon: "🌙",
    color: "#d4881c",
    year: "2024-2026",
    destaque: true,
    private: false,
    links: { github: "https://github.com/Necromante96Official/RPG-Skills-Site", demo: "", docs: "" },
    thumb: "assets/img/rpg-skills-site.webp",
    pt: {
      titulo: "RPG Skills Site",
      resumo: "Site vitrine para o RPG Skills Mod. Desenvolvido 100% vanilla com HTML5 semântico, CSS3 com tokens e JavaScript puro sem frameworks. 11 páginas, hero com orbs e i18n PT/EN.",
      descricao: "Site 100% vanilla: HTML5 semântico, CSS3 com design tokens (10 arquivos tokens→polish) e JavaScript puro em IIFE com IntersectionObserver e i18n vanilla sem libs. Landing premium com 11 páginas dedicadas (progressão, classes, passivas, janela mockup, QoLs, changelog). Deploy direto no GitHub Pages com .nojekyll. Código limpo sem React/Vue.",
      papel: "Desenvolvimento 100% HTML5, CSS3 com tokens e JavaScript vanilla IIFE. Código sem frameworks, com i18n vanilla e deploy GitHub Pages.",
      techs: ["HTML5","CSS3","JavaScript","i18n vanilla","GitHub Pages","HTML5"],
      resultados: ["Hub 11 páginas","Hero premium premiado","Bilíngue instantâneo PT/EN"]
    },
    en: {
      titulo: "RPG Skills Site",
      resumo: "Showcase site for RPG Skills Mod. Built 100% vanilla with semantic HTML5, CSS3 with tokens and pure JavaScript with no frameworks. 11 pages, hero with orbs and PT/EN i18n.",
      descricao: "100% vanilla site: semantic HTML5, CSS3 with design tokens (10 files tokens→polish) and pure JavaScript in IIFE with IntersectionObserver and vanilla i18n with no libs. Premium landing with 11 dedicated pages (progression, classes, passives, window mockup, QoLs, changelog). Direct deploy to GitHub Pages with .nojekyll. Clean code without React/Vue.",
      papel: "100% HTML5, CSS3 with tokens and vanilla JavaScript IIFE development. Framework-free code, with vanilla i18n and GitHub Pages deploy.",
      techs: ["HTML5","CSS3","JavaScript","i18n vanilla","GitHub Pages","HTML5"],
      resultados: ["11-page hub","Premium hero","Instant bilingual PT/EN"]
    }
  },
  {
    slug: "forbidden-legacy-patchs",
    category: "tool",
    icon: "🛡️",
    color: "#1ea54a",
    year: "2024-2026",
    destaque: true,
    private: true,
    links: { github: "", demo: "", docs: "" },
    thumb: "assets/img/forbidden-legacy.webp",
    pt: {
      titulo: "Forbidden Legacy Patch Manager",
      resumo: "Gerenciador para Forbidden Legacy. Código 65% C# com .NET 9 e Avalonia e 35% Python com pycryptodome. Gera overlays patch_{N:04d}.pck com AES e mescla ao patch oficial. Reverse Godot PCK v4.",
      descricao: "Gerenciador 65% C# (.NET 9 com Avalonia 11.2.5) e 35% Python (pycryptodome). Reverse de Godot 4: extrai e decompila GDExtension PCK com GDRE e GDScript, criptografa com AES via pycryptodome, unifica presets e drops com Rules e Features UI em C#. Gerencia saves .flsave sem sobrescrever exe. Publish single-file win-x64. Linguagens principais C# e Python.",
      papel: "Desenvolvimento principal em C# com Avalonia UI, pipelines Python com pck_writer e pck_crypto, e pesquisa de formato PCK com GDScript. Interface C# e automação Python.",
      techs: ["C# .NET 9","Python 3.10","Avalonia 11.2.5","pycryptodome","Godot PCK v4","GDScript"],
      resultados: ["Overlays patch_xxxx.pck estáveis","Instalação segura sem conflito com launcher","Arquitetura Rules + Features em C# e Python"]
    },
    en: {
      titulo: "Forbidden Legacy Patch Manager",
      resumo: "Manager for Forbidden Legacy. Code 65% C# with .NET 9 and Avalonia and 35% Python with pycryptodome. Builds patch_{N:04d}.pck overlays with AES and merges with official patch. Godot PCK v4 reverse.",
      descricao: "Manager 65% C# (.NET 9 with Avalonia 11.2.5) and 35% Python (pycryptodome). Godot 4 reverse: extracts and decompiles GDExtension PCK with GDRE and GDScript, encrypts with AES via pycryptodome, unifies presets and drops with Rules and Features UI in C#. Manages .flsave saves without overwriting exe. Single-file win-x64 publish. Main languages C# and Python.",
      papel: "Main development in C# with Avalonia UI, Python pipelines with pck_writer and pck_crypto, and PCK format research with GDScript. C# interface and Python automation.",
      techs: ["C# .NET 9","Python 3.10","Avalonia 11.2.5","pycryptodome","Godot PCK v4","GDScript"],
      resultados: ["Stable patch_xxxx.pck overlays","Safe install no launcher conflict","Rules + Features arch in C# and Python"]
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
      titulo: "Deck Building System",
      resumo: "Pipeline para Forbidden Legacy. Código 95% TypeScript strict com Node 22 e 5% Shell. Cataloga Power Tier, arquétipos e sincroniza 200+ cartas webp para GitHub Pages.",
      descricao: "Pipeline 95% TypeScript strict com Node 22 e 5% Shell. Tooling de balanceamento com ingest de catálogo XLSX via SheetJS, analyze-effects, build-archetype-index, validate-inventory e sync-images. Scripts em TypeScript puro com esbuild e TSX, frontend estático com 200+ cartas webp e publish automático. Código TypeScript sem JavaScript solto.",
      papel: "Desenvolvimento 95% TypeScript strict com Node, pipelines em TS com ingest, validate e build, e publisher Pages. Código 100% tipado com TSX e esbuild.",
      techs: ["TypeScript 5.8","Node 22","TSX","esbuild","XLSX","GitHub Pages"],
      resultados: ["200+ cartas webp","Pipeline strict TS validado","Publicação automática Pages com TypeScript"]
    },
    en: {
      titulo: "Deck Building System",
      resumo: "Pipeline for Forbidden Legacy. Code 95% strict TypeScript with Node 22 and 5% Shell. Catalogs Power Tier, archetypes and syncs 200+ webp cards to GitHub Pages.",
      descricao: "Pipeline 95% strict TypeScript with Node 22 and 5% Shell. Balancing tooling with XLSX catalog ingest via SheetJS, analyze-effects, build-archetype-index, validate-inventory and sync-images. Scripts in pure TypeScript with esbuild and TSX, static frontend with 200+ webp cards and auto publish. TypeScript code without loose JavaScript.",
      papel: "95% strict TypeScript development with Node, TS pipelines with ingest, validate and build, and Pages publisher. Fully typed code with TSX and esbuild.",
      techs: ["TypeScript 5.8","Node 22","TSX","esbuild","XLSX","GitHub Pages"],
      resultados: ["200+ webp cards","Strict validated pipeline","Automated Pages publish with TypeScript"]
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
      titulo: "Ancient Souls",
      resumo: "Jogo autoral As Crônicas de Ancient Souls. Código 100% JavaScript ES6 com RPG Maker MZ 1.10 e NW.js. 12+ plugins AS_* custom em JS e CSS isolado, 500+ assets.",
      descricao: "Jogo 2D JRPG medieval completo 100% JavaScript ES6 com RPG Maker MZ 1.10.0 e NW.js. Plugins proprietários em JS ES6 (AS_0.0 Orchestrator, AS_1.0 Title, etc) com telas custom em HTML5 e CSS3 isolado. Engine JS pura, sem TypeScript, com 500+ assets de tilesets e system. Código JS com NW.js wrapper.",
      papel: "Game design 100% JavaScript ES6, arquitetura de plugins JS e level design. Código JS puro com CSS premium e NW.js.",
      techs: ["JavaScript ES6","RPG Maker MZ 1.10","NW.js","CSS3","HTML5","JavaScript"],
      resultados: ["Engine custom completa em JS","500+ assets","Sistema de telas proprietário em JS e CSS"]
    },
    en: {
      titulo: "Ancient Souls",
      resumo: "Original game The Chronicles of Ancient Souls. Code 100% ES6 JavaScript with RPG Maker MZ 1.10 and NW.js. 12+ custom AS_* plugins in JS and isolated CSS, 500+ assets.",
      descricao: "Full 2D medieval JRPG 100% ES6 JavaScript with RPG Maker MZ 1.10.0 and NW.js. Proprietary plugins in ES6 JS (AS_0.0 Orchestrator, AS_1.0 Title, etc) with custom screens in HTML5 and isolated CSS3. Pure JS engine, no TypeScript, with 500+ tilesets and system assets. JS code with NW.js wrapper.",
      papel: "100% ES6 JavaScript game design, JS plugin architecture and level design. Pure JS code with premium CSS and NW.js.",
      techs: ["JavaScript ES6","RPG Maker MZ 1.10","NW.js","CSS3","HTML5","JavaScript"],
      resultados: ["Full custom engine in JS","500+ assets","Proprietary screen system in JS and CSS"]
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
      titulo: "OBS Overlay: Timer Action!",
      resumo: "Timer que flutua mas é excluído da captura. Código 50% Python 3.10 com obs-websocket e 50% C++17 com CMake. 3 modos: overlay Python, plugin nativo e Browser Dock. Pill HUD sem entrar no vídeo.",
      descricao: "Timer em 50% Python 3.10 (overlay Tkinter com obs-websocket) e 50% C++17 (plugin nativo OBS com CMake, Qt6 e libobs). Mostra tempo de gravação com pill HUD pulsante, pausa e retoma com OBS e some ao parar. Exclusão via Win32 API WDA_EXCLUDEFROMCAPTURE, requer OBS 28+ e Windows 10 2004+. Código Python e C++ com HTML/JS Dock.",
      papel: "Desenvolvimento 50% Python com obs-websocket e 50% C++17 com CMake e Qt. Código Python para overlay e C++ nativo para plugin, com Win32 API.",
      techs: ["Python 3.10","C++17","CMake","OBS WebSocket 5","Win32 API","HTML/JS"],
      resultados: ["3 modos de uso: Python, C++ e Dock","Não entra no vídeo via WDA_EXCLUDE","Live para streamers com Python e C++"]
    },
    en: {
      titulo: "OBS Overlay: Timer Action!",
      resumo: "Floating timer excluded from capture. Code 50% Python 3.10 with obs-websocket and 50% C++17 with CMake. 3 modes: Python overlay, native plugin and Browser Dock. Pill HUD excluded from video.",
      descricao: "Timer in 50% Python 3.10 (Tkinter overlay with obs-websocket) and 50% C++17 (native OBS plugin with CMake, Qt6 and libobs). Shows recording time with pill HUD, pauses and resumes with OBS and hides on stop. Exclusion via Win32 API WDA_EXCLUDEFROMCAPTURE, requires OBS 28+ and Windows 10 2004+. Python and C++ code with HTML/JS Dock.",
      papel: "50% Python development with obs-websocket and 50% C++17 with CMake and Qt. Python code for overlay and native C++ for plugin, with Win32 API.",
      techs: ["Python 3.10","C++17","CMake","OBS WebSocket 5","Win32 API","HTML/JS"],
      resultados: ["3 modes: Python, C++ and Dock","Excluded from video via WDA_EXCLUDE","Live for streamers with Python and C++"]
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
      titulo: "MO2 Tools",
      resumo: "Automação para Mod Organizer 2. Código 100% Python 3 com mobase. Plugin MO2 que automatiza download→instalação, sanitiza nome e version-fix Ctrl+Shift+Z com retry 8x. Painel 18+ settings.",
      descricao: "Central modular 100% Python 3 com mobase (MO2 Plugin API) e PyQt5/6 com Qt. Plugin em Python puro com Core, Automation e UI. Seleção rápida, sanitização TitleCase, delete de sidecars, update in-place e painel com 18+ settings. Código Python com Qt Widgets. v0.2.2 FINAL.",
      papel: "Desenvolvimento 100% Python 3 com mobase IPluginTool e PyQt. Código Python puro com arquitetura modular e QoL de modding.",
      techs: ["Python 3","mobase MO2 API","PyQt5/6","Qt","Python 3"],
      resultados: ["Fluxo download→instalação automático em Python","Sanitização e version fix com Python","18+ settings em Python"]
    },
    en: {
      titulo: "MO2 Tools",
      resumo: "Automation for Mod Organizer 2. Code 100% Python 3 with mobase. MO2 plugin that automates download→install, sanitizes name and version-fix Ctrl+Shift+Z with 8x retry. Panel 18+ settings.",
      descricao: "Modular hub 100% Python 3 with mobase (MO2 Plugin API) and PyQt5/6 with Qt. Pure Python plugin with Core, Automation and UI. Quick selection, TitleCase sanitization, sidecar delete, in-place update and panel with 18+ settings. Python code with Qt Widgets. v0.2.2 FINAL.",
      papel: "100% Python 3 development with mobase IPluginTool and PyQt. Pure Python code with modular architecture and modding QoL.",
      techs: ["Python 3","mobase MO2 API","PyQt5/6","Qt","Python 3"],
      resultados: ["Auto download→install in Python","Name sanitize and version fix with Python","18+ settings in Python"]
    }
  }
];

