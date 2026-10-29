---
name: revisar-e-enviar
description: Revisão geral obrigatória e envio ao GitHub do portfólio (MeuPortfolioOficial). Use SEMPRE que o Lucas pedir commit, push, enviar, subir ou mandar para o GitHub: lê o diff inteiro atrás de bugs, erros, código desnecessário e lentidão, corrige, roda a conferência e o site no navegador, registra o que não resolveu e só então grava o Update com as notas e envia. Trazida do Ancient Souls e adaptada para um site estático.
---

# Revisar e enviar

Regra que veio do Ancient Souls: **antes de todo envio, a revisão final, sem exceção.** A conferência passando não é a revisão.

## 1. Ler tudo o que mudou

- `git status` e `git diff`: **todo** arquivo, inclusive os novos (leia-os inteiros). Arquivo solto, de teste ou de outra sessão não entra: pergunte se não souber de quem é.
- Procure, arquivo por arquivo:
  - **bugs e erros:** caso sem tratamento (projeto inexistente, campo faltando em um idioma), ouvinte duplicado ao redesenhar, link quebrado, texto sem `esc()` vindo dos dados;
  - **código desnecessário:** morto, repetido (o comum mora uma vez só), comentário velho, import sobrando, texto de interface que ninguém usa;
  - **lentidão:** trabalho caro a cada rolagem ou tecla, HTML refeito sem precisar, imagem pesada, fonte ou script externo a mais;
  - **organização:** arquivo de código com mais de 500 linhas (divide pelas partes que ele já tem), número ou cor solta fora de `js/dados/` e `css/tokens.css`.
- Dados novos de projeto: confira na fonte (pasta do projeto em `D:\`, repositório no GitHub, página do Steam Workshop). Número que não dá para confirmar não entra.

## 2. Conferir e ver rodando

```bash
npm run conferir
```

- Abre o site com o servidor do `.claude/launch.json` (`preview_start` → `portfolio`, porta 5500) e veja o que mudou: desktop **e** celular (375 px), PT **e** EN, console sem erro.
- Mudou um endereço? Os antigos precisam continuar levando ao lugar certo (`404.html`).
- Fim de linha em LF: `git ls-files --eol -m -o --exclude-standard | grep w/crlf` não mostra nada.

## 3. Contar ao Lucas

Antes de gravar: o que a revisão achou, o que foi corrigido e o que ficou de fora (com o motivo). Nunca envie escondendo.

## 4. Gravar e enviar

1. `git fetch origin master`; se estiver atrás, `git pull`; se houver commit gravado e não enviado, `git push` primeiro.
2. O número: `N = git rev-list --count origin/master` + 1 (o histórico usa "Update N").
3. A mensagem num arquivo do scratchpad (Write, UTF-8 sem BOM, LF):

   ```text
   Update N - TÍTULO EM MAIÚSCULO

   ## Novidades
   - O que quem visita o site passa a ver.

   ## Correções
   ## Por dentro
   ## Conferido

   Co-Authored-By: <modelo da sessão> <noreply@anthropic.com>
   ```

   Só as seções com item; uma linha `- ` por item, em português, do ponto de vista de quem visita.
4. `git add -A`, `git commit -F <arquivo>`, `git push origin master`.
5. Depois: o GitHub Pages publica sozinho a partir da `master`. Confira em `gh run list --limit 3` (o "pages build and deployment") e abra https://necromante96official.github.io/MeuPortfolioOficial/ para ver no ar.
