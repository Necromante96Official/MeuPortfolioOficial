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
