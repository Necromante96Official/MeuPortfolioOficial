
/* Portfolio projects data: Lucas Tavares / Necromante96Official */
window.PROJECTS = [
 {
 slug: "fisiohub",
 category: "institucional",
 color: "#60a5fa",
 destaque: true,
 private: false,
 links: { github: "", demo: "https://necromante96official.github.io/FisioHub/", docs: "" },
 thumb: "assets/img/fisiohub.webp",
 pt: {
 titulo: "FisioHub",
 resumo: "Sistema para a Clínica de Fisioterapia da ESEFID/UFRGS que organiza agendamentos, pacientes, evoluções e financeiro em painéis claros por profissional.",
 descricao: "O FisioHub centraliza as informações da Clínica de Fisioterapia da ESEFID/UFRGS em um só lugar. Ele organiza agendamentos, acompanhamentos de pacientes, evoluções e dados financeiros, transformando informações dispersas em painéis claros por profissional e por paciente.\n\nCriado para facilitar o dia a dia da clínica, permite visualizar pendências, acompanhar a evolução dos atendimentos e ter uma visão completa da rotina, tudo de forma organizada e segura.",
 papel: "Solução pensada para o dia a dia da clínica, com painéis claros por profissional, organização por data e foco em privacidade e uso offline.",
 techs: ["TypeScript 5.9","Vite 8","Chrome Extensions MV3","JavaScript","Hash SPA","LocalStorage"],
 resultados: ["Em uso institucional contínuo na Clínica de Fisioterapia da ESEFID da Universidade Federal do Rio Grande do Sul (v0.5.7)","382 linhas de README + testes","3 extensões Chrome em produção","Dados nunca saem do dispositivo"]
 },
 en: {
 titulo: "FisioHub",
 resumo: "From ZenFisio collection to clinic management in seconds: 100% offline system for the Physiotherapy Clinic of ESEFID at the Federal University of Rio Grande do Sul (UFRGS), with 3 extensions organizing by date, pending and finance, your data never leaves the device.",
 descricao: "Live in production, FisioHub takes the Collector TXT (Ctrl+Shift+X), triggers Notifier (Ctrl+Shift+Z) and Alert (Alt+Z), filters by specialty and turns chaos into clarity: pending evolutions visible, finance closed and schedule checked. All via LocalStorage, no server, total privacy.\n\nYou get live dashboards per physiotherapist, patient history and an Analysis panel that cross-checks everything in one click, clinical focus, zero rework.",
 papel: "Full architecture, frontend in TypeScript with Vite, Chrome MV3 extensions in JavaScript, hash SPA routing and tests. Main code 98% TypeScript and 3 content-scripts in JavaScript.",
 techs: ["TypeScript 5.9","Vite 8","Chrome Extensions MV3","JavaScript","Hash SPA","LocalStorage"],
 resultados: ["Live institutional use at the Physiotherapy Clinic of ESEFID at the Federal University of Rio Grande do Sul (UFRGS) (v0.5.7)","382-line README + tests","3 Chrome extensions in production","Data never leaves device"]
 }
 },
 {
 slug: "zenfisio-coletor",
 category: "tool",
 color: "#06b6d4",
 destaque: false,
 private: true,
 links: { github: "", demo: "", docs: "" },
 thumb: "assets/img/fisiohub.webp",
 pt: {
 titulo: "ZenFisio Coletor de Dados",
 resumo: "Coleta a agenda do ZenFisio em um clique e gera um arquivo pronto para o FisioHub, sem cópias manuais.",
 descricao: "O ZenFisio Coletor facilita a coleta da agenda do sistema ZenFisio. Com um único clique, ele reúne os agendamentos do dia e gera um arquivo pronto para ser usado no FisioHub, evitando cópias manuais e erros.\n\nFoi pensado para economizar tempo e garantir que nenhuma informação se repita ou se perca.",
 papel: "Solução prática que reúne a agenda com um clique e entrega um arquivo organizado, pronto para uso.",
 techs: ["JavaScript", "Chrome Extension MV3", "ZenFisio DOM", "chrome.storage", "MutationObserver"],
 resultados: ["Atalho Ctrl+Shift+X com painel arrastável e minimizável", "Coleta auto por clique sequencial 08h–17h com delay controlado", "Anti-duplicação robusta + TXT dd.mm.yy com local lembrado", "Em produção com FisioHub v0.5.7"]
 },
 en: {
 titulo: "ZenFisio Data Collector",
 resumo: "Collect ZenFisio agenda without copy-pasting: 1 click, draggable panel and ready TXT (dd.mm.yy), smart anti-duplication to feed FisioHub.",
 descricao: "Forget endless Ctrl+C. With Ctrl+Shift+X the Collector scans visible FullCalendar blocks (08h–17h), validates times and avoids duplicates by ID (patient+time) with 5s window.\n\nYou drag the panel, watch progress, save where you want (it remembers) and get a central notification. No build, 100% vanilla, ready to inject on app.zenfisio.com.",
 papel: "100% vanilla JavaScript development, no TypeScript or build, content script + service worker, MutationObserver for popups, DOM-based status parser (checked inputs, aria-checked) and storage management. Premium isolated CSS and accessible panel.",
 techs: ["JavaScript", "Chrome Extension MV3", "ZenFisio DOM", "chrome.storage", "MutationObserver"],
 resultados: ["Ctrl+Shift+X shortcut with draggable minimizable panel", "Auto collection by sequential click 08h–17h with controlled delay", "Robust anti-duplication + TXT dd.mm.yy with remembered location", "In production with FisioHub v0.5.7"]
 }
 },
 {
 slug: "zenfisio-notificar",
 category: "tool",
 color: "#a78bfa",
 destaque: false,
 private: true,
 links: { github: "", demo: "", docs: "" },
 thumb: "assets/img/fisiohub.webp",
 pt: {
 titulo: "ZenFisio Notificar Mensagens",
 resumo: "Avisa no Google Chat sempre que um agendamento muda de status, com histórico e atalhos que poupam seu dia.",
 descricao: "O ZenFisio Notificar mantém a equipe informada sobre mudanças na agenda. Sempre que um agendamento muda de status, como atendimento realizado, falta ou cancelamento, ele envia automaticamente uma mensagem no Google Chat.\n\nAssim, todos acompanham as atualizações sem precisar verificar o sistema o tempo todo, com histórico e atalhos para facilitar a comunicação.",
 papel: "Solução que mantém a equipe atualizada de forma automática, com histórico e atalhos para facilitar a comunicação.",
 techs: ["TypeScript 5.9", "Chrome Extension MV3", "Google Chat API", "chrome.scripting", "Node:test"],
 resultados: ["Monitoramento Ctrl+Shift+Z com disparo automático no Google Chat", "Suporte a 6+ status (atendido, faltou, cancelado, agendado...)", "Histórico e ações rápidas integradas", "Em produção com FisioHub v0.5.7"]
 },
 en: {
 titulo: "ZenFisio Notify Messages",
 resumo: "Status changed? Chat already knows: extension that watches the agenda and fires precise Google Chat messages, with history and shortcuts that save your day.",
 descricao: "Toggle with Ctrl+Shift+Z and let Notifier work: it watches status changes (attended, no-show, canceled, scheduled...) and fires on Google Chat precisely, without tab switching.\n\nSearchable history, quick actions for ZenFisio/Chat and integrated test. TypeScript 5.9, dual content-scripts and web_accessible_resources, lightweight, reliable and live.",
 papel: "100% TypeScript 5.9 architecture with tsc typecheck, ESM background service worker (dist/background/index.js), dual content scripts (ZenFisio + Google Chat) and popup UI. @types/chrome typing and node:test tests.",
 techs: ["TypeScript 5.9", "Chrome Extension MV3", "Google Chat API", "chrome.scripting", "Node:test"],
 resultados: ["Ctrl+Shift+Z monitoring with auto Google Chat dispatch", "6+ status support (attended, no-show, canceled, scheduled...)", "Integrated history and quick actions", "In production with FisioHub v0.5.7"]
 }
 },
 {
 slug: "zenfisio-alerta",
 category: "tool",
 color: "#f59e0b",
 destaque: false,
 private: true,
 links: { github: "", demo: "", docs: "" },
 thumb: "assets/img/fisiohub.webp",
 pt: {
 titulo: "ZenFisio Alerta Repetidor",
 resumo: "Destaca automaticamente quando um ciclo de atendimentos foi concluído, facilitando o controle de renovações.",
 descricao: "O ZenFisio Alerta Repetidor ajuda a não perder nenhuma renovação de tratamento. Ele identifica automaticamente quando um ciclo de atendimentos foi concluído e destaca visualmente para facilitar a conferência.\n\nMantém a informação visível mesmo ao recarregar a página, garantindo que a equipe saiba exatamente quando é hora de renovar.",
 papel: "Solução visual que destaca o que precisa de atenção, mantendo a informação sempre visível para conferência.",
 techs: ["TypeScript 5.9", "Chrome Extension MV3", "ZenFisio Repetição", "chrome.storage", "Copy-static"],
 resultados: ["Varredura automática 07h–17h com destaque X===Y", "Botão flutuante AR + Alt+Z com persistência diária", "Faixa branca animada para facilitar conferência", "Em produção com FisioHub v0.5.7"]
 },
 en: {
 titulo: "ZenFisio Repeat Alert",
 resumo: "Never miss a renewal: auto-highlight for `X of Y` complete, animated stripe, floating AR button and daily memory.",
 descricao: "Click Start and watch between 07h–17h: Alert scans cards, detects `Repeated: X of Y` and lights up only when X===Y (1–20) with eye-catching white stripe.\n\nAlt+Z shows/hides the AR button, and highlights persist even on reload or opening appointments the same day. Pure TypeScript, lightweight and to the point.",
 papel: "TypeScript 5.9 development with tsc and copy-static build, dedicated content script, repetition parsing logic, persistent state and floating UI. node:test tests and @types/chrome typing.",
 techs: ["TypeScript 5.9", "Chrome Extension MV3", "ZenFisio Repetition", "chrome.storage", "Copy-static"],
 resultados: ["Automatic scan 07h–17h with X===Y highlight", "Floating AR button + Alt+Z with daily persistence", "Animated white stripe for easy review", "In production with FisioHub v0.5.7"]
 }
 }, {
 slug: "controle-financeiro",
 category: "web",
 color: "#22c55e",
 destaque: true,
 private: false,
 links: { github: "", demo: "https://necromante96official.github.io/ControleFinanceiroOficial/", docs: "" },
 thumb: "assets/img/controle-financeiro.webp",
 pt: {
 titulo: "Controle Financeiro",
 resumo: "Organize suas finanças de forma simples e offline, com categorias, extratos e gráficos, sem depender de nuvem.",
 descricao: "O Controle Financeiro é um aplicativo para organizar suas finanças pessoais de forma simples e offline. Permite registrar receitas, despesas e cartões, categorizar gastos e visualizar extratos e gráficos mensais, tudo sem depender de internet ou nuvem.\n\nSeus dados ficam apenas no seu dispositivo, e você pode exportar e importar backups quando precisar, com total privacidade.",
 papel: "Solução leve e direta, com interface clara e funcionamento totalmente offline para uso no celular e no computador.",
 techs: ["JavaScript","HTML5","CSS3","PWA","Service Worker","Capacitor 5.7"],
 resultados: ["v1.0.5 build 281","Licença MIT aberta","Instalável em celular e PC","100% offline e local"]
 },
 en: {
 titulo: "Controle Financeiro",
 resumo: "Your money, 100% offline and under control: pocket-sized PWA, colorful categories, live ledger, VA/VR and cards with no cloud or subscription.",
 descricao: "Install in 1 tap and use on PC or phone, even offline. Built 100% vanilla (JS + HTML5/CSS3 in 10 layers) to be light and instant: multiple accounts, your categories and monthly/annual charts.\n\nNeed to move devices? Export and import your local backup in seconds. Nothing leaves your device, just you, your numbers and open MIT code.",
 papel: "100% vanilla JavaScript development, no TypeScript or frameworks, with PWA Service Worker, IndexedDB data design and Android build. Direct, lightweight and performant code.",
 techs: ["JavaScript","HTML5","CSS3","PWA","Service Worker","Capacitor 5.7"],
 resultados: ["v1.0.5 build 281","MIT open license","Installable on phone and PC","100% offline and local"]
 }
 },
 {
 slug: "nexustranslator",
 category: "tool",
 color: "#a78bfa",
 destaque: true,
 private: true,
 links: { github: "", demo: "", docs: "" },
 thumb: "assets/img/nexustranslator.webp",
 pt: {
 titulo: "Nexus Translator",
 resumo: "Ferramenta para traduzir jogos e mods para o português de forma organizada e consistente, com apoio de glossários e revisão.",
 descricao: "O Nexus Translator é uma ferramenta criada para facilitar a tradução de jogos e modificações para o português. Ele analisa e organiza os textos de jogos como Stardew Valley e Hytale, preparando tudo para um processo de tradução mais consistente e natural, com apoio de glossários e revisão para manter o sentido e o estilo original.",
 papel: "Solução que organiza e prepara textos de jogos para tradução, cuidando da consistência e da qualidade do resultado.",
 techs: ["TypeScript 5.5","Python 3.10","Node 20","esbuild","Cursor SDK","UnityPy"],
 resultados: ["6.3.5 estável, 31 módulos","Stardew + Hytale + Unreal + Unity","Base para pack 12 idiomas RPG Skills"]
 },
 en: {
 titulo: "Nexus Translator",
 resumo: "Translate whole games painlessly: AI hub for Stardew, Hytale, Unreal and Unity, scans, normalizes and delivers ready ZIPs with leak-proof LQA.",
 descricao: "Under the hood, 31 modules (82% TypeScript, Python/UnityPy, Shell) detect Unity Mono/IL2CPP and Unreal packages, bridge NexusMods + Cursor Auto and handle glossaries.\n\nYou watch live progress, build optimized ZIPs and trust human+AI LQA (Cursor/Ollama) for natural dialogues, from JSON to binaries, charm intact.",
 papel: "Main architecture in TypeScript with Node, Python automation for UnityPy/Unreal, LQA pipelines and ZIP generation for Stardew, Hytale, Unreal and Unity. Reviewed code with esbuild and Cursor SDK.",
 techs: ["TypeScript 5.5","Python 3.10","Node 20","esbuild","Cursor SDK","UnityPy"],
 resultados: ["Stable 6.3.5, 31 modules","Stardew + Hytale + Unreal + Unity","Powers 12-language RPG Skills pack"]
 }
 },
 {
 slug: "traducoes-jogos-mods",
 category: "translation",
 color: "#d4881c",
 destaque: true,
 private: false,
 links: { github: "", demo: "https://www.nexusmods.com/profile/Necromante96Official", docs: "https://www.curseforge.com/hytale/mods/maior-pack-de-traducoes-pt-br" },
 thumb: "assets/img/traducoes.webp",
 pt: {
 titulo: "Traduções de Mods",
 resumo: "Pacotes em português para jogos e mods, revisados para soar naturais e fiéis ao original, com autorização dos desenvolvedores.",
 descricao: "As Traduções de Mods são pacotes em português para jogos e modificações, feitos com autorização dos desenvolvedores. Cada tradução passa por revisão para que diálogos, histórias e termos do jogo soem naturais em português, mantendo a identidade original.\n\nEstão disponíveis para títulos como Stardew Valley, Hytale e outros, em plataformas como Nexus Mods e CurseForge.",
 papel: "Trabalho de tradução e revisão com cuidado para manter o estilo original, feito em parceria com os desenvolvedores.",
 techs: ["TypeScript","Python","Unreal Engine","Unity/IL2CPP","LQA","Glossários","Hytale"],
 resultados: ["Forsaken Realms: mod autorizado mods/5","Hytale PT-BR na CurseForge","Elementallis autorizado (aguardando Nexus)","DQ I&II em progresso (mod não oficial)"]
 },
 en: {
 titulo: "Traduções de Mods",
 resumo: "Play in your language, with soul: Discord-authorized PT-BR collection, each line hand-reviewed to feel natural, from Stardew to Dragon Quest.",
 descricao: "No bots: unofficial but dev-authorized mods on Nexus/CurseForge/Steam. I used NexusTranslator + human LQA with living glossaries to keep jokes, lore and terms consistent.\n\nFrom Stardew Valley and Forsaken Realms (mod 5 authorized) to Hytale, Elementallis and DQ I&II HD-2D Remake, cross-platform and fully respectful to the original.",
 papel: "Translation, review, LQA, ZIP builds, dev liaison & Nexus/CurseForge/Steam publishing as authorized unofficial mods. Advanced use of TypeScript and Python for Unreal and Unity string extraction.",
 techs: ["TypeScript","Python","Unreal Engine","Unity/IL2CPP","LQA","Glossaries","Hytale"],
 resultados: ["Forsaken: authorized mod mods/5","Hytale PT-BR on CurseForge","Elementallis authorized (pending Nexus)","DQ I&II WIP (unofficial mod)"]
 }
 },
 {
 slug: "rpg-skills-mod",
 category: "game",
 color: "#ef4444",
 destaque: true,
 private: true,
 links: { github: "", demo: "", docs: "" },
 thumb: "assets/img/rpg-skills-mod.webp",
 pt: {
 titulo: "RPG Skills Mod",
 resumo: "Transforma Necesse em um RPG com 33 classes, progressão e habilidades que evoluem com seu estilo de jogo.",
 descricao: "O RPG Skills Mod transforma o jogo Necesse em uma experiência de RPG mais completa. Adiciona 33 classes, progressão por níveis e habilidades que evoluem conforme seu estilo de jogo, com suporte a vários idiomas.\n\nFoi desenvolvido para ampliar a jogabilidade e oferecer novos desafios para quem já conhece o jogo.",
 papel: "Solução que amplia o jogo com novas classes, níveis e habilidades, oferecendo mais opções e desafios.",
 techs: ["Java 17","Gradle 8","Necesse API","JUnit 5","Eclipse JDT"],
 resultados: ["v2.7 compatível com Necesse 1.3.2","18,5 mil downloads no Workshop (Steam)","457 favoritos • 143 avaliações"]
 },
 en: {
 titulo: "RPG Skills Mod",
 resumo: "Turn Necesse into a real RPG: 33 classes, 19 passives and XP that reacts to your style, 12 locales and 18.5k adventurers on Workshop.",
 descricao: "Pick Warrior, Mage, Ranger, Priest or Hybrid and climb to 165. Each class unlocks unique passives, the QoL shop and dynamic balancing keep the challenge just right.\n\n100% Java 17 with Gradle multi-module (ADRs + JUnit 5), no Kotlin, pure Necesse API to stay updated and smooth.",
 papel: "100% Java 17 development, multi-module Gradle architecture, Necesse API, RPG progression system, game balancing and localization for 12 languages. Java code with JUnit tests and optimized Gradle build.",
 techs: ["Java 17","Gradle 8","Necesse API","JUnit 5","Eclipse JDT"],
 resultados: ["v2.7 compatible with Necesse 1.3.2","18.5k downloads on Workshop (Steam)","457 favs • 143 ratings"]
 }
 },
 {
 slug: "rpg-skills-site",
 category: "web",
 color: "#d4881c",
 destaque: false,
 private: false,
 links: { github: "", demo: "https://necromante96official.github.io/RPG-Skills-Site/", docs: "" },
 thumb: "assets/img/rpg-skills-site.webp",
 pt: {
 titulo: "RPG Skills Site",
 resumo: "Site oficial do mod RPG Skills, com informações organizadas sobre classes, progressão e atualizações.",
 descricao: "O RPG Skills Site é o site oficial do mod RPG Skills. Apresenta todas as informações sobre classes, progressão e atualizações de forma organizada e visualmente atraente, com suporte a dois idiomas e navegação simples.\n\nServe como vitrine para quem quer conhecer o mod antes de jogar.",
 papel: "Site organizado e visualmente cuidado para apresentar o projeto de forma clara e acessível.",
 techs: ["HTML5","CSS3","JavaScript vanilla","i18n vanilla","GitHub Pages"],
 resultados: ["Hub com 11 páginas responsivas","Hero premium com animações","Bilíngue instantâneo PT/EN"]
 },
 en: {
 titulo: "RPG Skills Site",
 resumo: "The showcase that sells the mod: 100% vanilla premium site, 11 pages with orb hero and instant PT/EN switch, no framework, no bloat.",
 descricao: "Semantic HTML5 + 10 CSS layers (tokens→polish) + IIFE JS with IntersectionObserver. Browse Progression, Classes, Passives and Changelog with smooth animations.\n\nLive on GitHub Pages with .nojekyll, solid SEO and fully responsive, well-crafted vanilla that shines.",
 papel: "100% semantic HTML5, CSS3 with design tokens and vanilla JavaScript IIFE development. Framework-free code, with vanilla i18n, IntersectionObserver for lazy load and GitHub Pages deploy.",
 techs: ["HTML5","CSS3","JavaScript vanilla","i18n vanilla","GitHub Pages"],
 resultados: ["11-page responsive hub","Premium hero with animations","Instant bilingual PT/EN"]
 }
 },
 {
 slug: "forbidden-legacy-patchs",
 category: "tool",
 color: "#1ea54a",
 destaque: false,
 private: true,
 links: { github: "", demo: "", docs: "" },
 thumb: "assets/img/forbidden-legacy.webp",
 pt: {
 titulo: "Forbidden Legacy Patch Manager",
 resumo: "Cria e instala modificações para Forbidden Legacy com segurança e opção de desfazer alterações.",
 descricao: "O Forbidden Legacy Patch Manager facilita a criação e aplicação de modificações para o jogo Forbidden Legacy. Ele permite criar e instalar novos conteúdos sem interferir nos arquivos originais, com segurança e possibilidade de desfazer alterações se necessário.\n\nFoi pensado para que qualquer pessoa possa personalizar o jogo com tranquilidade.",
 papel: "Solução segura que permite personalizar o jogo sem riscos aos arquivos originais.",
 techs: ["C# .NET 9","Python 3.10","Avalonia 11.2.5","pycryptodome","Godot 4 PCK"],
 resultados: ["Overlays patch_xxxx.pck estáveis","Instalação segura sem conflito com launcher","Arquitetura Rules + Features modular"]
 },
 en: {
 titulo: "Forbidden Legacy Patch Manager",
 resumo: "Mod without fear: app that builds AES overlay patches and merges to official, without touching the exe and with rollback if needed.",
 descricao: "I reversed Godot 4 PCK with GDRE/GDScript, extract GDExtension, encrypt via pycryptodome and unify presets/drops with Avalonia UI (MVVM).\n\nInstall in layers, validate assets and solve conflicts alone. Your .flsave stays untouched and the official launcher won't notice, and if something fails, one click rolls back.",
 papel: "Main development in C# with Avalonia UI and MVVM, Python pipelines with pck_writer and pck_crypto, PCK format research with GDScript and GDRE. Native C# interface and Python automation.",
 techs: ["C# .NET 9","Python 3.10","Avalonia 11.2.5","pycryptodome","Godot 4 PCK"],
 resultados: ["Stable patch_xxxx.pck overlays","Safe installation without launcher conflict","Modular Rules + Features architecture"]
 }
 },
  {
    slug: "forbidden-legacy",
    category: "game",
color: "#d4881c",
    destaque: true,
    private: false,
    links: { github: "", demo: "https://forbiddenlegacy.com.br/", docs: "https://discord.gg/MkJXZ9tNQ6" },
    thumb: "assets/img/forbidden-legacy.webp",
    pt: {
      titulo: "Forbidden Legacy",
      resumo: "Remake fã espiritual de Yu-Gi-Oh! Forbidden Memories, reconstruído do zero por Felipe França / Trager Games (com minha atuação como dev). 900+ cartas, 29 NPCs com IA e decks próprios, Season 1 completa, Beta 1.8.2 para PC/Android com launcher, boosters, torneios e Full Arts.",
      descricao: "Forbidden Legacy é um remake feito por fãs do clássico Yu-Gi-Oh! Forbidden Memories. Reconstruído do zero, traz mais de 900 cartas, 29 oponentes com estratégias próprias, campanha completa e suporte para PC e Android.\n\nMantém a essência do jogo original, mas com melhorias visuais, novos modos e conteúdo adicional para quem é fã da série. Atualmente colaboro com a Trager Games no ecossistema do jogo, auxiliando em ferramentas e sistemas que mantêm o projeto em evolução.",
      papel: "Colaboração no ecossistema do jogo, auxiliando em ferramentas e sistemas que mantêm o projeto em evolução para PC e Android.",
      techs: ["Godot 4", "GDScript/GDRE", "C# .NET 9", "Avalonia 11.2.5", "TypeScript", "PC/Android", "Launcher"],
      resultados: ["Beta 1.8.2 com 900+ cartas e 29 NPCs", "Launcher PC com patches incrementais", "Torneio Championship com Full Arts", "Comunidade Discord ativa e Founder vitalício"]
    },
    en: {
      titulo: "Forbidden Legacy",
      resumo: "Spiritual fan remake of Yu-Gi-Oh! Forbidden Memories, rebuilt from scratch by Felipe França / Trager Games (with my dev contribution). 900+ cards, 29 NPCs with AI decks, Season 1, Beta 1.8.2 for PC/Android with launcher, boosters, tournaments and Full Arts.",
      descricao: "The PS1 classic you loved, with everything it should have had: FM-faithful fusion, campaign with real drama, opponent AI, group banlist, reworked shop, Deck Builder, Catalog, Achievements, Championship and interface fully redesigned for PC and Android. 900+ cards, 29 NPCs (Simon Muran to Zorc), arenas like Skyscraper and Yami, Full Arts and 4 languages. Free up to Isis, Founder unlocks all (Akhenaden, High Mages, Sebek, Labyrinth, Heishin, Zorc) with full Season 1 and Season 2 early access.\n\nCurrently working as developer helping Trager Games: I contribute to the game ecosystem via Patch Manager (AES overlays for Godot PCK v4) and Deck Building System (TypeScript pipeline cataloging 200+ cards). Direct download with no install: launcher for Windows/Linux (incremental updates) and APK for Android (armeabi-v7a/arm64-v8a, OpenGL ES 3.0, 3GB RAM). Active Discord community with changelog, tournaments and support, Founder $20 / R$ 39.90 via PIX, card and Stripe.",
      papel: "Collaborating developer at Trager Games: ecosystem support for Forbidden Legacy with C# .NET 9 + Avalonia and Python tooling (Godot PCK v4, pycryptodome), TypeScript card pipeline and web integration (forbiddenlegacy.com.br). Direct contribution keeping Beta 1.8.2 stable on PC/Android.",
      techs: ["Godot 4", "GDScript/GDRE", "C# .NET 9", "Avalonia 11.2.5", "TypeScript", "PC/Android", "Launcher"],
      resultados: ["Beta 1.8.2 with 900+ cards and 29 NPCs", "PC launcher with incremental patches", "Championship Tournament with Full Arts", "Active Discord community and lifetime Founder"]
    }
  },
 {
 slug: "deck-building-system",
 category: "tool",
 color: "#c8973a",
 destaque: false,
 private: false,
 links: { github: "", demo: "https://necromante96official.github.io/DeckBuildingSystem/", docs: "" },
 thumb: "assets/img/deck-building.webp",
 pt: {
 titulo: "Deck Building System",
 resumo: "Organiza mais de 200 cartas por nível e estilo, facilitando a criação de decks equilibrados.",
 descricao: "O Deck Building System ajuda a organizar e equilibrar coleções de cartas do Forbidden Legacy. Ele cataloga mais de 200 cartas por nível e estilo de jogo, facilitando a criação de decks equilibrados e a visualização de todas as opções disponíveis, com publicação automática para consulta.",
 papel: "Solução que organiza e equilibra coleções de cartas para facilitar a criação de decks.",
 techs: ["TypeScript 5.8","Node 22","esbuild","SheetJS","GitHub Pages"],
 resultados: ["200+ cartas webp otimizadas","Pipeline strict TypeScript validado","Publicação automática em GitHub Pages"]
 },
 en: {
 titulo: "Deck Building System",
 resumo: "Your arsenal always sorted: pipeline that catalogs 200+ cards by tier and archetype and publishes to Pages, automatic.",
 descricao: "XLSX ingest via SheetJS, effect analysis and inventory validation, all in strict TypeScript (Node 22 + esbuild) with optimized webp sync.\n\nThe builder checks synergies, balances costs by rarity (Common→Legendary) and generates browsable indexes. No loose JS, just types: total confidence.",
 papel: "95% strict TypeScript development with Node.js, TypeScript pipelines with data ingest, validation and build, and GitHub Pages publisher. Fully typed code with esbuild.",
 techs: ["TypeScript 5.8","Node 22","esbuild","SheetJS","GitHub Pages"],
 resultados: ["200+ optimized webp cards","Strict validated TypeScript pipeline","Automated GitHub Pages publishing"]
 }
 },
 {
 slug: "ancient-souls",
 category: "game",
 color: "#a78bfa",
 destaque: false,
 private: true,
 links: { github: "", demo: "", docs: "" },
 thumb: "assets/img/ancient-souls.webp",
 pt: {
 titulo: "Ancient Souls",
 resumo: "JRPG clássico com exploração, batalhas, narrativa e mais de 30 horas de aventura em mundo medieval.",
 descricao: "Ancient Souls é um jogo de RPG em estilo clássico, com inspiração nos JRPGs tradicionais. Combina exploração em visão superior, batalhas em visão lateral, narrativa e progressão de personagens, oferecendo mais de 30 horas de aventura em um mundo medieval repleto de detalhes.",
 papel: "Jogo pensado para oferecer uma aventura completa, com exploração, combates e progressão bem equilibrados.",
 techs: ["JavaScript ES6","RPG Maker MZ 1.10","NW.js","CSS3","HTML5"],
 resultados: ["Engine custom completa 100% JS","500+ assets proprietários","12+ plugins AS_* com 30+ horas de gameplay"]
 },
 en: {
 titulo: "Ancient Souls",
 resumo: "Enter The Chronicles of Ancient Souls: 100% JS 2D medieval JRPG, 30+ hours and 12 author plugins that change everything.",
 descricao: "RPG Maker MZ 1.10 + NW.js with no TypeScript: AS_0.0 Orchestrator, Title, Battle and more, each with custom HTML/CSS isolated screen and fluid combat.\n\nDive into 500+ tilesets, sprites and tracks, with advanced menu, persistent save and full gamepad, from village to final boss, your choices matter.",
 papel: "100% ES6 JavaScript game design, extensible plugin architecture in pure JS, level design with complex maps and RPG balancing. Modular JS code with premium CSS and NW.js as wrapper.",
 techs: ["JavaScript ES6","RPG Maker MZ 1.10","NW.js","CSS3","HTML5"],
 resultados: ["Full 100% JS custom engine","500+ proprietary assets","12+ AS_* plugins with 30+ hours of gameplay"]
 }
 },
 {
 slug: "obs-overlay",
 category: "tool",
 color: "#ef4444",
 destaque: false,
 private: false,
 links: { github: "https://github.com/Necromante96Official/OBS-OverlayTimeShow", demo: "", docs: "" },
 thumb: "assets/img/obs-overlay.webp",
 pt: {
 titulo: "OBS Overlay: Timer Action!",
 resumo: "Cronômetro discreto para o OBS que aparece só para você, não na gravação final.",
 descricao: "O OBS Overlay Timer é uma ferramenta para quem grava ou transmite com o OBS Studio. Mostra um cronômetro na sua tela que não aparece na gravação final, ajudando a controlar o tempo de forma discreta.\n\nIdeal para manter o foco no conteúdo sem se preocupar com a edição depois.",
 papel: "Ferramenta discreta que ajuda no controle de tempo sem interferir na gravação.",
 techs: ["Python 3.10","C++17","CMake","Qt6","OBS WebSocket 5"],
 resultados: ["3 modos funcionais: Python, C++, Dock","Totalmente excluído do vídeo via WDA_EXCLUDE","Live para streamers Windows 10+"]
 },
 en: {
 titulo: "OBS Overlay: Timer Action!",
 resumo: "Record worry-free: timer you see, recording doesn't, pulsing pill that pauses with OBS and hides on stop.",
 descricao: "Three ways: pure Python overlay (Tkinter + obs-websocket), native C++17 plugin (CMake/Qt6/libobs) or HTML/JS Dock. Sync via WDA_EXCLUDEFROMCAPTURE (Win32).\n\nMillisecond precision, free hotkeys and OBS 28+ on Windows 10 2004+, focus on content, not editing.",
 papel: "50% Python 3.10 development with obs-websocket and Tkinter, and 50% C++17 with CMake, Qt6 and libobs. Python code for overlay and native C++ for plugin with Win32 API.",
 techs: ["Python 3.10","C++17","CMake","Qt6","OBS WebSocket 5"],
 resultados: ["3 functional modes: Python, C++, Dock","Completely excluded from video via WDA_EXCLUDE","Live for Windows 10+ streamers"]
 }
 },
 {
 slug: "mo2tools",
 category: "tool",
 color: "#6b7280",
 destaque: false,
 private: false,
 links: { github: "https://github.com/Necromante96Official/MO2Tools", demo: "", docs: "" },
 thumb: "assets/img/mo2tools.webp",
 pt: {
 titulo: "MO2 Tools",
 resumo: "Automatiza do download à instalação no Mod Organizer 2, organizando arquivos e corrigindo versões.",
 descricao: "O MO2 Tools automatiza tarefas no Mod Organizer 2, gerenciador de modificações para jogos. Ele cuida de todo o processo desde o download até a instalação, organiza nomes de arquivos e corrige informações de versão automaticamente, economizando tempo e evitando erros manuais.",
 papel: "Solução que cuida de tarefas repetitivas de forma automática, organizando e corrigindo tudo sozinha.",
 techs: ["Python 3.11","mobase API","PyQt5/6","Qt Widgets"],
 resultados: ["Fluxo download→instalação 100% automático","Sanitização inteligente e version-fix com retry 8x","18+ configurações ajustáveis em tempo real"]
 },
 en: {
 titulo: "MO2 Tools",
 resumo: "Mod without friction: plugin that takes your download to install alone, cleans names and fixes version with retry, 18+ tweaks your way.",
 descricao: "100% Python 3 with mobase (IPluginTool) + PyQt5/6. Covers download→install auto, TitleCase, sidecar cleanup and in-place update with 8 retries.\n\nTweak everything in the panel, count on conflict detection, backup/rollback and Ctrl+Shift+Z, NexusMods integrated, your load order will thank you.",
 papel: "100% Python 3 development with mobase IPluginTool and PyQt5/6. Pure Python code with modular architecture (Core, Automation, UI) and advanced modding QoL.",
 techs: ["Python 3.11","mobase API","PyQt5/6","Qt Widgets"],
 resultados: ["100% automatic download→installation workflow","Intelligent sanitization and version-fix with 8x retry","18+ adjustable settings in real-time"]
 }
 }
];

