# Portfólio — Lucas Tavares (Necromante96Official)

Portfólio minimalista premium bilíngue (PT-BR / EN), 100% estático para **GitHub Pages**. Inspirado no `modelo-base/RPGSKILLS-SITE` — tokens → polish, `reveal` IntersectionObserver, `lang-switcher` com `flag-icons`.

**Stack:** Vanilla HTML/CSS/JS, `GitHub Pages` + `.nojekyll`, sem build.

## Estrutura
```
index.html                  # hub (hero + projetos destaque + sobre + skills)
sobre.html | competencias.html | contato.html
projetos-site/index.html    # grade completa com filtros + busca
projetos-site/{slug}.html   # 11 cases (fisiohub, nexustranslator, rpg-skills-mod, forbidden-legacy-patchs, controle-financeiro, traducoes-jogos-mods, ancient-souls, deck-building-system, obs-overlay, mo2tools, rpg-skills-site)
css/tokens.css → polish.css + effects.css (leve, 12 partículas) + portfolio.css
js/main.js                  # nav scroll + reveal + i18n + filter + detail render
js/projects-data.js         # fonte única de verdade (11 projetos)
js/i18n-data.js             # fallback file://
i18n/pt-BR.json | en.json   # 96 chaves
assets/img/logo.svg | favicon.svg
modelo-base/                # referência intacta (não deployar se quiser, mas mantido)
projetos/                   # 10 pastas fonte (não publicadas, só referência)
```

## Como editar
- **Texto bilíngue:** edite `i18n/*.json` (rebuild `js/i18n-data.js` via `python tools` ou manualmente).
- **Projetos:** edite `js/projects-data.js` — `slug`, `category` (`web|game|translation|tool|institucional`), `pt/en` (`titulo`, `resumo`, `descricao`, `papel`, `techs`, `resultados`), `links`, `private`.
- **Cores:** `css/tokens.css` `--gold #d4881c`, `--dark #09080a`.
- **Efeitos:** `css/effects.css` — 12 partículas `.gp`, vignette; runas/círculos removidos.
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
