// ========================================================================
// Proposta Andy Machado Hair Studio (página de teste, fora do portfólio).
// - Senha na entrada: só esconde a página de quem cair no link por acaso.
//   Não é segurança de verdade (o conteúdo está no HTML público).
// - Desenha o logo e os ícones onde o HTML pede (data-logo / data-icone).
// - Botão de copiar a bio e checklist que lembra o que foi marcado.
// ========================================================================

// SHA-256 de "123": a senha não fica escrita em texto puro no código.
const HASH_DA_SENHA = "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3";
const CHAVE_SESSAO = "andy-proposta-liberada";
const CHAVE_CHECKLIST = "andy-proposta-checklist";

// Leitura e gravação no navegador podem falhar (aba anônima com bloqueio, etc.).
const guardar = (armazem, chave, valor) => { try { armazem.setItem(chave, valor); } catch { /* segue sem lembrar */ } };
const ler = (armazem, chave) => { try { return armazem.getItem(chave); } catch { return null; } };

// ------------------------------------------------------------------------
// Logo (monograma AM) e ícones dos destaques
// ------------------------------------------------------------------------

const CORES_LOGO = {
  ouro: { traco: "url(#gradiente-ouro)", letra: "url(#gradiente-ouro)", texto: "#d4af69" },
  escuro: { traco: "#0c0a07", letra: "#0c0a07", texto: "#0c0a07" },
  creme: { traco: "#f4ede1", letra: "#f4ede1", texto: "#f4ede1" },
};

function logo(variante = "ouro", comTexto = true) {
  const c = CORES_LOGO[variante] ?? CORES_LOGO.ouro;
  const texto = comTexto
    ? `<text x="50" y="76" text-anchor="middle" font-family="Manrope, sans-serif" font-size="6.2" font-weight="700" letter-spacing="2.4" fill="${c.texto}">HAIR STUDIO</text>`
    : "";
  return `<svg viewBox="0 0 100 100" role="img" aria-label="Monograma AM, Andy Machado Hair Studio">
    <circle cx="50" cy="50" r="47" fill="none" stroke="${c.traco}" stroke-width="1.6"/>
    <circle cx="50" cy="50" r="42.5" fill="none" stroke="${c.traco}" stroke-width="0.5"/>
    <path d="M50 14 l2.4 4.2 -2.4 4.2 -2.4 -4.2z" fill="${c.letra}"/>
    <text x="50" y="${comTexto ? 64 : 66}" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-size="38" font-weight="600" fill="${c.letra}">AM</text>
    ${texto}
  </svg>`;
}

const ICONES = {
  agenda: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4M8 14h3"/>',
  tesoura: '<circle cx="6" cy="17.5" r="2.8"/><circle cx="6" cy="6.5" r="2.8"/><path d="M8.3 8.2 20 18M8.3 15.8 20 6M13 12h.01"/>',
  antes: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16M6.5 15l2-3 2 3M14.5 9.5h3"/>',
  estrela: '<path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z"/>',
  local: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
  gota: '<path d="M12 3.5s6 6.4 6 10.7a6 6 0 0 1-12 0c0-4.3 6-10.7 6-10.7z"/><path d="M9.5 15a2.6 2.6 0 0 0 2.5 2.4"/>',
  rosto: '<ellipse cx="12" cy="12" rx="6.5" ry="8.5"/><path d="M9.5 10.5h.01M14.5 10.5h.01M10 15.2c1.2.9 2.8.9 4 0"/>',
  valores: '<path d="M3.5 12.5 11.5 4.5h8v8l-8 8z"/><circle cx="15.5" cy="8.5" r="1.4"/>',
};

const icone = (nome) => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONES[nome] ?? ""}</svg>`;

function desenharMarcas() {
  for (const el of document.querySelectorAll("[data-logo]")) {
    el.innerHTML = logo(el.dataset.logo || "ouro", el.dataset.semTexto === undefined);
  }
  for (const el of document.querySelectorAll("[data-icone]")) el.innerHTML = icone(el.dataset.icone);
}

// ------------------------------------------------------------------------
// Senha
// ------------------------------------------------------------------------

async function sha256(texto) {
  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(texto));
  return [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function liberar() {
  document.getElementById("portao").remove();
  document.getElementById("conteudo").hidden = false;
}

function montarPortao() {
  if (ler(sessionStorage, CHAVE_SESSAO) === "sim") return liberar();
  const form = document.getElementById("form-senha");
  const campo = form.querySelector("input");
  const aviso = form.querySelector(".erro");
  campo.focus();
  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    if ((await sha256(campo.value.trim())) === HASH_DA_SENHA) {
      guardar(sessionStorage, CHAVE_SESSAO, "sim");
      liberar();
    } else {
      aviso.textContent = "Senha incorreta.";
      campo.select();
    }
  });
}

// ------------------------------------------------------------------------
// Copiar a bio
// ------------------------------------------------------------------------

function montarCopiar() {
  for (const botao of document.querySelectorAll("[data-copiar]")) {
    const alvo = document.getElementById(botao.dataset.copiar);
    const texto = alvo.querySelector("[data-texto]").textContent.trim();
    const contagem = document.querySelector(`[data-contagem="${botao.dataset.copiar}"]`);
    if (contagem) contagem.textContent = `${[...texto].length} de 150 caracteres permitidos na bio`;
    botao.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(texto);
        botao.textContent = "Copiado ✓";
      } catch {
        botao.textContent = "Selecione e copie";
      }
      setTimeout(() => (botao.textContent = "Copiar"), 2000);
    });
  }
}

// ------------------------------------------------------------------------
// Checklist do plano
// ------------------------------------------------------------------------

function montarChecklist() {
  const caixas = [...document.querySelectorAll(".check input")];
  const barra = document.querySelector(".progresso i");
  const resumo = document.getElementById("resumo-progresso");
  let marcados = [];
  try { marcados = JSON.parse(ler(localStorage, CHAVE_CHECKLIST) ?? "[]"); } catch { marcados = []; }

  const atualizar = () => {
    const feitos = caixas.filter((c) => c.checked).length;
    barra.style.width = `${(feitos / caixas.length) * 100}%`;
    resumo.textContent = `${feitos} de ${caixas.length} tarefas feitas`;
  };

  caixas.forEach((c, i) => {
    c.checked = marcados.includes(i);
    c.addEventListener("change", () => {
      const lista = caixas.flatMap((x, j) => (x.checked ? [j] : []));
      guardar(localStorage, CHAVE_CHECKLIST, JSON.stringify(lista));
      atualizar();
    });
  });
  atualizar();
}

desenharMarcas();
montarPortao();
montarCopiar();
montarChecklist();
