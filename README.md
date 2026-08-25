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
css/tokens.css → polish.css + effects.css (leve, 12 partículas) + portfolio.css + mobile.css
js/main.js                  # nav scroll + reveal + i18n (base paginas/projetos-site) + filter + detail render (getLocalized)
js/components.js            # loader modular nav/footer + focus polish
js/projects-data.js         # fonte única de verdade (11 projetos, pt/en, Unreal/Unity, mods não oficiais autorizados)
js/i18n-data.js             # fallback file:// (171 chaves)
i18n/pt-BR.json | en.json   # 171 chaves, sem " — "
assets/img/logo.svg | favicon.svg
modelo-base/                # referência intacta (não deployar se quiser, mas mantido)
projetos/                   # 10 pastas fonte 845 MB (gitignored, não vai para Pages)
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
