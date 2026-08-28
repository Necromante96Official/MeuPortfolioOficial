
/* Portfolio projects data: Lucas Tavares / Necromante96Official */
window.PROJECTS = [
 {
 slug: "fisiohub",
 category: "institucional",
 icon: "🏥",
 color: "#60a5fa",
 destaque: true,
 private: false,
 links: { github: "", demo: "https://necromante96official.github.io/FisioHub/", docs: "" },
 thumb: "assets/img/fisiohub.webp",
 pt: {
 titulo: "FisioHub",
 resumo: "Da coleta do ZenFisio à gestão clínica em segundos: sistema 100% offline para a Clínica de Fisioterapia da ESEFID da Universidade Federal do Rio Grande do Sul, com 3 extensões que organizam por data, pendências e financeiro, seus dados nunca saem do dispositivo.",
 descricao: "Já em uso real, o FisioHub recebe o TXT do Coletor (Ctrl+Shift+X), aciona Notificador (Ctrl+Shift+Z) e Alerta (Alt+Z), filtra por competência e transforma caos em clareza: evoluções pendentes à vista, financeiro fechado e agenda conferida. Tudo via LocalStorage, sem servidor e com privacidade total.\n\nVocê ganha dashboards vivas por fisioterapeuta, histórico por paciente e um painel Análise que cruza tudo em um clique, foco clínico, zero retrabalho.",
 papel: "Arquitetura completa, frontend em TypeScript com Vite, extensões Chrome MV3 em JavaScript, roteamento hash SPA e testes. Código principal em TypeScript 98% e 3 content-scripts em JavaScript.",
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
 icon: "📥",
 color: "#06b6d4",
 destaque: false,
 private: true,
 links: { github: "", demo: "", docs: "" },
 thumb: "assets/img/fisiohub.webp",
 pt: {
 titulo: "ZenFisio Coletor de Dados",
 resumo: "Colete a agenda do ZenFisio sem copiar e colar: 1 clique, painel arrastável e TXT pronto (dd.mm.yy), anti-duplicação inteligente para alimentar o FisioHub.",
 descricao: "Esqueça o Ctrl+C infinito. Com Ctrl+Shift+X o Coletor varre os blocos FullCalendar visíveis (08h–17h), valida horários e evita duplicatas por ID (paciente+horário) com janela de 5s.\n\nVocê arrasta o painel, vê o progresso, salva onde quiser (ele lembra o local) e recebe notificação central. Sem build, 100% vanilla, pronto para injetar direto no app.zenfisio.com.",
 papel: "Desenvolvimento 100% JavaScript vanilla, sem TypeScript ou build, content script + service worker, MutationObserver para popups, parser de status por DOM (inputs marcados, aria-checked) e gestão de storage. CSS premium isolado e painel acessível.",
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
 icon: "🔔",
 color: "#a78bfa",
 destaque: false,
 private: true,
 links: { github: "", demo: "", docs: "" },
 thumb: "assets/img/fisiohub.webp",
 pt: {
 titulo: "ZenFisio Notificar Mensagens",
 resumo: "Status mudou? O Chat já sabe: extensão que vigia a agenda e dispara mensagem precisa no Google Chat, com histórico e atalhos que poupam seu dia.",
 descricao: "Ative com Ctrl+Shift+Z e deixe o Notificar trabalhar: ele observa mudanças de status (atendido, faltou, cancelado, agendado...) e envia no Google Chat com precisão, sem você trocar de aba.\n\nHistórico pesquisável, ações rápidas para ZenFisio/Chat e teste integrado. TypeScript 5.9, dual content-scripts e web_accessible_resources, leve, confiável e em produção.",
 papel: "Arquitetura 100% TypeScript 5.9 com typecheck tsc, background service worker em ESM (dist/background/index.js), content scripts duplos (ZenFisio + Google Chat) e popup UI. Tipagem @types/chrome e testes com node:test.",
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
 icon: "⚠️",
 color: "#f59e0b",
 destaque: false,
 private: true,
 links: { github: "", demo: "", docs: "" },
 thumb: "assets/img/fisiohub.webp",
 pt: {
 titulo: "ZenFisio Alerta Repetidor",
 resumo: "Nunca perca uma renovação: destaque automático para `X de Y` completo, faixa animada, botão AR flutuante e memória diária.",
 descricao: "Clique em Iniciar e veja a mágica entre 07h–17h: o Alerta varre os cards, detecta `Repetido: X de Y` e ilumina só quando X===Y (1–20) com faixa branca que chama o olho.\n\nAlt+Z mostra/esconde o botão AR, e os destaques persistem mesmo recarregando ou abrindo agendamentos no mesmo dia. TypeScript puro, leve e direto ao ponto.",
 papel: "Desenvolvimento TypeScript 5.9 com build tsc e copy-static, content script dedicado, lógica de parsing de repetição, gestão de estado persistente e UI flutuante. Testes com node:test e tipagem @types/chrome.",
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
 icon: "💳",
 color: "#22c55e",
 destaque: true,
 private: false,
 links: { github: "", demo: "https://necromante96official.github.io/ControleFinanceiroOficial/", docs: "" },
 thumb: "assets/img/controle-financeiro.webp",
 pt: {
 titulo: "Controle Financeiro",
 resumo: "Seu dinheiro, 100% offline e sob controle: PWA que cabe no bolso, categorias coloridas, extrato vivo, VA/VR e cartões sem nuvem nem assinatura.",
 descricao: "Instale em 1 toque e use no PC ou celular, mesmo sem internet. Feito 100% vanilla (JS + HTML5/CSS3 em 10 camadas) para ser leve e instantâneo: múltiplas contas, categorias do seu jeito e gráficos mensais/anuais.\n\nPrecisa levar para outro aparelho? Exporte e importe seu backup local em segundos. Nada sai do dispositivo, só você, seus números e código MIT aberto.",
 papel: "Desenvolvimento 100% JavaScript vanilla, sem TypeScript ou frameworks, com PWA Service Worker, design de dados com IndexedDB e build Android. Código direto, leve e performático.",
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
 icon: "🌐",
 color: "#a78bfa",
 destaque: true,
 private: true,
 links: { github: "", demo: "", docs: "" },
 thumb: "assets/img/nexustranslator.webp",
 pt: {
 titulo: "Nexus Translator",
 resumo: "Traduza jogos inteiros sem dor: hub com IA para Stardew, Hytale, Unreal e Unity, escaneia, normaliza e entrega ZIPs prontos, com LQA à prova de vazamentos.",
 descricao: "Por trás, 31 módulos (82% TypeScript, Python/UnityPy, Shell) detectam Unity Mono/IL2CPP e pacotes Unreal, integram NexusMods + Cursor Auto e cuidam de glossários.\n\nVocê vê progresso ao vivo, gera ZIPs otimizados e confia no LQA humano+IA (Cursor/Ollama) para diálogos que soam naturais, de JSON a binários, sem perder o charme.",
 papel: "Arquitetura principal em TypeScript com Node, automação Python para UnityPy/Unreal, pipelines de LQA e geração de ZIPs para Stardew, Hytale, Unreal e Unity. Código revisado e testado com esbuild e Cursor SDK.",
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
 icon: "📖",
 color: "#d4881c",
 destaque: true,
 private: false,
 links: { github: "", demo: "https://www.nexusmods.com/profile/Necromante96Official", docs: "https://www.curseforge.com/hytale/mods/maior-pack-de-traducoes-pt-br" },
 thumb: "assets/img/traducoes.webp",
 pt: {
 titulo: "Traduções de Mods",
 resumo: "Jogue no seu idioma, com alma: coletânea PT-BR autorizada via Discord, cada linha revisada para soar natural, de Stardew a Dragon Quest.",
 descricao: "Não é robô: são mods não oficiais mas autorizados pelas devs, publicados na Nexus/CurseForge/Steam. Usei NexusTranslator + LQA humano com glossários vivos para manter piadas, lore e termos consistentes.\n\nDe Stardew Valley e Forsaken Realms (mod 5 autorizado) a Hytale, Elementallis e DQ I&II HD-2D Remake, multiplataforma e com respeito total ao original.",
 papel: "Tradução, revisão, LQA, geração de ZIPs, contato com devs e publicação Nexus/CurseForge/Steam como mods não oficiais autorizados. Uso avançado de TypeScript e Python para extração de strings de Unreal e Unity.",
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
 icon: "⚔️",
 color: "#ef4444",
 destaque: true,
 private: true,
 links: { github: "", demo: "", docs: "" },
 thumb: "assets/img/rpg-skills-mod.webp",
 pt: {
 titulo: "RPG Skills Mod",
 resumo: "Transforme Necesse em RPG de verdade: 33 classes, 19 passivas e XP que responde ao seu estilo, 12 idiomas e 18,5 mil aventureiros no Workshop.",
 descricao: "Escolha Guerreiro, Mago, Ranger, Sacerdote ou Híbrido e suba até 165. Cada classe libera passivas únicas, a loja QoL e o balanceamento dinâmico mantêm o desafio na medida.\n\n100% Java 17 com Gradle multi-módulo (ADRs + JUnit 5), sem Kotlin, Necesse API pura para atualizar sempre e jogar liso.",
 papel: "Desenvolvimento 100% Java 17, arquitetura Gradle multi-projeto, Necesse API, sistema de progressão RPG, balanceamento de jogo e localização para 12 idiomas. Código Java com testes JUnit e build Gradle otimizado.",
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
 icon: "🌙",
 color: "#d4881c",
 destaque: false,
 private: false,
 links: { github: "", demo: "https://necromante96official.github.io/RPG-Skills-Site/", docs: "" },
 thumb: "assets/img/rpg-skills-site.webp",
 pt: {
 titulo: "RPG Skills Site",
 resumo: "A vitrine que vende o mod: site premium 100% vanilla, 11 páginas com hero de orbs e troca PT/EN instantânea, sem framework, sem peso.",
 descricao: "HTML5 semântico + 10 camadas CSS (tokens→polish) + JS IIFE com IntersectionObserver. Navegue por Progressão, Classes, Passivas e Changelog com animações suaves.\n\nNo ar via GitHub Pages com .nojekyll, SEO redondo e responsivo de ponta a ponta, vanilla bem feito que brilha.",
 papel: "Desenvolvimento 100% HTML5 semântico, CSS3 com design tokens e JavaScript vanilla IIFE. Código sem frameworks, com i18n vanilla, IntersectionObserver para lazy load e deploy GitHub Pages.",
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
 icon: "🛡️",
 color: "#1ea54a",
 destaque: false,
 private: true,
 links: { github: "", demo: "", docs: "" },
 thumb: "assets/img/forbidden-legacy.webp",
 pt: {
 titulo: "Forbidden Legacy Patch Manager",
 resumo: "Modde sem medo: app que cria patches overlay com AES e mescla ao oficial, sem tocar no exe e com rollback se precisar.",
 descricao: "Reverti Godot 4 PCK com GDRE/GDScript, extraio GDExtension, criptografo via pycryptodome e unifico presets/drops com UI em Avalonia (MVVM).\n\nInstale em camadas, valide assets e resolva conflitos sozinho. Seus saves .flsave ficam intactos e o launcher oficial nem nota, e se algo der errado, um clique desfaz.",
 papel: "Desenvolvimento principal em C# com Avalonia UI e MVVM, pipelines Python com pck_writer e pck_crypto, pesquisa de formato PCK com GDScript e GDRE. Interface C# nativa e automação Python.",
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
    icon: "☥",
    color: "#d4881c",
    destaque: true,
    private: false,
    links: { github: "", demo: "https://forbiddenlegacy.com.br/", docs: "https://discord.gg/MkJXZ9tNQ6" },
    thumb: "assets/img/forbidden-legacy.webp",
    pt: {
      titulo: "Forbidden Legacy",
      resumo: "Remake fã espiritual de Yu-Gi-Oh! Forbidden Memories, reconstruído do zero por Felipe França / Trager Games (com minha atuação como dev). 900+ cartas, 29 NPCs com IA e decks próprios, Season 1 completa, Beta 1.8.2 para PC/Android com launcher, boosters, torneios e Full Arts.",
      descricao: "O clássico do PS1 que você amava, mas com tudo que ele deveria ter tido: sistema de fusão fiel ao FM, campanha com drama real, IA de oponentes, banlist por grupos, loja reformulada, Deck Builder, Catálogo, Conquistas, Championship e interface totalmente refeita para PC e Android. 900+ cartas, 29 NPCs (de Simon Muran a Zorc), arenas como Skyscraper e Yami, Full Arts e 4 idiomas. Versão Free até Isis, Founder desbloqueia todos (Akhenaden, Altos Magos, Sebek, Labyrinth, Heishin, Zorc) com Season 1 completa e acesso antecipado à Season 2.\n\nAtualmente atuo como desenvolvedor ajudando a Trager Games: contribuo no ecossistema do jogo que já uso no Patch Manager (overlays AES para Godot PCK v4) e no Deck Building System (pipeline TypeScript que cataloga 200+ cartas). Download direto sem instalação: launcher para Windows/Linux (atualizações incrementais) e APK para Android (armeabi-v7a/arm64-v8a, OpenGL ES 3.0, 3GB RAM). Comunidade ativa no Discord com changelog, torneio e suporte, e venda Founder R$ 39,90 / $20 via PIX, cartão e Stripe.",
      papel: "Desenvolvedor colaborador na Trager Games: apoio no ecossistema Forbidden Legacy com tooling em C# .NET 9 + Avalonia e Python (Godot PCK v4, pycryptodome), pipeline de cartas em TypeScript e integração web (forbiddenlegacy.com.br). Atuação direta no fluxo que mantém o jogo em Beta 1.8.2 estável para PC/Android.",
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
 icon: "🃏",
 color: "#c8973a",
 destaque: false,
 private: false,
 links: { github: "", demo: "https://necromante96official.github.io/DeckBuildingSystem/", docs: "" },
 thumb: "assets/img/deck-building.webp",
 pt: {
 titulo: "Deck Building System",
 resumo: "Seu arsenal sempre em ordem: pipeline que cataloga 200+ cartas por tier e arquétipo e publica no Pages, automático.",
 descricao: "Ingestão XLSX via SheetJS, análise de efeitos e validação de inventário, tudo em TypeScript strict (Node 22 + esbuild) com sincronia de webp otimizadas.\n\nO builder confere sinergias, equilibra custos por raridade (Comum→Lendário) e gera índices navegáveis. Sem JS solto, só tipos: confiança total.",
 papel: "Desenvolvimento 95% TypeScript strict com Node.js, pipelines em TypeScript com ingest de dados, validação e build, e publisher para GitHub Pages. Código 100% tipado com TSX e esbuild.",
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
 icon: "🗺️",
 color: "#a78bfa",
 destaque: false,
 private: true,
 links: { github: "", demo: "", docs: "" },
 thumb: "assets/img/ancient-souls.webp",
 pt: {
 titulo: "Ancient Souls",
 resumo: "Entre em As Crônicas de Ancient Souls: JRPG 2D medieval 100% JS, 30+ horas e 12 plugins autorais que mudam tudo.",
 descricao: "RPG Maker MZ 1.10 + NW.js sem TypeScript: plugins AS_0.0 Orchestrator, Title, Battle e mais, cada um com tela custom em HTML/CSS isolado e combate fluido.\n\nMergulhe em 500+ tilesets, sprites e trilhas, com menu avançado, save persistente e gamepad total, do vilarejo ao boss final, cada escolha sua.",
 papel: "Game design 100% JavaScript ES6, arquitetura de plugins extensível em JS puro, level design com mapas complexos e balanceamento RPG. Código JS modular com CSS premium e NW.js como wrapper.",
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
 icon: "⏱️",
 color: "#ef4444",
 destaque: false,
 private: false,
 links: { github: "https://github.com/Necromante96Official/OBS-OverlayTimeShow", demo: "", docs: "" },
 thumb: "assets/img/obs-overlay.webp",
 pt: {
 titulo: "OBS Overlay: Timer Action!",
 resumo: "Grave sem sustos: timer que você vê, a gravação não, pill pulsante que pausa com o OBS e some ao parar.",
 descricao: "Três jeitos: overlay Python puro (Tkinter + obs-websocket), plugin nativo C++17 (CMake/Qt6/libobs) ou Dock em HTML/JS. Sincronia via WDA_EXCLUDEFROMCAPTURE (Win32).\n\nPrecisão de milissegundos, hotkeys livres e compatível com OBS 28+ no Windows 10 2004+, foco no conteúdo, não na edição.",
 papel: "Desenvolvimento 50% Python 3.10 com obs-websocket e Tkinter, e 50% C++17 com CMake, Qt6 e libobs. Código Python para overlay e C++ nativo para plugin com Win32 API.",
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
 icon: "🧩",
 color: "#6b7280",
 destaque: false,
 private: false,
 links: { github: "https://github.com/Necromante96Official/MO2Tools", demo: "", docs: "" },
 thumb: "assets/img/mo2tools.webp",
 pt: {
 titulo: "MO2 Tools",
 resumo: "Modde sem atrito: plugin que leva seu download à instalação sozinho, limpa nomes e corrige versão com retry, 18+ ajustes ao seu gosto.",
 descricao: "100% Python 3 com mobase (IPluginTool) + PyQt5/6. Cobre download→install automático, TitleCase, limpeza de sidecars e update in-place com 8 tentativas.\n\nAjuste tudo no painel, conte com detecção de conflitos, backup/rollback e atalho Ctrl+Shift+Z, NexusMods integrado, seu load order agradece.",
 papel: "Desenvolvimento 100% Python 3 com mobase IPluginTool e PyQt5/6. Código Python puro com arquitetura modular (Core, Automation, UI) e QoL avançado de modding.",
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

