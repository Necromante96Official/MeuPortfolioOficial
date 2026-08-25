/* Portfolio — Main JS (corrigido) — nav + reveal + i18n + filter + detail */
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
      // para projetos-site/index a contagem real é filtrada — atualiza lá dentro de renderProjects também
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

  // PROJECT RENDERING
  function projectCardHTML(p){
    var d = getLocalized(p);
    var techs = (d.techs||[]).slice(0,3).map(function(t){
      var lc = t.toLowerCase();
      var cls = lc.includes('python')||lc.includes('ts')||lc.includes('js')?'gold': lc.includes('c#')||lc.includes('java')?'blue':'';
      return '<span class="tech-tag '+cls+'">'+t+'</span>';
    }).join('');
    var dict = (I18N && I18N[currentLang]) || {};
    var privateLabel = dict['projects.detail.private'] || 'Privado';
    var privateBadge = p.private ? '<span class="project-card-private">'+privateLabel+'</span>' : '';
    var href = 'projetos-site/'+p.slug+'.html';
    // corrigir href relativo conforme localização
    try {
      var path = location.pathname;
      if (path.indexOf('/projetos-site/') !== -1) href = p.slug+'.html';
      else if (path.indexOf('/paginas/') !== -1) href = '../projetos-site/'+p.slug+'.html';
      else if (document.querySelector('#project-grid-all')) href = 'projetos-site/'+p.slug+'.html';
      else if (document.querySelector('#project-grid')) href = 'projetos-site/'+p.slug+'.html';
    } catch(e) {}
    return '<a href="'+href+'" class="project-card" data-category="'+p.category+'" data-title="'+(d.titulo||'').toLowerCase()+'">'
      + '<div class="project-card-thumb">'
      + '  <div class="project-card-thumb-placeholder" style="color:'+p.color+'">'+p.icon+'</div>'
      + '  <span class="project-card-badge dot">'+catLabel(p.category)+'</span>'
      + privateBadge
      + '</div>'
      + '<div class="project-card-body">'
      + '  <div class="project-card-title">'+(d.titulo||'')+' <small>'+p.year+'</small></div>'
      + '  <div class="project-card-desc">'+(d.resumo||'')+'</div>'
      + '  <div class="project-card-techs">'+techs+'</div>'
      + '  <div class="project-card-foot"><span><strong>'+ (d.techs? d.techs.length : 0) +' techs</strong> • '+p.year+'</span><span class="arrow">→</span></div>'
      + '</div>'
      + '</a>';
  }

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
    if(techWrap) techWrap.innerHTML = (d.techs||[]).map(function(t){ return '<span class="tech-tag gold">'+t+'</span>'; }).join('');
    var resWrap = document.querySelector('[data-detail="resultados"]');
    if(resWrap) resWrap.innerHTML = (d.resultados||[]).map(function(r){ return '<li>'+r+'</li>'; }).join('');
    var linksWrap = document.querySelector('[data-detail="links"]');
    if(linksWrap){
      var links = [];
      var labelGH = dict['projects.detail.github'] || 'Ver no GitHub';
      var labelDemo = dict['projects.detail.demo'] || 'Ver demo / download';
      if(p.links.github) links.push('<a href="'+p.links.github+'" target="_blank" rel="noopener" class="btn btn-outline" style="padding:10px 18px; font-size:0.74rem;">↗ '+labelGH+'</a>');
      if(p.links.demo) links.push('<a href="'+p.links.demo+'" target="_blank" rel="noopener" class="btn btn-primary" style="padding:10px 18px; font-size:0.74rem;">↗ '+labelDemo+'</a>');
      if(p.private) {
        var privateLabel = dict['projects.detail.private'] || 'Código privado — protegido';
        links.push('<span class="tag red">🔒 '+privateLabel+'</span>');
      }
      if(!p.links.github && !p.links.demo && !p.private) {
        var consulta = currentLang==='en' ? 'Links on request' : 'Links sob consulta';
        links.push('<span style="color:var(--text-muted); font-size:0.82rem;">'+consulta+'</span>');
      }
      linksWrap.innerHTML = links.join(' ');
    }
    var catEl = document.querySelector('[data-detail="category"]');
    if(catEl) catEl.textContent = catLabel(p.category);
    var yearEl = document.querySelector('[data-detail="year"]');
    if(yearEl) yearEl.textContent = p.year;
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
