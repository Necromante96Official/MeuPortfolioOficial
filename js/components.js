/* Modular components loader — nav/footer via template injection (fallback for duplicated HTML) */
(function(){
  'use strict';
  // Mapping for base paths
  function baseForPage(){
    var p = location.pathname;
    if (p.indexOf('/paginas/') !== -1) return '../';
    if (p.indexOf('/projetos-site/') !== -1) return '../';
    return '';
  }
  // Expose for other scripts if needed
  window.SITE_BASE = baseForPage();

  // Optional: if pages use <div id="site-nav"></div> and <div id="site-footer"></div>, load from partials
  // For now, we keep duplicated HTML but provide helper to update links if needed
  // This file also handles polishing: ensure all external links have rel noopener, and fix spacing

  document.addEventListener('DOMContentLoaded', function(){
    // Fix spacing: remove double spaces in text nodes (light)
    // Ensure all nav toggles have aria-expanded
    var toggle = document.querySelector('.mobile-toggle');
    if (toggle && !toggle.hasAttribute('aria-expanded')) toggle.setAttribute('aria-expanded','false');
    
    // Ensure lang switcher reflects currentLang if main.js hasn't yet
    try {
      var saved = localStorage.getItem('portfolio-lang');
      if (saved) {
        document.querySelectorAll('.lang-option').forEach(function(b){
          b.classList.toggle('active', b.getAttribute('data-lang')===saved);
        });
      }
    } catch(e){}

    // Add focus polish class if missing
    document.querySelectorAll('.project-card, .btn, .filter-btn').forEach(function(el){
      el.addEventListener('focus', function(){ el.classList.add('focus-visible'); });
      el.addEventListener('blur', function(){ el.classList.remove('focus-visible'); });
    });

    // Expand particles to 50 + 40 stars — mais animações a partir de Explore
    try {
      document.querySelectorAll('.global-particles').forEach(function(container){
        var colors = ['g','w','d','c','b','g','c','w','d','b'];
        while (container.children.length < 50) {
          var d = document.createElement('div');
          var idx = container.children.length;
          d.className = 'gp ' + colors[idx % colors.length];
          container.appendChild(d);
        }
      });
      // Ensure global-stars has 40
      document.querySelectorAll('.global-stars').forEach(function(container){
        while (container.children.length < 40) {
          var d = document.createElement('div');
          var idx = container.children.length;
          var cls = ['white','cyan','dim'][idx%3];
          d.className = 'gs ' + cls;
          container.appendChild(d);
        }
      });
      // Add bg-grid if missing
      if (!document.querySelector('.bg-grid')) {
        var grid = document.createElement('div');
        grid.className = 'bg-grid';
        document.body.insertBefore(grid, document.body.firstChild);
      }
      // Add hero-aurora if hero exists and missing
      var hero = document.querySelector('.hero');
      if (hero && !hero.querySelector('.hero-aurora')) {
        var aur = document.createElement('div');
        aur.className = 'hero-aurora';
        hero.insertBefore(aur, hero.firstChild);
      }
      // Ensure third orb
      if (hero && !hero.querySelector('.hero-orb--3')) {
        var orb3 = document.createElement('div');
        orb3.className = 'hero-orb hero-orb--3';
        orb3.style.cssText = 'width:360px; height:360px; top:18%; left:4%; background: radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%); animation: orbFloat 9s ease-in-out infinite;';
        hero.appendChild(orb3);
      }
      // Add local particles inside large sections/modals for visibility over opaque backgrounds
      document.querySelectorAll('.detail-section, .section, .page-header, .explore-section, .skill-card, .info-card').forEach(function(section){
        if (section.querySelector('.local-particles')) return;
        if (section.classList.contains('detail-section') || section.classList.contains('section') || section.classList.contains('page-header') || section.classList.contains('explore-section')) {
          var lp = document.createElement('div');
          lp.className = 'local-particles';
          for (var i=0;i<5;i++) {
            var d = document.createElement('div');
            d.className = 'lp';
            lp.appendChild(d);
          }
          section.insertBefore(lp, section.firstChild);
          section.style.position = 'relative';
          section.style.overflow = 'hidden';
        }
      });
      // Nebulosas a partir de Explore para baixo — tirando do titulo principal
      try {
        var nebulaSections = document.querySelectorAll('.explore-section, .section:not(.hero)');
        nebulaSections.forEach(function(sec, sIdx){
          if (sec.querySelector('.nebula-wrap')) return;
          if (sec.classList.contains('hero')) return;
          var wrap = document.createElement('div');
          wrap.className = 'nebula-wrap';
          var n1 = document.createElement('div');
          n1.className = 'section-nebula ' + (sIdx % 2 === 0 ? 'nebula-cyan' : 'nebula-blue');
          n1.style.cssText = (sIdx % 2 === 0 ? 'width:520px; height:420px; top:-80px; left:-120px;' : 'width:480px; height:380px; top:10%; right:-100px;') + ' animation-delay:' + (sIdx*0.7) + 's;';
          var n2 = document.createElement('div');
          n2.className = 'section-nebula ' + (sIdx % 2 === 0 ? 'nebula-blue' : 'nebula-teal');
          n2.style.cssText = (sIdx % 2 === 0 ? 'width:460px; height:360px; bottom:-60px; right:-80px;' : 'width:400px; height:320px; bottom:-40px; left:-60px;') + ' animation-delay:' + (sIdx*0.9+2) + 's;';
          wrap.appendChild(n1);
          wrap.appendChild(n2);
          sec.insertBefore(wrap, sec.firstChild);
          if (getComputedStyle(sec).position === 'static') sec.style.position = 'relative';
          sec.style.overflow = 'hidden';
        });
      } catch(e2){}
    } catch(e){}
  });

  // Helper to load partials via fetch (used only if placeholder exists)
  function loadPartial(url, targetId){
    var el = document.getElementById(targetId);
    if (!el) return;
    var base = baseForPage();
    fetch(base + url).then(function(r){ if(!r.ok) throw new Error(r.status); return r.text(); }).then(function(html){
      // Replace placeholders {{HOME}} etc with correct base
      var b = baseForPage();
      var map = {
        '{{HOME}}': b + 'index.html',
        '{{PROJETOS}}': b + 'projetos-site/index.html',
        '{{SOBRE}}': b + 'paginas/sobre.html',
        '{{COMPETENCIAS}}': b + 'paginas/competencias.html',
        '{{CONTATO}}': b + 'paginas/contato.html',
        '{{FISIOHUB}}': b + 'projetos-site/fisiohub.html',
        '{{RPGMOD}}': b + 'projetos-site/rpg-skills-mod.html',
        '{{TRADUCOES}}': b + 'projetos-site/traducoes-jogos-mods.html'
      };
      // Fix for root where base is '' but paginas links should be paginas/...
      if (b === '') {
        map['{{HOME}}'] = 'index.html';
        map['{{PROJETOS}}'] = 'projetos-site/index.html';
        map['{{SOBRE}}'] = 'paginas/sobre.html';
        map['{{COMPETENCIAS}}'] = 'paginas/competencias.html';
        map['{{CONTATO}}'] = 'paginas/contato.html';
        map['{{FISIOHUB}}'] = 'projetos-site/fisiohub.html';
        map['{{RPGMOD}}'] = 'projetos-site/rpg-skills-mod.html';
        map['{{TRADUCOES}}'] = 'projetos-site/traducoes-jogos-mods.html';
      }
      for (var k in map) html = html.split(k).join(map[k]);
      el.innerHTML = html;
      // Re-bind mobile nav after injection
      try {
        var toggle2 = el.querySelector('.mobile-toggle');
        var mobile = el.querySelector('.mobile-nav');
        var closeBtn = el.querySelector('.mobile-nav-close');
        if (toggle2 && mobile) {
          toggle2.addEventListener('click', function(){ mobile.classList.add('open'); document.body.style.overflow='hidden'; toggle2.setAttribute('aria-expanded','true'); });
          var closeM = function(){ mobile.classList.remove('open'); document.body.style.overflow=''; toggle2.setAttribute('aria-expanded','false'); };
          if (closeBtn) closeBtn.addEventListener('click', closeM);
          mobile.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeM); });
        }
      } catch(e){}
    }).catch(function(){ /* silent fallback to duplicated HTML */ });
  }

  // If placeholders exist, load partials (future modular pages can use this)
  document.addEventListener('DOMContentLoaded', function(){
    loadPartial('partials/nav.html', 'site-nav');
    loadPartial('partials/footer.html', 'site-footer');
  });

})();
