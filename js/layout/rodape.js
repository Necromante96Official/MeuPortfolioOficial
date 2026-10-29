// ========================================================================
// Rodapé: marca, páginas, projetos em destaque e redes.
// ========================================================================

import { esc, lista } from "../nucleo/dom.js";
import { t, tr } from "../nucleo/idioma.js";
import { icone } from "../componentes/icones.js";
import { paginas } from "./topo.js";
import { redes, perfil } from "../dados/perfil.js";
import { projetosEmDestaque } from "../dados/projetos/index.js";

export function renderRodape() {
  const ano = new Date().getFullYear();

  return `
    <div class="container rodape__grade">
      <div class="rodape__marca">
        <a class="topo__marca" href="index.html">
          <img src="favicon.svg" alt="" width="32" height="32">
          <span><strong>Lucas Tavares</strong><small>Necromante96Official</small></span>
        </a>
        <p>${esc(t("rodape.texto"))}</p>
        <a class="rodape__email" href="mailto:${esc(perfil.email)}">${icone("email", "icone icone--p")}${esc(perfil.email)}</a>
      </div>
      <nav class="rodape__coluna" aria-label="${esc(t("rodape.paginas"))}">
        <h2>${esc(t("rodape.paginas"))}</h2>
        ${lista(paginas, (p) => `<a href="${p.href}">${esc(t(p.chave))}</a>`)}
      </nav>
      <nav class="rodape__coluna" aria-label="${esc(t("rodape.destaques"))}">
        <h2>${esc(t("rodape.destaques"))}</h2>
        ${lista(projetosEmDestaque().slice(0, 5), (p) => `<a href="projeto.html?p=${esc(p.slug)}">${esc(tr(p).titulo)}</a>`)}
      </nav>
      <nav class="rodape__coluna" aria-label="${esc(t("rodape.conectar"))}">
        <h2>${esc(t("rodape.conectar"))}</h2>
        ${lista(
          redes,
          (r) =>
            `<a href="${esc(r.url)}" target="_blank" rel="noopener"><img src="${esc(r.icone)}" alt="" width="16" height="16" loading="lazy">${esc(r.nome)}</a>`,
        )}
      </nav>
    </div>
    <div class="container rodape__base">
      <span>© ${ano} Lucas Tavares · Necromante96Official. ${esc(t("rodape.direitos"))}</span>
      <a href="#topo" class="rodape__topo">${esc(t("rodape.topo"))}${icone("topo", "icone icone--p")}</a>
    </div>`;
}
