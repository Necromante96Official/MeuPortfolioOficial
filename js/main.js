/* Portfolio — Main JS (enxuto) — nav + reveal + i18n + filter + modal */
(function () {
  'use strict';

  var STORAGE_KEY = 'portfolio-lang';
  var currentLang = 'pt-BR';
  var I18N = null;

  // Load JSON via fetch (fallback to inline if file://)
  function loadI18n(cb) {
    try {
      fetch('i18n/pt-BR.json').then(function(r){ return r.json(); }).then(function(pt){
        fetch('i18n/en.json').then(function(r){ return r.json(); }).then(function(en){
          I18N = { 'pt-BR': pt, 'en': en };
          cb();
        }).catch(function(){ I18N = { 'pt-BR': pt }; cb(); });
      }).catch(function(){
        // fallback: use window.I18N if provided
        if (window.I18N_FALLBACK) { I18N = window.I18N_FALLBACK; cb(); }
        else cb();
      });
    } catch(e) {
      if (window.I18N_FALLBACK) I18N = window.I18N_FALLBACK;
      cb();
    }
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
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var k = el.getAttribute('data-i18n');
      if (dict[k] !== undefined) el.innerHTML = dict[k];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
      var k = el.getAttribute('data-i18n-placeholder');
      if (dict[k] !== undefined) el.placeholder = dict[k];
    });
    // re-render projects if needed
    if (window.renderProjects) window.renderProjects();
    if (window.renderDetail) window.renderDetail();
  }

  function setLang(lang) {
    if (!I18N || !I18N[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    document.querySelectorAll('.lang-option').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-lang')===lang);
    });
    // also toggle html lang attr for SEO
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
    toggle.addEventListener('click', function(){ mobile.classList.add('open'); document.body.style.overflow='hidden'; });
    var closeM = function(){ mobile.classList.remove('open'); document.body.style.overflow=''; };
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

  // lang switcher bind (delegated after load too)
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
    var lang = currentLang;
    var d = p[lang] || p['pt-BR'];
    var techs = (d.techs||[]).slice(0,3).map(function(t){
      var cls = t.toLowerCase().includes('python')||t.toLowerCase().includes('ts')||t.toLowerCase().includes('js')?'gold': t.toLowerCase().includes('c#')||t.toLowerCase().includes('java')?'blue':'';
      return '<span class="tech-tag '+cls+'">'+t+'</span>';
    }).join('');
    var privateBadge = p.private ? '<span class="project-card-private" data-i18n="projects.detail.private">Privado</span>' : '';
    // thumb: if image fails, placeholder icon remains via onerror? We'll just use placeholder div if no thumb file
    return '<a href="projetos-site/'+p.slug+'.html" class="project-card" data-category="'+p.category+'" data-title="'+d.titulo.toLowerCase()+'">'
      + '<div class="project-card-thumb">'
      + '  <div class="project-card-thumb-placeholder" style="color:'+p.color+'">'+p.icon+'</div>'
      + '  <span class="project-card-badge dot">'+p.category+'</span>'
      + privateBadge
      + '</div>'
      + '<div class="project-card-body">'
      + '  <div class="project-card-title">'+d.titulo+' <small>'+p.year+'</small></div>'
      + '  <div class="project-card-desc">'+d.resumo+'</div>'
      + '  <div class="project-card-techs">'+techs+'</div>'
      + '  <div class="project-card-foot"><span><strong>'+ (d.techs? d.techs.length : 0) +' techs</strong> • '+p.year+'</span><span class="arrow">→</span></div>'
      + '</div>'
      + '</a>';
  }

  window.renderProjects = function(){
    var grid = document.getElementById('project-grid');
    var gridAll = document.getElementById('project-grid-all');
    if(!window.PROJECTS) return;
    // featured
    if(grid){
      var featured = window.PROJECTS.filter(function(p){ return p.destaque; });
      grid.innerHTML = featured.map(projectCardHTML).join('');
    }
    if(gridAll){
      var q = (document.getElementById('project-search')||{}).value || '';
      q = q.toLowerCase().trim();
      var active = document.querySelector('.filter-btn.active');
      var cat = active ? active.getAttribute('data-filter') : 'all';
      var list = window.PROJECTS.filter(function(p){
        var d = p[currentLang]||p['pt-BR'];
        var matchCat = cat==='all' || p.category===cat;
        var matchQ = !q || d.titulo.toLowerCase().includes(q) || d.resumo.toLowerCase().includes(q) || d.techs.join(' ').toLowerCase().includes(q);
        return matchCat && matchQ;
      });
      gridAll.innerHTML = list.length ? list.map(projectCardHTML).join('') : '<div style="grid-column:1/-1; text-align:center; color:var(--text-muted); padding:32px;">Nenhum projeto encontrado.</div>';
      // re-bind filter count
      var countEl = document.getElementById('filter-count');
      if(countEl) countEl.textContent = list.length + ' projetos';
    }
  };

  // FILTER BAR
  document.querySelectorAll('.filter-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('.filter-btn').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      window.renderProjects();
    });
  });
  var searchInput = document.getElementById('project-search');
  if(searchInput){ searchInput.addEventListener('input', window.renderProjects); }

  // DETAIL PAGE RENDER (if on projeto page, slug via body data-slug)
  window.renderDetail = function(){
    var slugEl = document.querySelector('[data-slug]');
    if(!slugEl || !window.PROJECTS) return;
    var slug = slugEl.getAttribute('data-slug');
    var p = window.PROJECTS.find(function(x){ return x.slug===slug; });
    if(!p) return;
    var d = p[currentLang]||p['pt-BR'];
    // fill helpers
    var setText = function(sel, val){ var el=document.querySelector(sel); if(el) el.innerHTML=val; };
    var setAttr = function(sel, attr, val){ var el=document.querySelector(sel); if(el) el.setAttribute(attr,val); };
    setText('[data-detail=\"title\"]', d.titulo);
    setText('[data-detail=\"resumo\"]', d.resumo);
    setText('[data-detail=\"descricao\"]', d.descricao);
    setText('[data-detail=\"papel\"]', d.papel);
    var techWrap = document.querySelector('[data-detail=\"techs\"]');
    if(techWrap) techWrap.innerHTML = d.techs.map(function(t){ return '<span class="tech-tag gold">'+t+'</span>'; }).join('');
    var resWrap = document.querySelector('[data-detail=\"resultados\"]');
    if(resWrap) resWrap.innerHTML = d.resultados.map(function(r){ return '<li>'+r+'</li>'; }).join('');
    // links
    var linksWrap = document.querySelector('[data-detail=\"links\"]');
    if(linksWrap){
      var links = [];
      if(p.links.github) links.push('<a href="'+p.links.github+'" target="_blank" rel="noopener" class="btn btn-outline" style="padding:10px 18px; font-size:0.74rem;">↗ GitHub</a>');
      if(p.links.demo) links.push('<a href="'+p.links.demo+'" target="_blank" rel="noopener" class="btn btn-primary" style="padding:10px 18px; font-size:0.74rem;">↗ Demo / Loja</a>');
      if(p.private) links.push('<span class="tag red">🔒 Privado — código protegido</span>');
      if(!p.links.github && !p.links.demo && !p.private) links.push('<span style="color:var(--text-muted); font-size:0.82rem;">Links sob consulta</span>');
      linksWrap.innerHTML = links.join(' ');
    }
    var catEl = document.querySelector('[data-detail=\"category\"]');
    if(catEl) catEl.textContent = p.category;
    var yearEl = document.querySelector('[data-detail=\"year\"]');
    if(yearEl) yearEl.textContent = p.year;
    var iconEl = document.querySelector('[data-detail=\"icon\"]');
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
    // also watch for dynamically added lang buttons
    // initial renders
    if(window.renderProjects) window.renderProjects();
    if(window.renderDetail) window.renderDetail();
  });

  // fallback inline I18N if fetch fails (file://)
  window.I18N_FALLBACK = null;
})();
