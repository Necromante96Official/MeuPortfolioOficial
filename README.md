# Portfólio — Lucas Tavares (Necromante96Official)

Portfólio minimalista premium bilíngue (PT-BR / EN), 100% estático para **GitHub Pages**. Inspirado no `modelo-base/RPGSKILLS-SITE` — tokens → polish, `reveal` IntersectionObserver, `lang-switcher` com `flag-icons`.

**Stack:** Vanilla HTML/CSS/JS, `GitHub Pages` + `.nojekyll`, sem build.

## Estrutura (modular)
```
index.html                  # único HTML na raiz (hub hero + destaques) — GitHub Pages
paginas/sobre.html          # trajetória + filosofia
paginas/competencias.html   # stack + todas as linguagens + top 5
paginas/contato.html        # FormSubmit para lukastavaresmattos96@gmail.com
projetos-site/index.html    # grade completa com filtros + busca
projetos-site/{slug}.html   # 11 cases (fisiohub, nexustranslator, rpg-skills-mod, forbidden-legacy-patchs, controle-financeiro, traducoes-jogos-mods, ancient-souls, deck-building-system, obs-overlay, mo2tools, rpg-skills-site)
partials/nav.html | footer.html  # componentes modulares (injetáveis via js/components.js)
css/tokens.css → polish.css + effects.css (30 partículas + bg-grid + aurora) + portfolio.css + mobile.css  # ciano #0891b2
js/main.js                  # nav scroll + reveal + i18n (base paginas/projetos-site) + filter + detail render (getLocalized) + 2026
js/components.js            # loader modular nav/footer + partículas 12→30 + bg-grid/aurora + focus polish
js/projects-data.js         # fonte única de verdade (11 projetos, pt/en, Unreal/Unity, mods não oficiais autorizados, year 2024-2026)
js/i18n-data.js             # fallback file:// (180 chaves, Vibe Coding, 2026)
i18n/pt-BR.json | en.json   # 180 chaves, sem " — ", Vibe Coding
assets/img/logo.svg | favicon.svg
modelo-base/                # referência intacta (não deployar se quiser, mas mantido)
projetos/                   # 10 pastas fonte 845 MB (gitignored, não vai para Pages)
```

## Como editar
- **Texto bilíngue:** edite `i18n/*.json` (rebuild `js/i18n-data.js` via `python -c "import json..."` ou manualmente). 180 chaves PT/EN, sem " — ".
- **Vibe Coding:** edite `i18n/*.json` `hero.vibe`, `about.vibe.*`, `skills.vibe.*` e `paginas/sobre.html` + `competencias.html` callouts.
- **Projetos:** edite `js/projects-data.js` — `slug`, `category` (`web|game|translation|tool|institucional`), `pt/en` (`titulo`, `resumo`, `descricao`, `papel`, `techs`, `resultados`), `links`, `private`, `year` (2024-2026 ativos, 2023-2024 arquivados).
- **Cores:** `css/tokens.css` `--gold #0891b2` (ciano escuro), `--gold-light #06b6d4`, `--dark #09080a`. Todo `rgba(212,136,28` → `rgba(8,145,178`.
- **Efeitos:** `css/effects.css` — 30 partículas `.gp` + `bg-grid` (42px) + `hero-aurora` blur 18px + `section-glow-line` shimmer; `js/components.js` expande de 12→30 dinamicamente.
- **Galeria:** substitua placeholders em `projetos-site/{slug}.html` + adicione webp em `assets/img/`.

## Rodar local
```bash
python -m http.server 8000
# abrir http://localhost:8000
```

## Deploy GitHub Pages
1. `git add .` + commit + `git push origin master`
2. GitHub → Settings → Pages → Source: `Deploy from a branch` → `master` → `/ (root)` → Save
3. `.nojekyll` já na raiz impede processamento Jekyll.
4. Opcional: Settings → Pages → Custom domain.

## Créditos
Design system herdado de `modelo-base/RPGSKILLS-SITE` (RPG Skills v2.7). Adaptação premium minimalista para portfólio.
Links: [GitHub](https://github.com/Necromante96Official) · [Nexus](https://www.nexusmods.com/profile/Necromante96Official) · [CurseForge](https://www.curseforge.com/hytale/mods/maior-pack-de-traducoes-pt-br) · [Forsaken](https://www.nexusmods.com/forsakenrealmsvahrinscall/mods/5) · [Elementallis](https://store.steampowered.com/app/1304280/Elementallis/) · [DQ I&II](https://store.steampowered.com/app/2893570/DRAGON_QUEST_I__II_HD2D_Remake/)
