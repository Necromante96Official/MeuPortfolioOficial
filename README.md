# Portfólio — Lucas Tavares (Necromante96Official) — 2026

> **Vibe Coding • Ciano #0891b2 • Bilíngue PT-BR / EN-US • 11 cases • 30 partículas**

[🇧🇷 PT-BR](README.md) | [🇺🇸 EN-US](README.en.md) • **Demo:** `https://SEU_USUARIO.github.io/Portifolio/` • **Contato:** `lukastavaresmattos96@gmail.com`

Hub premium estático para recrutadores, clientes e parceiros de tradução. Reúne em um só lugar todos os trabalhos: sites, sistemas, mods, ferramentas e mods de tradução não oficiais autorizados pelas desenvolvedoras, com cases completos, stack real e links verificados.

### Sobre o site

O site é um portfólio currículo vivo. Cada projeto tem página dedicada com contexto, solução, resultados, tecnologias e galeria. Navegação instantânea PT-BR/EN, filtros por categoria, busca, timeline UFRGS, análise Top 5 linguagens e seção Vibe Coding explicando o método de criação com IA. Foco total na experiência do visitante, não no arquivo.

### Features

- **Bilíngue instantâneo** PT-BR e EN-US com `localStorage`, `flag-icons` e fallback `file://`
- **11 cases completos** (FisioHub UFRGS, NexusTranslator Stardew/Hytale/Unreal/Unity, RPG Skills Mod 18,5 mil acessos, Forbidden Legacy Patch Manager, Controle Financeiro PWA, Traduções, Ancient Souls, DeckBuildingSystem, OBS Overlay, MO2Tools, RPG Skills Site)
- **Filtros e busca** por categoria (`Web & PWA`, `Game Dev`, `Tradução`, `Ferramentas`, `Institucional`) + contagem dinâmica
- **Vibe Coding** em destaque no hero, Sobre e Competências
- **Top 5 linguagens** por presença e por volume (Java 89k, JS 85k, TS 75k) com barras CSS
- **PWA-ready** e `.nojekyll` para GitHub Pages sem build

### Stack & Design System

**Stack:** Vanilla HTML5 + CSS3 + JavaScript (IIFE), sem framework, sem npm. Deploy direto no GitHub Pages.

**Design System:** `css/tokens.css` ciano escuro `#0891b2` (primary), `#06b6d4` (light), `#155e75` (dim), `R` `8,145,178`, gradientes `#fff → #cffafe → #0891b2`, sombras `--shadow-card-hover`, tipografia `Rajdhani` + `Exo 2`, `Inter` fallback, `flag-icons 7.3.2`.

**Efeitos:** `css/effects.css` 30 partículas `.gp` (g/w/d/c/b, 15-35s), `bg-grid` 42px, `hero-aurora` blur 18px, `section-glow-line` shimmer, `global-vignette`. `js/components.js` expande 12→30 dinamicamente e injeta grid/aurora.

### Estrutura Modular

```
index.html                     # único HTML na raiz — GitHub Pages (hero + destaques)
paginas/
  sobre.html                   # trajetória 2023-2026 + filosofia + Vibe Coding
  competencias.html            # stack + todas as linguagens + Top 5 + Como trabalho
  contato.html                 # FormSubmit lukastavaresmattos96@gmail.com + mailto
projetos-site/
  index.html                   # grade completa com filtros e busca
  {slug}.html                  # 11 cases (fisiohub, nexustranslator, ...)
partials/
  nav.html | footer.html       # componentes HTML puros (injetáveis via components.js)
css/
  tokens.css, base.css, components.css, layout.css, animations.css, effects.css, portfolio.css, mobile.css, polish.css
js/
  main.js                      # nav scroll + reveal IntersectionObserver + i18n base paginas/projetos-site + getLocalized + renderProjects/Detail
  components.js                # loader nav/footer + partículas + grid/aurora + focus polish
  projects-data.js             # fonte única 11 projetos (pt/en, Unreal/Unity, mods não oficiais autorizados, year 2024-2026)
  i18n-data.js                 # fallback file:// (180 chaves)
i18n/
  pt-BR.json | en.json         # 180 chaves, sem " — "
assets/img/logo.svg | favicon.svg  # ciano #0891b2
modelo-base/RPGSKILLS-SITE/    # referência RPG Skills v2.7 (não publicado)
projetos/                      # 10 pastas fonte 845 MB (gitignored)
```

### Como editar o site

**Textos (PT-BR/EN):** edite `i18n/pt-BR.json` e `en.json` (180 chaves). Exemplos: `hero.vibe`, `about.vibe.p1`, `skills.vibe.desc`, `about.timeline.*`, `competencias.languages.*`. Após editar, regenere o fallback:
```bash
python -c "import json,pathlib; p=pathlib.Path('i18n/pt-BR.json'); e=pathlib.Path('i18n/en.json'); import json as j; pt=j.load(open(p,encoding='utf-8')); en=j.load(open(e,encoding='utf-8')); open('js/i18n-data.js','w',encoding='utf-8').write('window.I18N_FALLBACK = '+j.dumps({'pt-BR':pt,'en':en},ensure_ascii=False,indent=2)+';')"
```

**Projetos:** edite `js/projects-data.js` — `slug`, `category` (`web|game|translation|tool|institucional`), `pt/en` (`titulo`, `resumo`, `descricao`, `papel`, `techs`, `resultados`), `links: {github, demo}`, `private`, `year` (`2024-2026` ativos, `2023-2024` arquivados). Thumb em `assets/img/{slug}.webp`.

**Cores:** `css/tokens.css` `--gold: #0891b2` (ciano), `--gold-light: #06b6d4`, `--gold-dim: #155e75`, `--gold-rgb: 8,145,178`. Troca propaga via `var(--gold)` e `rgba(8,145,178`.

**Vibe Coding:** chaves `hero.vibe`, `about.vibe.title/p1/p2`, `skills.vibe.title/desc/callout`, `skills.how.step2.title/desc` já prontas. Edite nos JSONs, não no HTML.

**Galeria:** substitua `<div class="placeholder">` em `projetos-site/{slug}.html` por `<img src="../assets/img/{slug}.webp">`.

### Desenvolvimento local

```bash
python -m http.server 8000
# http://localhost:8000 — navegue PT-BR/EN, filtros, cases, Vibe Coding
```

Sem build, sem dependências.

### Deploy — GitHub Pages

1. `git add -A && git commit -m "feat: ..." && git push origin master`
2. GitHub → Settings → Pages → Source: `Deploy from a branch` → `master` → `/ (root)` → Save
3. `.nojekyll` na raiz garante que `css/`, `js/`, `assets/` sejam servidos
4. (Opcional) Custom domain em Pages → `CNAME`

Demo em `https://SEU_USUARIO.github.io/Portifolio/` após push (troque `SEU_USUARIO`).

### Roadmap 2026

- [ ] Fotos reais WebP e vídeos curtos nos cases
- [ ] CV PDF bilíngue gerado a partir de `paginas/sobre.html`
- [ ] Lighthouse 95+ e OG images por case

### Licença & Créditos

Design system herdado de `modelo-base/RPGSKILLS-SITE` (RPG Skills v2.7) e adaptado para ciano premium. Conteúdo e código do portfólio © Lucas Tavares.

Links oficiais: [GitHub](https://github.com/Necromante96Official) • [Nexus Mods](https://www.nexusmods.com/profile/Necromante96Official) • [CurseForge Hytale](https://www.curseforge.com/hytale/mods/maior-pack-de-traducoes-pt-br) • [Forsaken Realms mods/5](https://www.nexusmods.com/forsakenrealmsvahrinscall/mods/5) • [Elementallis Steam 1304280](https://store.steampowered.com/app/1304280/Elementallis/) • [Dragon Quest I & II Steam 2893570](https://store.steampowered.com/app/2893570/DRAGON_QUEST_I__II_HD2D_Remake/)

> Foco é o site: este README apenas documenta como mantê-lo profissional e atualizado.
