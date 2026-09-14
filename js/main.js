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

 function safeGetLang() {
 try {
   var saved = localStorage.getItem(STORAGE_KEY);
   if (saved === 'en' || saved === 'pt-BR') return saved;
 } catch (e) {}
 return null;
 }

 function safeSetLang(lang) {
 try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
 }

 function detectLang() {
 var saved = safeGetLang();
 if (saved) return saved;
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
 safeSetLang(lang);
 document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
 document.querySelectorAll('.lang-option').forEach(function(b){
 b.classList.toggle('active', b.getAttribute('data-lang')===lang);
 });
 applyTranslations();
 }

 // NAV scroll (rAF para não disparar layout a cada pixel)
 var nav = document.querySelector('.nav');
 if (nav) {
 var scrollScheduled = false;
 var onScroll = function(){
   if (scrollScheduled) return;
   scrollScheduled = true;
   requestAnimationFrame(function(){
     scrollScheduled = false;
     nav.classList.toggle('scrolled', window.scrollY > 36);
   });
 };
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

  // PAGE TRANSITIONS, entrada e saida suaves
  (function(){
    var NAV_KEY = 'portfolio-page-nav';
    var EXIT_MS = 220;
    var ENTER_MS = 260;
    var reduced = false;
    try { reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch(e) {}

    var overlay = document.getElementById('page-transition');
    if(!overlay){
      overlay = document.createElement('div');
      overlay.id = 'page-transition';
      overlay.setAttribute('aria-hidden', 'true');
      document.body.appendChild(overlay);
    }

    var fromNav = false;
    try { fromNav = sessionStorage.getItem(NAV_KEY) === '1'; sessionStorage.removeItem(NAV_KEY); } catch(e) {}

    var finishEnter = function(){
      document.body.classList.remove('page-enter');
      document.body.classList.add('page-enter-done');
      overlay.classList.remove('active', 'arrive', 'leave');
      setTimeout(function(){ document.body.classList.remove('page-enter-done'); }, 50);
    };

    if (reduced) {
      finishEnter();
    } else if (fromNav) {
      // Chegada após navegação interna: overlay cobre e sai
      overlay.classList.add('arrive');
      document.body.classList.add('page-enter');
      requestAnimationFrame(function(){
        requestAnimationFrame(function(){
          overlay.classList.add('leave');
          document.body.classList.remove('page-enter');
          setTimeout(function(){
            overlay.classList.remove('arrive', 'leave');
            document.body.classList.add('page-enter-done');
            setTimeout(function(){ document.body.classList.remove('page-enter-done'); }, 50);
          }, ENTER_MS);
        });
      });
    } else {
      // Primeiro load / refresh: sem esconder o body (evita flash)
      document.body.classList.add('page-enter-done');
    }

    var navigating = false;
    var navigateTo = function(href){
      if (navigating) return;
      navigating = true;
      try { sessionStorage.setItem(NAV_KEY, '1'); } catch(e) {}
      if (reduced) {
        location.href = href;
        return;
      }
      document.body.classList.add('page-exit');
      overlay.classList.remove('arrive', 'leave');
      overlay.classList.add('active');
      setTimeout(function(){ location.href = href; }, EXIT_MS);
    };

    document.addEventListener('click', function(e){
      if (navigating) return;
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest('a');
      if(!a) return;
      var href = a.getAttribute('href');
      if(!href || a.hasAttribute('download') || a.target==='_blank') return;
      if(href.charAt(0)==='#') return;
      if(href.indexOf('http')===0 && href.indexOf(location.origin)!==0) return;
      if(href.indexOf('//')===0) return;
      if(href.indexOf('mailto:')===0 || href.indexOf('tel:')===0) return;
      var url;
      try{ url = new URL(href, location.href); } catch(err){ return; }
      if(url.pathname === location.pathname && url.search === location.search && url.hash) return;

      e.preventDefault();
      var isMobileNav = a.closest('.mobile-nav');
      if(isMobileNav) {
        // deixa o menu fechar um pouco antes da saída
        var mobileEl = document.querySelector('.mobile-nav');
        if (mobileEl) mobileEl.classList.remove('open');
        document.body.style.overflow = '';
        var toggleEl = document.querySelector('.mobile-toggle');
        if (toggleEl) toggleEl.setAttribute('aria-expanded', 'false');
        setTimeout(function(){ navigateTo(a.href); }, reduced ? 0 : 80);
        return;
      }
      navigateTo(a.href);
    }, true);

    window.addEventListener('pageshow', function(ev){
      navigating = false;
      if(ev.persisted){
        document.body.classList.remove('page-exit', 'page-enter');
        overlay.classList.remove('active', 'arrive', 'leave');
        document.body.style.opacity = '';
      }
    });
  })();

  // MOBILE NAV com transicao suave
  var toggle = document.querySelector('.mobile-toggle');
  var mobile = document.querySelector('.mobile-nav');
  var closeBtn = document.querySelector('.mobile-nav-close');
  if (toggle && mobile) {
  if (!toggle.hasAttribute('aria-label')) toggle.setAttribute('aria-label', 'Menu');
  if (closeBtn && !closeBtn.hasAttribute('aria-label')) closeBtn.setAttribute('aria-label', 'Fechar');

  var openM = function(){
    mobile.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
    if (closeBtn) {
      try { closeBtn.focus(); } catch(e) {}
    }
  };
  var closeM = function(){
    if (!mobile.classList.contains('open')) return;
    mobile.classList.remove('open');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
    try { toggle.focus(); } catch(e) {}
  };

  toggle.addEventListener('click', function(){
    if (mobile.classList.contains('open')) closeM();
    else openM();
  });
  if (closeBtn) closeBtn.addEventListener('click', closeM);
  mobile.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ closeM(); });
  });
  mobile.addEventListener('click', function(e){ if(e.target===mobile) closeM(); });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && mobile.classList.contains('open')) {
      e.preventDefault();
      closeM();
    }
  });
  }

 // smooth scroll
 document.querySelectorAll('a[href^="#"]').forEach(function(a){
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
 window.bindLangButtons = bindLangButtons;
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

// MODAL removido, cards agora linkam direto para a página completa
  function ensureProjectModal(){ return null; }
  function closeProjectModal(){}
  window.closeProjectModal = closeProjectModal;
  window.openProjectModal = function(slug){
    var hrefBase = (function(){ var path=location.pathname; if(path.indexOf('/projetos-site/')!==-1) return ''; if(path.indexOf('/paginas/')!==-1) return '../projetos-site/'; return 'projetos-site/'; })();
    window.location.href = hrefBase + slug + '.html';
  };
 function escapeHtml(str){
   return String(str == null ? '' : str)
     .replace(/&/g, '&amp;')
     .replace(/</g, '&lt;')
     .replace(/>/g, '&gt;')
     .replace(/"/g, '&quot;')
     .replace(/'/g, '&#39;');
 }

 function projectCardHTML(p){
    var d = getLocalized(p);
    var hrefBase = (function(){ var path=location.pathname; if(path.indexOf('/projetos-site/')!==-1) return ''; if(path.indexOf('/paginas/')!==-1) return '../projetos-site/'; return 'projetos-site/'; })();
    var href = hrefBase + p.slug + '.html';
    var title = escapeHtml(d.titulo || '');
    var viewPrefix = currentLang === 'en' ? 'View ' : 'Ver ';
    return '<a href="'+href+'" class="project-trigger" data-category="'+escapeHtml(p.category)+'" data-title="'+title.toLowerCase()+'" data-slug="'+escapeHtml(p.slug)+'" aria-label="'+viewPrefix+title+'">'
      + '  <span class="project-trigger-title">'+title+'</span>'
      + '  <span class="project-trigger-cat">'+escapeHtml(catLabel(p.category))+'</span>'
      + '  <span class="project-trigger-hint">'+(currentLang==='en' ? 'view details →' : 'ver detalhes →')+'</span>'
      + '</a>';
 }

 function emptyProjectsHTML(dict){
   var empty = currentLang === 'en' ? 'No projects found.' : 'Nenhum projeto encontrado.';
   if (dict['projects.empty']) empty = dict['projects.empty'];
   return '<div style="grid-column:1/-1; text-align:center; color:var(--text-muted); padding:32px;">'+empty+'</div>';
 }

 function getActiveFilter(){
   var active = document.querySelector('.filter-btn.active');
   return active ? active.getAttribute('data-filter') : 'all';
 }

 
  window.renderProjects = function(){
 var grid = document.getElementById('project-grid');
 var gridAll = document.getElementById('project-grid-all');
 if(!window.PROJECTS) return;
 var dict = (I18N && I18N[currentLang]) || {};
 var cat = getActiveFilter();
 if(grid){
 var featured = window.PROJECTS.filter(function(p){
   if (!p.destaque) return false;
   return cat === 'all' || p.category === cat;
 });
 grid.innerHTML = featured.length ? featured.map(projectCardHTML).join('') : emptyProjectsHTML(dict);
 grid.classList.add('visible');
 }
 if(gridAll){
 var q = (document.getElementById('project-search')||{}).value || '';
 q = q.toLowerCase().trim();
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
 gridAll.innerHTML = emptyProjectsHTML(dict);
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
 if(searchInput){
   var searchTimer = null;
   searchInput.addEventListener('input', function(){
     clearTimeout(searchTimer);
     searchTimer = setTimeout(function(){ window.renderProjects(); }, 120);
   });
 }

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
 setText('[data-detail="title"]', escapeHtml(d.titulo||''));
 setText('[data-detail="resumo"]', escapeHtml(d.resumo||''));
 setText('[data-detail="descricao"]', escapeHtml(d.descricao||'').replace(/\n/g, '<br>'));
 setText('[data-detail="papel"]', escapeHtml(d.papel||''));
 var techWrap = document.querySelector('[data-detail="techs"]');
 if(techWrap) techWrap.innerHTML = (d.techs||[]).map(function(t){ var c=getTechTagClass(t); return '<span class="tech-tag '+c+'">'+escapeHtml(t)+'</span>'; }).join('');
 var resWrap = document.querySelector('[data-detail="resultados"]');
 if(!resWrap && (d.resultados||[]).length){
   var techBlock = document.querySelector('[data-detail="techs"]');
   var host = techBlock ? techBlock.parentElement : document.querySelector('.sobre-card');
   if(host){
     var wrap = document.createElement('div');
     wrap.setAttribute('data-detail-results-wrap', '1');
     wrap.style.cssText = 'margin-top:22px; padding-top:18px; border-top:1px solid rgba(255,255,255,0.06); width:100%;';
     var h = document.createElement('h3');
     h.className = 'sobre-subtitle';
     h.setAttribute('data-detail-results-title', '1');
     h.style.cssText = 'color:#22d3ee; font-size:1.18rem; margin:0 auto 12px;';
     var ul = document.createElement('ul');
     ul.setAttribute('data-detail', 'resultados');
     ul.style.cssText = 'list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px; text-align:left; max-width:60ch; margin-inline:auto;';
     wrap.appendChild(h);
     wrap.appendChild(ul);
     host.appendChild(wrap);
     resWrap = ul;
   }
 }
 var resTitle = document.querySelector('[data-detail-results-title]');
 if(resTitle) resTitle.textContent = dict['projects.detail.results'] || (currentLang === 'en' ? 'Results' : 'Resultados');
 if(resWrap) resWrap.innerHTML = (d.resultados||[]).map(function(r){ return '<li style="padding:8px 12px; background:rgba(8,145,178,0.06); border:1px solid rgba(8,145,178,0.12); border-radius:10px; color:var(--text-body); font-size:0.88rem; line-height:1.5;">'+escapeHtml(r)+'</li>'; }).join('');
 var linksWrap = document.querySelector('[data-detail="links"]');
  if(linksWrap){
    var links = [];
    var labelDemo = dict['projects.detail.demo'] || 'Acesse já aqui!';
    var labelGH = dict['projects.detail.github'] || 'Ver no GitHub';
    var demoHref = (p.links && p.links.demo) || '';
    var githubHref = (p.links && p.links.github) || '';
    var docsHref = (p.links && p.links.docs) || '';
    var monoExternal = '<svg class="mono-icon mono-icon--sm" viewBox="0 0 24 24" aria-hidden="true" style="margin-right:6px;"><path d="M14 5h6v6"></path><path d="M10 14L20 4"></path><path d="M15 14v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h4"></path></svg>';
    var monoLock = '<svg class="mono-icon" viewBox="0 0 24 24" aria-hidden="true" style="width:18px;height:18px;color:#d8b4fe;"><rect x="4.5" y="11.5" width="15" height="9" rx="2"></rect><path d="M8.5 11.5V8a3.5 3.5 0 0 1 7 0v3.5"></path><circle cx="12" cy="15.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>';
    var btnPrimary = 'padding:14px 28px; font-size:0.84rem; font-weight:800; letter-spacing:0.04em; box-shadow:0 10px 28px rgba(6,182,212,0.22); min-width:220px; justify-content:center;';
    var btnOutline = 'padding:12px 22px; font-size:0.78rem;';
    function docsLabel(url){
      if (/curseforge/i.test(url)) return 'CurseForge';
      if (/discord/i.test(url)) return 'Discord';
      if (/nexusmods/i.test(url)) return 'Nexus Mods';
      return dict['projects.detail.docs'] || (currentLang === 'en' ? 'More info' : 'Saiba mais');
    }
    if (demoHref) {
      links.push('<a href="'+escapeHtml(demoHref)+'" target="_blank" rel="noopener" class="btn btn-primary" style="'+btnPrimary+'">'+monoExternal+labelDemo+'</a>');
      if (githubHref && githubHref !== demoHref) {
        links.push('<a href="'+escapeHtml(githubHref)+'" target="_blank" rel="noopener" class="btn btn-outline" style="'+btnOutline+'">'+monoExternal+labelGH+'</a>');
      }
    } else if (githubHref) {
      links.push('<a href="'+escapeHtml(githubHref)+'" target="_blank" rel="noopener" class="btn btn-primary" style="'+btnPrimary+'">'+monoExternal+labelGH+'</a>');
    }
    if (docsHref && docsHref !== demoHref && docsHref !== githubHref) {
      links.push('<a href="'+escapeHtml(docsHref)+'" target="_blank" rel="noopener" class="btn btn-outline" style="'+btnOutline+'">'+monoExternal+escapeHtml(docsLabel(docsHref))+'</a>');
    }
    if(p.private) {
      var privateLabel = dict['projects.detail.private'] || 'Código privado, protegido';
      var hasPublicCta = !!(demoHref || githubHref || docsHref);
      var privateHint = hasPublicCta
        ? (dict['projects.detail.privateHintPublic'] || (currentLang === 'en' ? 'Source code is private. Public showcase/links above.' : 'Código-fonte privado. Vitrine/links públicos acima.'))
        : (dict['projects.detail.privateHint'] || (currentLang === 'en' ? 'Private repository. Available upon authorized request.' : 'Repositório privado. Liberação mediante solicitação autorizada.'));
      links.push('<div class="private-highlight-animated" style="display:inline-flex; flex-direction:column; align-items:center; justify-content:center; gap:6px; padding:18px 24px; border-radius:14px; color:#e9d5ff; font-size:0.92rem; font-weight:800; letter-spacing:0.04em; box-shadow:0 12px 28px rgba(168,85,247,0.20); text-align:center; min-width:280px; max-width:360px;"><span style="display:grid;place-items:center;color:#d8b4fe;">'+monoLock+'</span><span style="display:block; text-align:center; width:100%; text-wrap:balance;">'+privateLabel+'</span><span style="font-size:0.70rem; font-weight:600; color:var(--text-dim); margin-top:4px; display:block; text-align:center; width:100%;">'+privateHint+'</span></div>');
    } else if (!demoHref && !githubHref && !docsHref) {
      var consultaLabel = dict['projects.detail.consulta'] || (currentLang === 'en' ? 'Links on request' : 'Links sob consulta');
      links.push('<div style="display:inline-flex; align-items:center; justify-content:center; padding:14px 22px; border-radius:12px; color:var(--text-muted); font-size:0.88rem; font-weight:600; border:1px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.03);">'+consultaLabel+'</div>');
    }
    linksWrap.innerHTML = links.join(' ');
  }
  
  // Esconde "Acesso direto e seguro" só quando privado E sem CTA público
  try {
    var acessoEl = document.querySelector('[data-detail="links"] + p');
    if(acessoEl && acessoEl.textContent.includes('Acesso direto e seguro')){
      var hasPublic = !!(p.links && (p.links.demo || p.links.github || p.links.docs));
      acessoEl.style.display = (p.private && !hasPublic) ? 'none' : '';
      acessoEl.style.textAlign = 'center';
    }
  } catch(e){}
  var catEl = document.querySelector('[data-detail="category"]');
 if(catEl) catEl.textContent = catLabel(p.category);
 
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
