/* Modular components loader + lightweight visual polish */
(function(){
  'use strict';

  function baseForPage(){
    var p = location.pathname;
    if (p.indexOf('/paginas/') !== -1) return '../';
    if (p.indexOf('/projetos-site/') !== -1) return '../';
    return '';
  }
  window.SITE_BASE = baseForPage();

  function prefersReducedMotion(){
    try {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {
      return false;
    }
  }

  function isNarrowViewport(){
    try {
      return window.matchMedia('(max-width: 768px)').matches;
    } catch (e) {
      return window.innerWidth <= 768;
    }
  }

  function trimChildren(container, max){
    if (!container) return;
    while (container.children.length > max) {
      container.removeChild(container.lastElementChild);
    }
  }

  function flattenNestedParticles(container){
    if (!container) return;
    var nested = container.querySelectorAll('.gp .gp');
    if (!nested.length) return;
    nested.forEach(function(el){
      container.appendChild(el);
    });
  }

  function disableHeavyEffects(){
    document.querySelectorAll('.global-particles, .global-stars, .bg-grid, .local-particles, .nebula-wrap, .hero-aurora').forEach(function(el){
      el.remove();
    });
    document.documentElement.classList.add('fx-lite');
  }

  document.addEventListener('DOMContentLoaded', function(){
    var toggle = document.querySelector('.mobile-toggle');
    if (toggle && !toggle.hasAttribute('aria-expanded')) {
      toggle.setAttribute('aria-expanded', 'false');
    }

    try {
      var saved = localStorage.getItem('portfolio-lang');
      if (saved) {
        document.querySelectorAll('.lang-option').forEach(function(b){
          b.classList.toggle('active', b.getAttribute('data-lang') === saved);
        });
      }
    } catch (e) {}

    document.querySelectorAll('.project-card, .btn, .filter-btn').forEach(function(el){
      el.addEventListener('focus', function(){ el.classList.add('focus-visible'); });
      el.addEventListener('blur', function(){ el.classList.remove('focus-visible'); });
    });

    // Cap / disable decorative FX — main lag source was 50+ infinite animations + nebulas
    try {
      if (prefersReducedMotion() || isNarrowViewport()) {
        disableHeavyEffects();
      } else {
        document.querySelectorAll('.global-particles').forEach(function(container){
          flattenNestedParticles(container);
          trimChildren(container, 12);
        });
        document.querySelectorAll('.global-stars').forEach(function(container){
          trimChildren(container, 12);
        });
        document.querySelectorAll('.local-particles, .nebula-wrap').forEach(function(el){
          el.remove();
        });
        if (!document.querySelector('.bg-grid')) {
          var grid = document.createElement('div');
          grid.className = 'bg-grid';
          document.body.insertBefore(grid, document.body.firstChild);
        }
      }
    } catch (e) {}
  });

  function loadPartial(url, targetId){
    var el = document.getElementById(targetId);
    if (!el) return;
    var base = baseForPage();
    fetch(base + url).then(function(r){
      if (!r.ok) throw new Error(r.status);
      return r.text();
    }).then(function(html){
      var b = baseForPage();
      var map = {
        '{{HOME}}': b + 'index.html',
        '{{PROJETOS}}': b + 'projetos-site/index.html',
        '{{SOBRE}}': b + 'paginas/sobre.html',
        '{{COMPETENCIAS}}': b + 'paginas/competencias.html',
        '{{CONTATO}}': b + 'paginas/contato.html',
        '{{FISIOHUB}}': b + 'projetos-site/fisiohub.html',
        '{{RPGMOD}}': b + 'projetos-site/rpg-skills-mod.html',
        '{{TRADUCOES}}': b + 'projetos-site/traducoes-jogos-mods.html',
        '{{ASSET_BASE}}': b
      };
      for (var k in map) html = html.split(k).join(map[k]);
      el.innerHTML = html;
      try {
        var toggle2 = el.querySelector('.mobile-toggle');
        var mobile = el.querySelector('.mobile-nav');
        var closeBtn = el.querySelector('.mobile-nav-close');
        if (toggle2 && mobile) {
          toggle2.addEventListener('click', function(){
            mobile.classList.add('open');
            document.body.style.overflow = 'hidden';
            toggle2.setAttribute('aria-expanded', 'true');
          });
          var closeM = function(){
            mobile.classList.remove('open');
            document.body.style.overflow = '';
            toggle2.setAttribute('aria-expanded', 'false');
          };
          if (closeBtn) closeBtn.addEventListener('click', closeM);
          mobile.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeM); });
          document.addEventListener('keydown', function(e){
            if (e.key === 'Escape' && mobile.classList.contains('open')) closeM();
          });
        }
        // Rebind language buttons injected via partials
        if (typeof window.bindLangButtons === 'function') window.bindLangButtons();
      } catch (e) {}
    }).catch(function(){ /* silent fallback */ });
  }

  document.addEventListener('DOMContentLoaded', function(){
    loadPartial('partials/nav.html', 'site-nav');
    loadPartial('partials/footer.html', 'site-footer');
  });

})();
