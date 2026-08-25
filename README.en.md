# Portfolio — Lucas Tavares (Necromante96Official) — 2026

> **Vibe Coding • Cyan #0891b2 • Bilingual PT-BR / EN-US • 11 case studies • 30 particles**

[🇺🇸 EN-US](README.en.md) | [🇧🇷 PT-BR](README.md) • **Demo:** `https://YOUR_USER.github.io/Portfolio/` • **Contact:** `lukastavaresmattos96@gmail.com`

Premium static hub for recruiters, clients and translation partners. Centralizes all work in one place: websites, systems, mods, tools and authorized unofficial PT-BR translation mods, each with full case study, real stack and verified links.

### About the site

The site is a living resume. Every project has a dedicated page with context, solution, results, stack and gallery. Instant PT-BR/EN language switch, category filters, search, UFRGS timeline, Top 5 languages analysis and Vibe Coding section explaining the AI-driven creation method. Focus is entirely on the visitor experience, not on this file.

### Features

- **Instant bilingual** PT-BR and EN-US with `localStorage`, `flag-icons` and `file://` fallback
- **11 complete cases** (FisioHub UFRGS, NexusTranslator Stardew/Hytale/Unreal/Unity, RPG Skills Mod 18.5k views, Forbidden Legacy Patch Manager, Finance Control PWA, Translations, Ancient Souls, DeckBuildingSystem, OBS Overlay, MO2Tools, RPG Skills Site)
- **Filters and search** by category (`Web & PWA`, `Game Dev`, `Translation`, `Tools`, `Institutional`) + dynamic count
- **Vibe Coding** featured in hero, About and Skills
- **Top 5 languages** by presence and by volume (Java 89k, JS 85k, TS 75k) with CSS bars
- **PWA-ready** and `.nojekyll` for GitHub Pages with zero build

### Stack & Design System

**Stack:** Vanilla HTML5 + CSS3 + JavaScript (IIFE), no framework, no npm. Direct deploy to GitHub Pages.

**Design System:** `css/tokens.css` dark cyan `#0891b2` (primary), `#06b6d4` (light), `#155e75` (dim), `R` `8,145,178`, gradients `#fff → #cffafe → #0891b2`, shadows `--shadow-card-hover`, typography `Rajdhani` + `Exo 2`, `Inter` fallback, `flag-icons 7.3.2`.

**Effects:** `css/effects.css` 30 particles `.gp` (g/w/d/c/b, 15-35s), `bg-grid` 42px, `hero-aurora` blur 18px, `section-glow-line` shimmer, `global-vignette`. `js/components.js` expands 12→30 dynamically and injects grid/aurora.

### Modular Structure

```
index.html                     # single HTML at root — GitHub Pages (hero + highlights)
paginas/
  sobre.html                   # journey 2023-2026 + philosophy + Vibe Coding
  competencias.html            # stack + all languages + Top 5 + How I work
  contato.html                 # FormSubmit lukastavaresmattos96@gmail.com + mailto
projetos-site/
  index.html                   # full grid with filters and search
  {slug}.html                  # 11 cases (fisiohub, nexustranslator, ...)
partials/
  nav.html | footer.html       # pure HTML components (injectable via js/components.js)
css/
  tokens.css, base.css, components.css, layout.css, animations.css, effects.css, portfolio.css, mobile.css, polish.css
js/
  main.js                      # nav scroll + reveal IntersectionObserver + i18n base paginas/projetos-site + getLocalized + renderProjects/Detail
  components.js                # modular nav/footer loader + particles 12→30 + bg-grid/aurora + focus polish
  projects-data.js             # single source 11 projects (pt/en, Unreal/Unity, authorized unofficial mods, year 2024-2026)
  i18n-data.js                 # file:// fallback (180 keys)
i18n/
  pt-BR.json | en.json         # 180 keys, no " — "
assets/img/logo.svg | favicon.svg  # cyan #0891b2
modelo-base/RPGSKILLS-SITE/    # reference RPG Skills v2.7 (not published)
projetos/                      # 10 source folders 845 MB (gitignored)
```

### How to edit the site

**Texts (PT-BR/EN):** edit `i18n/pt-BR.json` and `en.json` (180 keys). Examples: `hero.vibe`, `about.vibe.p1`, `skills.vibe.desc`, `about.timeline.*`, `competencias.languages.*`. After editing, regenerate fallback:
```bash
python -c "import json,pathlib; p=pathlib.Path('i18n/pt-BR.json'); e=pathlib.Path('i18n/en.json'); import json as j; pt=j.load(open(p,encoding='utf-8')); en=j.load(open(e,encoding='utf-8')); open('js/i18n-data.js','w',encoding='utf-8').write('window.I18N_FALLBACK = '+j.dumps({'pt-BR':pt,'en':en},ensure_ascii=False,indent=2)+';')"
```

**Projects:** edit `js/projects-data.js` — `slug`, `category` (`web|game|translation|tool|institucional`), `pt/en` (`titulo`, `resumo`, `descricao`, `papel`, `techs`, `resultados`), `links: {github, demo}`, `private`, `year` (`2024-2026` active, `2023-2024` archived). Thumb at `assets/img/{slug}.webp`.

**Colors:** `css/tokens.css` `--gold: #0891b2` (cyan), `--gold-light: #06b6d4`, `--gold-dim: #155e75`, `--gold-rgb: 8,145,178`. Change propagates via `var(--gold)` and `rgba(8,145,178`.

**Vibe Coding:** keys `hero.vibe`, `about.vibe.title/p1/p2`, `skills.vibe.title/desc/callout`, `skills.how.step2.title/desc` ready. Edit in JSONs, not in HTML.

**Gallery:** replace `<div class="placeholder">` in `projetos-site/{slug}.html` with `<img src="../assets/img/{slug}.webp">`.

### Local development

```bash
python -m http.server 8000
# http://localhost:8000 — browse PT-BR/EN, filters, cases, Vibe Coding
```

No build, no dependencies.

### Deploy — GitHub Pages

1. `git add -A && git commit -m "feat: ..." && git push origin master`
2. GitHub → Settings → Pages → Source: `Deploy from a branch` → `master` → `/ (root)` → Save
3. `.nojekyll` at root ensures `css/`, `js/`, `assets/` are served
4. (Optional) Custom domain at Pages → `CNAME`

Demo at `https://YOUR_USER.github.io/Portfolio/` after push (replace `YOUR_USER`).

### Roadmap 2026

- [ ] Real WebP photos and short videos in cases
- [ ] Bilingual PDF CV generated from `paginas/sobre.html`
- [ ] Lighthouse 95+ and OG images per case

### License & Credits

Design system inherited from `modelo-base/RPGSKILLS-SITE` (RPG Skills v2.7) and adapted to premium cyan. Content and portfolio code © Lucas Tavares.

Official links: [GitHub](https://github.com/Necromante96Official) • [Nexus Mods](https://www.nexusmods.com/profile/Necromante96Official) • [CurseForge Hytale](https://www.curseforge.com/hytale/mods/maior-pack-de-traducoes-pt-br) • [Forsaken Realms mods/5](https://www.nexusmods.com/forsakenrealmsvahrinscall/mods/5) • [Elementallis Steam 1304280](https://store.steampowered.com/app/1304280/Elementallis/) • [Dragon Quest I & II Steam 2893570](https://store.steampowered.com/app/2893570/DRAGON_QUEST_I__II_HD2D_Remake/)

> Focus is the site: this README only documents how to keep it professional and up to date.
