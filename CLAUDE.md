# Portfólio Oficial — Lucas Tavares (Necromante96Official)

Site estático, sem build, publicado pelo GitHub Pages a partir da `master`:
https://necromante96official.github.io/MeuPortfolioOficial/

## Regras

- **Português do Brasil** no código, nos comentários e nas mensagens. O site é bilíngue (PT-BR e EN): todo texto novo entra nos dois idiomas.
- **Commit e envio só quando o Lucas pedir**, e sempre pela skill `revisar-e-enviar` (`.claude/skills/`): ler o diff inteiro, corrigir, conferir, ver rodando e só então gravar o "Update N" com as notas.
- **Modularidade:** arquivo de código com no máximo 500 linhas (`npm run conferir` barra). Passou, divide pelas partes que ele já tem. O comum mora uma vez só.
- **Dados não ficam soltos no HTML:** projetos, números, links e textos vivem em `js/dados/` e `js/textos/`. Cores, fontes e espaços só em `css/tokens.css`.
- **Número só com fonte:** pasta do projeto em `D:\`, o repositório no GitHub ou a página do Steam Workshop. Atualizou números, atualize `perfil.atualizadoEm`.

## Estrutura

```text
index.html projetos.html projeto.html sobre.html contato.html
                  as páginas: só a casca (head + <body data-pagina>); o conteúdo é montado pelo JS
404.html          leva os endereços antigos (paginas/, projetos-site/) para os novos
css/
  tokens.css      cores, fontes, espaços, raios
  base.css        reset, tipografia, fundo
  layout.css      contêiner, topo, rodapé, seções
  componentes.css botões, selos, marca, etiquetas, painel, números, formulário
  cartoes.css     cartão de projeto, grade, busca e filtros
  secoes.css      blocos usados em mais de uma página (texto, passos, chamada)
  paginas/        o CSS de uma página só (inicio, projeto, sobre, contato)
js/
  principal.js    entrada: monta topo, página e rodapé; redesenha ao trocar o idioma
  nucleo/         idioma (t, tr, troca) e dom (esc, lista, revelar ao rolar)
  layout/         topo e rodapé
  componentes/    ícones, cartão de projeto, peças de seção
  paginas/        uma por página (render + montar)
  dados/          perfil (links, números, "Agora"), competências, projetos/ (um arquivo por família)
  textos/         pt.js e en.js: os textos da interface, mesmas chaves
assets/           logo e ícones das marcas
ferramentas/      servir.mjs (servidor local) e conferir.mjs (a conferência)
```

## Como adicionar um projeto

1. Escreva o projeto no arquivo da família em `js/dados/projetos/` (o formato está no topo de `index.js`), com `pt` e `en`.
2. Coloque o `slug` na lista `ordem` de `js/dados/projetos/index.js`.
3. `npm run conferir` e veja a página `projeto.html?p=<slug>` no navegador.

## Como conferir

```bash
npm run conferir
npm run servir
```

`servir` abre em http://localhost:5500 (é o `portfolio` do `.claude/launch.json`). Os módulos ES não abrem pelo `file://`.
