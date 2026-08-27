/* Portfolio, Main JS (corrigido), nav + reveal + i18n + filter + detail */
(function () {
 'use strict';

 var STORAGE_KEY = 'portfolio-lang';
 var currentLang = 'pt-BR';
 var I18N = null;

 function i18nBase() {
 // Em subpastas (projetos-site/*, paginas/*) o fetch precisa subir um nível
 try {
 var p = location.pathname;
 if (p.indexOf('/projetos-site/') !== -1 || p.indexOf('/paginas/') !== -1) return '../';
 // fallback: se tiver mais de 1 '/' após host, assume subpasta
 var parts = p.split('/').filter(function(x){ return x.length; });
 if (parts.length > 1 && parts[parts.length-1].indexOf('.html') !== -1) return '../';
 } catch(e) {}
 return '';
 }

 function getLocalized(p) {
 var lang = currentLang === 'en' ? 'en' : 'pt';
 return p[lang] || p.pt || p.en || {};
 }

 function catLabel(cat) {
 if (!I18N || !I18N[currentLang]) return cat;
 var d = I18N[currentLang];
 var map = {
 'web': d['filter.web'] || 'Web & PWA',
 'game': d['filter.game'] || 'Game Dev',
 'translation': d['filter.translation'] || 'Tradução',
 'tool': d['filter.tool'] || 'Ferramentas',
 'institucional': d['filter.institucional'] || 'Institucional'
 };
 return map[cat] || cat;
 }

 function loadI18n(cb) {
 var base = i18nBase();
 function fetchJSON(url, onOk, onFail) {
 fetch(url).then(function(r){
 if (!r.ok) throw new Error('HTTP ' + r.status);
 return r.json();
 }).then(onOk).catch(onFail);
 }
 fetchJSON(base + 'i18n/pt-BR.json', function(pt){
 fetchJSON(base + 'i18n/en.json', function(en){
 I18N = { 'pt-BR': pt, 'en': en };
 if (!window.I18N_FALLBACK) window.I18N_FALLBACK = I18N;
 cb();
 }, function(){
 I18N = { 'pt-BR': pt };
 if (!window.I18N_FALLBACK) window.I18N_FALLBACK = I18N;
 cb();
 });
 }, function(){
 if (window.I18N_FALLBACK) {
 I18N = window.I18N_FALLBACK;
 } else {
 console.warn('[i18n] load failed and no fallback');
 I18N = null;
 }
 cb();
 });
 }

 function detectLang() {
 var saved = localStorage.getItem(STORAGE_KEY);
 if (saved === 'en' || saved === 'pt-BR') return saved;
 var nav = navigator.language || '';
 return nav.startsWith('en') ? 'en' : 'pt-BR';
 }

 function applyTranslations() {
 if (!I18N || !I18N[currentLang]) return;
 var dict = I18N[currentLang];
 // primeiro renderiza grids/detalhes para que os nós recém-criados também sejam traduzidos
 if (window.renderProjects) window.renderProjects();
 if (window.renderDetail) window.renderDetail();
 document.querySelectorAll('[data-i18n]').forEach(function(el){
 var k = el.getAttribute('data-i18n');
 if (dict[k] !== undefined) el.innerHTML = dict[k];
 });
 document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
 var k = el.getAttribute('data-i18n-placeholder');
 if (dict[k] !== undefined) el.placeholder = dict[k];
 });
 // contador traduzido após render
 var countEl = document.getElementById('filter-count');
 if (countEl && window.PROJECTS) {
 var n = window.PROJECTS.length;
 // para projetos-site/index a contagem real é filtrada, atualiza lá dentro de renderProjects também
 // aqui só garante label base quando não filtrado
 if (!document.getElementById('project-grid-all')) {
 countEl.textContent = currentLang === 'en' ? n + ' projects' : n + ' projetos';
 }
 }
 }

 function setLang(lang) {
 if (!I18N || !I18N[lang]) return;
 currentLang = lang;
 localStorage.setItem(STORAGE_KEY, lang);
 document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
 document.querySelectorAll('.lang-option').forEach(function(b){
 b.classList.toggle('active', b.getAttribute('data-lang')===lang);
 });
 applyTranslations();
 }

 // NAV scroll
 var nav = document.querySelector('.nav');
 if (nav) {
 var onScroll = function(){ nav.classList.toggle('scrolled', window.scrollY > 36); };
 window.addEventListener('scroll', onScroll, {passive:true});
 onScroll();
 }

 // REVEAL
 var reveals = document.querySelectorAll('.reveal');
 if (reveals.length && 'IntersectionObserver' in window) {
 var io = new IntersectionObserver(function(entries){
 entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
 }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
 reveals.forEach(function(el){ io.observe(el); });
 } else {
 reveals.forEach(function(el){ el.classList.add('visible'); });
 }

 // MOBILE NAV
 var toggle = document.querySelector('.mobile-toggle');
 var mobile = document.querySelector('.mobile-nav');
 var closeBtn = document.querySelector('.mobile-nav-close');
 if (toggle && mobile) {
 toggle.addEventListener('click', function(){ mobile.classList.add('open'); document.body.style.overflow='hidden'; toggle.setAttribute('aria-expanded','true'); });
 var closeM = function(){ mobile.classList.remove('open'); document.body.style.overflow=''; if (toggle) toggle.setAttribute('aria-expanded','false'); };
 if (closeBtn) closeBtn.addEventListener('click', closeM);
 mobile.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeM); });
 }

 // smooth scroll
 document.querySelectorAll('a[href^=\"#\"]').forEach(function(a){
 a.addEventListener('click', function(e){
 var h = a.getAttribute('href');
 if(!h || h==='#') return;
 var t = document.querySelector(h);
 if(t){ e.preventDefault(); var top = t.getBoundingClientRect().top + window.scrollY - 76; window.scrollTo({top:top, behavior:'smooth'}); }
 });
 });

 function bindLangButtons(){
 document.querySelectorAll('.lang-option').forEach(function(b){
 if(b._bound) return; b._bound=true;
 b.addEventListener('click', function(){
 var l = b.getAttribute('data-lang');
 if(l && l!==currentLang) setLang(l);
 });
 });
 }
 bindLangButtons();

 // PROJECT RENDERING - cards removidos, apenas gatilhos para modais informativos
 function getTechTagClass(t){
 var lc = t.toLowerCase();
 if (lc.includes('typescript') || lc.includes('javascript') || lc.includes('html') || lc.includes('css')) return 'gold';
 if (lc.includes('python') || lc.includes('node') || lc.includes('esbuild') || lc.includes('pycryptodome')) return 'blue';
 if (lc.includes('java') || lc.includes('gradle') || lc.includes('junit')) return 'red';
 if (lc.includes('c#') || lc.includes('.net') || lc.includes('avalonia') || lc.includes('c++') || lc.includes('cmake')) return 'purple';
 if (lc.includes('pwa') || lc.includes('capacitor') || lc.includes('git') || lc.includes('obs') || lc.includes('win32')) return 'green';
 if (lc.includes('unity') || lc.includes('unreal') || lc.includes('godot') || lc.includes('rpg maker')) return 'orange';
 return '';
 }

 // MODAL informativo - titulo igual ao hero "Lucas Tavares"
 function ensureProjectModal(){
 var existing = document.getElementById('project-modal');
 if(existing) return existing;
 var overlay = document.createElement('div');
 overlay.id = 'project-modal';
 overlay.className = 'project-modal';
 overlay.setAttribute('aria-hidden','true');
 overlay.innerHTML = ''
 + '<div class="project-modal-backdrop" data-close="true"></div>'
 + '<div class="project-modal-dialog premium-simple" role="dialog" aria-modal="true" aria-labelledby="pm-title">'
 + ' <button class="project-modal-close" aria-label="Fechar" data-close="true">&times;</button>'
 + ' <div class="project-modal-head">'
 + ' <div class="project-modal-kicker"><span id="pm-kicker"></span></div>'
 + ' <div class="hero-title-wrap" style="margin-bottom:8px; justify-content:center;">'
 + ' <h2 id="pm-title" class="hero-title project-modal-title"></h2>'
 + ' </div>'
 + ' <div class="hero-divider" style="margin:8px auto 14px; max-width:260px;"><span></span><span>◆</span><span></span></div>'
 + ' <p id="pm-resumo" class="project-modal-resumo"></p>'
 + ' </div>'
 + ' <div class="project-modal-body" style="text-align:center;">'
 + ' <p id="pm-descricao" class="project-modal-desc"></p>'
 + ' <div id="pm-links" class="project-modal-links"></div>'
 + ' </div>'
 + '</div>';
 document.body.appendChild(overlay);
 overlay.addEventListener('click', function(e){
 if(e.target.getAttribute('data-close')==='true' || e.target.closest('[data-close="true"]')) closeProjectModal();
 });
 document.addEventListener('keydown', function(e){
 if(e.key==='Escape' && overlay.classList.contains('open')) closeProjectModal();
 });
 return overlay;
 }
 function closeProjectModal(){
 var m = document.getElementById('project-modal');
 if(!m) return;
 m.classList.remove('open');
 m.setAttribute('aria-hidden','true');
 document.body.style.overflow='';
 }
 window.closeProjectModal = closeProjectModal;
 window.openProjectModal = function(slug){
 var p = (window.PROJECTS||[]).find(function(x){ return x.slug===slug; });
 if(!p) return;
 var d = getLocalized(p);
 var dict = (I18N && I18N[currentLang]) || {};
 var modal = ensureProjectModal();
 var cat = catLabel(p.category);
 var kickerEl = document.getElementById('pm-kicker');
 if(kickerEl) kickerEl.textContent = cat;
 var titleEl = document.getElementById('pm-title');
 if(titleEl) titleEl.textContent = d.titulo || p.slug;
 var resumoEl = document.getElementById('pm-resumo');
 if(resumoEl) resumoEl.textContent = d.resumo || '';
 var descEl = document.getElementById('pm-descricao');
 if(descEl) descEl.textContent = d.descricao || d.resumo || '';
 var linksWrap = document.getElementById('pm-links');
 if(linksWrap){
 var hrefBase = (function(){ var path=location.pathname; if(path.indexOf('/projetos-site/')!==-1) return ''; if(path.indexOf('/paginas/')!==-1) return '../projetos-site/'; return 'projetos-site/'; })();
 var href = hrefBase + p.slug + '.html';
 var labelPage = currentLang==='en' ? 'View full page' : 'Ver página completa';
 linksWrap.innerHTML = '<a href="'+href+'" class="btn btn-primary" style="padding:12px 28px; font-size:0.78rem; letter-spacing:0.04em; box-shadow: 0 8px 22px rgba(6,182,212,0.22);">↗ '+labelPage+'</a>';
 }
 modal.classList.add('open');
 modal.setAttribute('aria-hidden','false');
 document.body.style.overflow='hidden';
 // foco no close para acessibilidade
 var closeBtn = modal.querySelector('.project-modal-close');
 if(closeBtn) closeBtn.focus();
 };

 function projectCardHTML(p){
 var d = getLocalized(p);
 // Sem card visual - apenas gatilho minimalista que abre modal informativo
 // Titulo estilizado igual ao hero (via classe project-modal-title / CSS abaixo)
 return '<button type="button" class="project-trigger" data-category="'+p.category+'" data-title="'+(d.titulo||'').toLowerCase()+'" data-slug="'+p.slug+'" onclick="window.openProjectModal(\''+p.slug+'\')" aria-label="Ver detalhes de '+d.titulo+'">'
 + ' <span class="project-trigger-title">'+d.titulo+'</span>'
 + ' <span class="project-trigger-cat">'+catLabel(p.category)+'</span>'
 + ' <span class="project-trigger-hint">'+(currentLang==='en' ? 'view details →' : 'ver detalhes →')+'</span>'
 + '</button>';
 }

 
  // TECH MODAL — explicativo premium, separa texto de linguagens/stack
  var TECH_DETAILS = {
    "TypeScript 5.9": { pt: "Tipagem estática para domínios complexos. No projeto garante segurança e refatoração sem perder performance.", en: "Static typing for complex domains. Ensures safety and refactoring without losing performance." },
    "Vite 8": { pt: "Bundler ultra-rápido com HMR instantâneo e build otimizado.", en: "Ultra-fast bundler with instant HMR and optimized build." },
    "Chrome Extensions MV3": { pt: "Arquitetura moderna de extensões Chrome, com service worker e permissões granulares.", en: "Modern Chrome extensions architecture with service worker and granular permissions." },
    "Chrome Extension MV3": { pt: "Extensão Chrome MV3 isolada e segura, com content scripts e storage local.", en: "Isolated secure MV3 Chrome extension with content scripts and local storage." },
    "JavaScript": { pt: "Linguagem base da web. Usei vanilla para leveza e controle total.", en: "Web base language. Used vanilla for lightness and full control." },
    "Hash SPA": { pt: "Roteamento por hash para SPA sem servidor, compatível com GitHub Pages.", en: "Hash routing for serverless SPA, GitHub Pages compatible." },
    "LocalStorage": { pt: "Persistência 100% local no navegador, sem envio para servidores.", en: "100% local persistence in browser, no server upload." },
    "ZenFisio DOM": { pt: "Leitura e varredura do DOM FullCalendar do ZenFisio para coleta precisa.", en: "Reading and scanning ZenFisio FullCalendar DOM for precise collection." },
    "chrome.storage": { pt: "API de armazenamento local da extensão, com persistência diária.", en: "Extension local storage API with daily persistence." },
    "MutationObserver": { pt: "Observa mudanças no DOM para capturar popups em tempo real.", en: "Watches DOM changes to capture popups in real time." },
    "Google Chat API": { pt: "Integração com Google Chat para disparo automático de mensagens.", en: "Integration with Google Chat for automatic message dispatch." },
    "chrome.scripting": { pt: "Injeção dinâmica de scripts em páginas específicas com segurança.", en: "Dynamic script injection on specific pages securely." },
    "Node:test": { pt: "Runner de testes nativo do Node para validação leve.", en: "Native Node test runner for lightweight validation." },
    "ZenFisio Repetição": { pt: "Parsing de Repetido X de Y para detectar renovação completa.", en: "Parsing Repeated X of Y to detect full renewal." },
    "Copy-static": { pt: "Copia de assets estáticos no build TypeScript para distribuição.", en: "Static asset copy in TypeScript build for distribution." },
    "ZenFisio Repetition": { pt: "Detecção de ciclos completos X de Y.", en: "Full cycle X of Y detection." },
    "HTML5": { pt: "Semântica moderna para acessibilidade e SEO.", en: "Modern semantics for accessibility and SEO." },
    "CSS3": { pt: "Estilização com tokens, animações e responsivo premium.", en: "Styling with tokens, animations and premium responsive." },
    "PWA": { pt: "Progressive Web App instalável, com manifest e ícones.", en: "Installable Progressive Web App with manifest and icons." },
    "Service Worker": { pt: "Cache offline e controle de rede para uso sem internet.", en: "Offline cache and network control for offline use." },
    "Capacitor 5.7": { pt: "Empacotamento nativo Android a partir do PWA.", en: "Native Android packaging from PWA." },
    "TypeScript 5.5": { pt: "TypeScript em modo estrito para pipeline robusto.", en: "Strict TypeScript for robust pipeline." },
    "Python 3.10": { pt: "Automação e integração com libs Python para dados e cripto.", en: "Automation and integration with Python libs for data and crypto." },
    "Node 20": { pt: "Runtime Node atualizado para tooling moderno.", en: "Updated Node runtime for modern tooling." },
    "esbuild": { pt: "Bundler extremamente rápido para TS.", en: "Extremely fast bundler for TS." },
    "Cursor SDK": { pt: "Integração com Cursor para automação de tradução.", en: "Integration with Cursor for translation automation." },
    "UnityPy": { pt: "Leitura e manipulação de assets Unity em Python.", en: "Reading and handling Unity assets in Python." },
    "Unreal Engine": { pt: "Motor C++ para extração de strings e pacotes.", en: "C++ engine for string and package extraction." },
    "Unity/IL2CPP": { pt: "Backend Unity C# com IL2CPP para descompilação.", en: "Unity C# backend with IL2CPP for decompilation." },
    "LQA": { pt: "Language Quality Assurance com glossários e revisão humana.", en: "Language Quality Assurance with glossaries and human review." },
    "Glossários": { pt: "Base terminológica para consistência entre projetos.", en: "Terminology base for cross-project consistency." },
    "Glossaries": { pt: "Base terminológica para consistência.", en: "Terminology base for consistency." },
    "Hytale": { pt: "Suporte ao ecossistema Hytale na pipeline.", en: "Hytale ecosystem support in pipeline." },
    "Java 17": { pt: "Java LTS moderno para mods robustos.", en: "Modern Java LTS for robust mods." },
    "Gradle 8": { pt: "Build multi-módulo com cache e tasks.", en: "Multi-module build with cache and tasks." },
    "Necesse API": { pt: "API oficial do jogo Necesse para hooks de gameplay.", en: "Official Necesse game API for gameplay hooks." },
    "JUnit 5": { pt: "Testes unitários Java com assertions modernas.", en: "Java unit tests with modern assertions." },
    "Eclipse JDT": { pt: "Tooling Java para análise estática.", en: "Java tooling for static analysis." },
    "JavaScript vanilla": { pt: "JS puro sem frameworks, leve e performático.", en: "Pure JS without frameworks, light and performant." },
    "i18n vanilla": { pt: "Internacionalização sem libs, com troca instantânea.", en: "Library-free i18n with instant switch." },
    "GitHub Pages": { pt: "Hospedagem estática gratuita com .nojekyll.", en: "Free static hosting with .nojekyll." },
    "C# .NET 9": { pt: "Stack Microsoft moderna com performance e tipagem.", en: "Modern Microsoft stack with performance and typing." },
    "Avalonia 11.2.5": { pt: "UI cross-platform com MVVM para desktop.", en: "Cross-platform UI with MVVM for desktop." },
    "pycryptodome": { pt: "Criptografia AES para PCKs do Godot.", en: "AES cryptography for Godot PCKs." },
    "Godot 4 PCK": { pt: "Formato de pacote do Godot 4, com extração e recompilação.", en: "Godot 4 package format with extraction and rebuild." },
    "Godot 4": { pt: "Engine Godot 4 com GDScript e PCK.", en: "Godot 4 engine with GDScript and PCK." },
    "GDScript/GDRE": { pt: "Script e descompilador do Godot para engenharia reversa.", en: "Godot script and decompiler for reverse engineering." },
    "TypeScript 5.8": { pt: "TypeScript strict para pipeline com total segurança de tipos.", en: "Strict TypeScript for pipeline with full type safety." },
    "Node 22": { pt: "Node LTS mais recente para scripts de ingestão.", en: "Latest Node LTS for ingest scripts." },
    "SheetJS": { pt: "Leitura de XLSX no Node para catálogo de cartas.", en: "XLSX reading on Node for card catalog." },
    "JavaScript ES6": { pt: "JS moderno com módulos e classes para plugins.", en: "Modern JS with modules and classes for plugins." },
    "RPG Maker MZ 1.10": { pt: "Engine JRPG com editor de mapas e eventos.", en: "JRPG engine with map and event editor." },
    "NW.js": { pt: "Wrapper desktop que une Chromium e Node.", en: "Desktop wrapper joining Chromium and Node." },
    "Python 3.10": { pt: "Python para overlay e automação leve.", en: "Python for overlay and light automation." },
    "C++17": { pt: "C++ moderno para plugin nativo de alta performance.", en: "Modern C++ for high-performance native plugin." },
    "CMake": { pt: "Gerador de build para projetos C++.", en: "Build generator for C++ projects." },
    "Qt6": { pt: "Framework UI para apps desktop com estilo nativo.", en: "UI framework for desktop apps with native style." },
    "OBS WebSocket 5": { pt: "Protocolo para sincronizar timer com OBS.", en: "Protocol to sync timer with OBS." },
    "Python 3.11": { pt: "Python atualizado para automação MO2.", en: "Updated Python for MO2 automation." },
    "mobase API": { pt: "API mobase do Mod Organizer 2 para plugins.", en: "Mod Organizer 2 mobase API for plugins." },
    "PyQt5/6": { pt: "Binding Qt para interfaces Python ricas.", en: "Qt binding for rich Python interfaces." },
    "Qt Widgets": { pt: "Widgets clássicos do Qt para painel de settings.", en: "Classic Qt widgets for settings panel." },
    "PC/Android": { pt: "Suporte multiplataforma com builds dedicados.", en: "Cross-platform support with dedicated builds." },
    "Launcher": { pt: "Atualizador incremental que baixa só o delta.", en: "Incremental updater that downloads only delta." }
  };
  function ensureTechModal(){
    var existing = document.getElementById('tech-modal');
    if(existing) return existing;
    var overlay = document.createElement('div');
    overlay.id = 'tech-modal';
    overlay.className = 'project-modal';
    overlay.setAttribute('aria-hidden','true');
    overlay.innerHTML = ''
      + '<div class="project-modal-backdrop" data-close-tech="true"></div>'
      + '<div class="project-modal-dialog premium-simple" role="dialog" aria-modal="true" aria-labelledby="tech-modal-title" style="max-width:720px;">'
      + '  <button class="project-modal-close" aria-label="Fechar" data-close-tech="true">&times;</button>'
      + '  <div class="project-modal-head">'
      + '    <div class="project-modal-kicker"><span>Stack Técnica</span></div>'
      + '    <div class="hero-title-wrap" style="justify-content:center; margin-bottom:6px;"><h2 id="tech-modal-title" class="hero-title project-modal-title" style="font-size: clamp(1.5rem, 4vw, 2.1rem);">Tecnologias</h2></div>'
      + '    <div class="hero-divider" style="margin:8px auto 14px; max-width:260px;"><span></span><span>◆</span><span></span></div>'
      + '    <p style="color:var(--text-muted); font-size:0.86rem; max-width:60ch; margin:0 auto; text-align:center; text-wrap:balance;">Cada tecnologia com papel claro no resultado, da linguagem ao deploy.</p>'
      + '  </div>'
      + '  <div class="project-modal-body" style="text-align:center;">'
      + '    <div id="tech-modal-list" style="display:grid; gap:10px; margin-top:16px; text-align:left;"></div>'
      + '    <div id="tech-modal-papel" style="margin-top:18px; padding:14px; background: rgba(8,145,178,0.06); border:1px solid rgba(8,145,178,0.14); border-radius:12px; color:var(--text-body); font-size:0.86rem; line-height:1.6; text-align:center; text-wrap:balance;"></div>'
      + '    <div style="margin-top:18px; display:flex; justify-content:center;"><button class="btn btn-primary" data-close-tech="true" style="padding:10px 22px;">Fechar</button></div>'
      + '  </div>'
      + '</div>';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function(e){
      if(e.target.getAttribute('data-close-tech')==='true' || e.target.closest('[data-close-tech="true"]')) closeTechModal();
    });
    document.addEventListener('keydown', function(e){
      if(e.key==='Escape'){
        var tm = document.getElementById('tech-modal');
        if(tm && tm.classList.contains('open')) closeTechModal();
      }
    });
    return overlay;
  }
  window.closeTechModal = function(){
    var m = document.getElementById('tech-modal');
    if(!m) return;
    m.classList.remove('open');
    m.setAttribute('aria-hidden','true');
    if(!document.getElementById('project-modal') || !document.getElementById('project-modal').classList.contains('open')){
      document.body.style.overflow='';
    }
  };
  window.openTechModal = function(){
    var slugEl = document.querySelector('[data-slug]');
    if(!slugEl) return;
    var slug = slugEl.getAttribute('data-slug');
    var p = (window.PROJECTS||[]).find(function(x){ return x.slug===slug; });
    if(!p) return;
    var d = getLocalized(p);
    var isEn = currentLang === 'en';
    var modal = ensureTechModal();
    var listEl = document.getElementById('tech-modal-list');
    var papelEl = document.getElementById('tech-modal-papel');
    if(listEl){
      var techs = d.techs || [];
      listEl.innerHTML = techs.map(function(t){
        var info = TECH_DETAILS[t] || TECH_DETAILS[t.trim()] || { pt: "Tecnologia chave escolhida por performance e manutenibilidade no contexto do projeto.", en: "Key technology chosen for performance and maintainability in this project." };
        var desc = isEn ? (info.en || info.pt) : (info.pt || info.en);
        var c = getTechTagClass(t);
        return '<div style="display:flex; gap:12px; align-items:flex-start; padding:12px; background: rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); border-radius:12px; text-align:left;">'
          + '<span class="tech-tag '+c+'" style="flex-shrink:0; margin-top:2px;">'+t+'</span>'
          + '<span style="font-size:0.84rem; color:var(--text-muted); line-height:1.55;">'+desc+'</span>'
          + '</div>';
      }).join('');
    }
    if(papelEl){
      var papel = d.papel || '';
      papelEl.innerHTML = '<b style="color:#fff;">' + (isEn ? 'My role' : 'Meu papel') + ':</b> ' + papel;
    }
    var titleEl = document.getElementById('tech-modal-title');
    if(titleEl) titleEl.textContent = d.titulo + ' — Stack';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  };


  window.renderProjects = function(){
 var grid = document.getElementById('project-grid');
 var gridAll = document.getElementById('project-grid-all');
 if(!window.PROJECTS) return;
 var dict = (I18N && I18N[currentLang]) || {};
 if(grid){
 var featured = window.PROJECTS.filter(function(p){ return p.destaque; });
 grid.innerHTML = featured.map(projectCardHTML).join('');
 grid.classList.add('visible');
 }
 if(gridAll){
 var q = (document.getElementById('project-search')||{}).value || '';
 q = q.toLowerCase().trim();
 var active = document.querySelector('.filter-btn.active');
 var cat = active ? active.getAttribute('data-filter') : 'all';
 var list = window.PROJECTS.filter(function(p){
 var d = getLocalized(p);
 var matchCat = cat==='all' || p.category===cat;
 var hay = ((d.titulo||'') + ' ' + (d.resumo||'') + ' ' + (d.techs||[]).join(' ')).toLowerCase();
 var matchQ = !q || hay.indexOf(q) !== -1;
 return matchCat && matchQ;
 });
 if (list.length) {
 gridAll.innerHTML = list.map(projectCardHTML).join('');
 } else {
 var emptyPT = 'Nenhum projeto encontrado.';
 var emptyEN = 'No projects found.';
 var empty = currentLang === 'en' ? emptyEN : emptyPT;
 if (dict['projects.empty']) empty = dict['projects.empty'];
 gridAll.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:var(--text-muted); padding:32px;">'+empty+'</div>';
 }
 gridAll.classList.add('visible');
 var countEl = document.getElementById('filter-count');
 if(countEl) {
 var label = currentLang === 'en' ? ' projects' : ' projetos';
 countEl.textContent = list.length + label;
 }
 }
 };

 // FILTER BAR
 document.querySelectorAll('.filter-btn').forEach(function(btn){
 btn.addEventListener('click', function(){
 document.querySelectorAll('.filter-btn').forEach(function(b){ b.classList.remove('active'); });
 btn.classList.add('active');
 window.renderProjects();
 // re-aplica traduções nos novos nós
 if (I18N && I18N[currentLang]) {
 var dict = I18N[currentLang];
 document.querySelectorAll('#project-grid-all [data-i18n], #project-grid [data-i18n]').forEach(function(el){
 var k = el.getAttribute('data-i18n');
 if (dict[k] !== undefined) el.innerHTML = dict[k];
 });
 }
 });
 });
 var searchInput = document.getElementById('project-search');
 if(searchInput){ searchInput.addEventListener('input', function(){ window.renderProjects(); }); }

 // DETAIL PAGE RENDER
 window.renderDetail = function(){
 var slugEl = document.querySelector('[data-slug]');
 if(!slugEl || !window.PROJECTS) return;
 var slug = slugEl.getAttribute('data-slug');
 var p = window.PROJECTS.find(function(x){ return x.slug===slug; });
 if(!p) return;
 var d = getLocalized(p);
 var dict = (I18N && I18N[currentLang]) || {};
 var setText = function(sel, val){ var el=document.querySelector(sel); if(el) el.innerHTML=val; };
 setText('[data-detail="title"]', d.titulo||'');
 setText('[data-detail="resumo"]', d.resumo||'');
 setText('[data-detail="descricao"]', d.descricao||'');
 setText('[data-detail="papel"]', d.papel||'');
 var techWrap = document.querySelector('[data-detail="techs"]');
 if(techWrap) techWrap.innerHTML = (d.techs||[]).map(function(t){ var c=getTechTagClass(t); return '<span class="tech-tag '+c+'">'+t+'</span>'; }).join('');
 var resWrap = document.querySelector('[data-detail="resultados"]');
 if(resWrap) resWrap.innerHTML = (d.resultados||[]).map(function(r){ return '<li>'+r+'</li>'; }).join('');
 var linksWrap = document.querySelector('[data-detail="links"]');
  if(linksWrap){
    var links = [];
    var labelDemo = dict['projects.detail.demo'] || 'Acesse já aqui!';
    var primaryHref = p.links.demo || p.links.github || "";
    if(primaryHref){
      links.push('<a href="'+primaryHref+'" target="_blank" rel="noopener" class="btn btn-primary" style="padding:14px 28px; font-size:0.84rem; font-weight:800; letter-spacing:0.04em; box-shadow:0 10px 28px rgba(6,182,212,0.22); min-width:220px; justify-content:center;">↗ '+labelDemo+'</a>');
      if(p.links.github && p.links.demo && p.links.github !== p.links.demo){
        var labelGH = dict['projects.detail.github'] || 'Ver no GitHub';
        links.push('<a href="'+p.links.github+'" target="_blank" rel="noopener" class="btn btn-outline" style="padding:12px 22px; font-size:0.78rem;">↗ '+labelGH+'</a>');
      }
    }
    if(p.private) {
      var privateLabel = dict['projects.detail.private'] || 'Código privado, protegido';
      links.push('<span class="tag red" style="display:inline-flex; align-items:center; padding:6px 14px; background:rgba(168,85,247,0.12); border:1px solid rgba(168,85,247,0.22); border-radius:999px; color:#d8b4fe; font-size:0.72rem; font-weight:700;">🔒 '+privateLabel+'</span>');
    }
    if(!primaryHref && !p.private) {
      var consulta = currentLang==='en' ? 'Links on request' : 'Links sob consulta';
      links.push('<span style="color:var(--text-muted); font-size:0.82rem;">'+consulta+'</span>');
    }
    linksWrap.innerHTML = links.join(' ');
  }
  var catEl = document.querySelector('[data-detail="category"]');
 if(catEl) catEl.textContent = catLabel(p.category);
 var iconEl = document.querySelector('[data-detail="icon"]');
 if(iconEl){ iconEl.textContent = p.icon; iconEl.style.color = p.color; }
 };

 // INIT: load i18n then apply
 loadI18n(function(){
 currentLang = detectLang();
 document.documentElement.lang = currentLang === 'en' ? 'en' : 'pt-BR';
 document.querySelectorAll('.lang-option').forEach(function(b){
 b.classList.toggle('active', b.getAttribute('data-lang')===currentLang);
 });
 bindLangButtons();
 applyTranslations();
 });

})();
