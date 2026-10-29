// ========================================================================
// Contato: e-mail com botão de copiar, formulário que abre o aplicativo
// de e-mail (o site é estático, sem servidor) e as redes.
// ========================================================================

import { esc, lista, $ } from "../nucleo/dom.js";
import { t, tr } from "../nucleo/idioma.js";
import { icone } from "../componentes/icones.js";
import { cabecalhoDePagina } from "../componentes/secoes.js";
import { perfil, redes } from "../dados/perfil.js";

export const pagina = {
  titulo: () => t("contato.titulo"),
  render,
  montar,
};

function render() {
  return `
    ${cabecalhoDePagina("contato.kicker", "contato.cabecalho", "contato.texto", `<p class="pilula pilula--ok revelar"><span class="pilula__ponto"></span>${esc(t("contato.formatos"))}</p>`)}
    <section class="secao secao--sem-topo">
      <div class="container contato">
        <form class="painel formulario revelar" id="formulario" novalidate>
          <h2>${esc(t("contato.formTitulo"))}</h2>
          <p class="formulario__ajuda">${esc(t("contato.formTexto"))}</p>
          <div class="formulario__linha">
            <label class="campo"><span>${esc(t("contato.nome"))}</span><input name="nome" autocomplete="name" required></label>
            <label class="campo"><span>${esc(t("contato.email"))}</span><input name="email" type="email" autocomplete="email" required></label>
          </div>
          <label class="campo"><span>${esc(t("contato.mensagem"))}</span><textarea name="mensagem" rows="6" required></textarea></label>
          <div class="formulario__acoes">
            <button type="submit" class="botao botao--primario botao--g">${icone("email")}${esc(t("contato.enviar"))}</button>
            <p class="formulario__status" id="status" role="status"></p>
          </div>
        </form>

        <aside class="contato__lateral">
          <section class="painel revelar">
            <h2>${esc(t("contato.emailTitulo"))}</h2>
            <a class="contato__email" href="mailto:${esc(perfil.email)}">${esc(perfil.email)}</a>
            <button type="button" class="botao botao--contorno botao--p" id="copiar">${icone("copiar")}<span>${esc(t("contato.copiar"))}</span></button>
          </section>
          <section class="painel revelar">
            <h2>${esc(t("contato.canaisTitulo"))}</h2>
            <ul class="canais">
              ${lista(
                redes,
                (r) => `
                  <li><a href="${esc(r.url)}" target="_blank" rel="noopener" class="canal">
                    <img src="${esc(r.icone)}" alt="" width="20" height="20">
                    <span><strong>${esc(r.nome)}</strong><small>${esc(tr(r.usuario))}</small></span>
                    ${icone("externo", "icone icone--p")}
                  </a></li>`,
              )}
            </ul>
          </section>
        </aside>
      </div>
    </section>`;
}

function montar(raiz) {
  const form = $("#formulario", raiz);
  const status = $("#status", raiz);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dados = Object.fromEntries(new FormData(form));
    const nome = dados.nome.trim();
    const email = dados.email.trim();
    const mensagem = dados.mensagem.trim();

    if (!nome || !email || !mensagem) {
      status.textContent = t("contato.preencha");
      status.dataset.tipo = "erro";
      form.querySelector(":invalid")?.focus();
      return;
    }

    const assunto = `${t("contato.assunto")}: ${nome}`;
    const corpo = `${nome} <${email}>\n\n${mensagem}`;
    status.textContent = t("contato.abrindo");
    status.dataset.tipo = "ok";
    location.href = `mailto:${perfil.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
  });

  const botaoCopiar = $("#copiar", raiz);
  botaoCopiar.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(perfil.email);
      botaoCopiar.innerHTML = `${icone("ok")}<span>${esc(t("contato.copiado"))}</span>`;
      setTimeout(() => {
        botaoCopiar.innerHTML = `${icone("copiar")}<span>${esc(t("contato.copiar"))}</span>`;
      }, 2000);
    } catch {
      // Sem permissão de área de transferência: o link mailto continua ali
    }
  });
}
