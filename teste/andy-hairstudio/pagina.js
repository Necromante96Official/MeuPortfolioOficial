// ========================================================================
// Proposta para o Instagram do Andy Machado (página de teste, fora do portfólio).
// - Senha na entrada: só esconde a página de quem cair no link por acaso.
//   Não é segurança de verdade (o conteúdo está no HTML público).
// - Desenha os ícones onde o HTML pede (data-icone).
// - Botões de copiar os textos prontos.
// - Checklists que lembram o que foi marcado: a rotina do dia zera a cada
//   dia; o plano de 30 dias fica guardado.
// ========================================================================

// SHA-256 de "123": a senha não fica escrita em texto puro no código.
const HASH_DA_SENHA = "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3";
const CHAVE_SESSAO = "andy-proposta-liberada";
const LIMITE_BIO = 150;

// Leitura e gravação no navegador podem falhar (aba anônima com bloqueio, etc.).
const guardar = (armazem, chave, valor) => { try { armazem.setItem(chave, valor); } catch { /* segue sem lembrar */ } };
const ler = (armazem, chave) => { try { return armazem.getItem(chave); } catch { return null; } };

// ------------------------------------------------------------------------
// Ícones de traço (viewBox 24)
// ------------------------------------------------------------------------

const ICONES = {
  agenda: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4M8 14h3"/>',
  tesoura: '<circle cx="6" cy="17.5" r="2.8"/><circle cx="6" cy="6.5" r="2.8"/><path d="M8.3 8.2 20 18M8.3 15.8 20 6"/>',
  antes: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16M6.5 15l2-3 2 3M14.5 9.5h3"/>',
  estrela: '<path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z"/>',
  local: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
  gota: '<path d="M12 3.5s6 6.4 6 10.7a6 6 0 0 1-12 0c0-4.3 6-10.7 6-10.7z"/>',
  valores: '<path d="M3.5 12.5 11.5 4.5h8v8l-8 8z"/><circle cx="15.5" cy="8.5" r="1.4"/>',
  video: '<rect x="3" y="5" width="13" height="14" rx="2"/><path d="m16 10 5-3v10l-5-3z"/>',
  conversa: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8M8 13h5"/>',
  enviar: '<path d="M21 3 10 14M21 3l-7 18-4-7-7-4z"/>',
  retorno: '<path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18 3v4h-4M6 21v-4h4"/>',
  presente: '<rect x="3.5" y="9" width="17" height="11" rx="1.5"/><path d="M3.5 13h17M12 9v11M12 9S9 4 7 5.5 9 9 12 9zM12 9s3-5 5-3.5S15 9 12 9z"/>',
  pessoas: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c.5-3.5 3-5.5 6-5.5s5.5 2 6 5.5"/><circle cx="17" cy="9" r="2.5"/><path d="M16.5 14.6c2.4.3 4 2 4.5 4.9"/>',
  megafone: '<path d="M3 10v4h4l8 5V5L7 10z"/><path d="M18 9a4 4 0 0 1 0 6"/>',
  relogio: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  grafico: '<path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6"/>',
  cadeado: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
};

function desenharIcones() {
  for (const el of document.querySelectorAll("[data-icone]")) {
    el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONES[el.dataset.icone] ?? ""}</svg>`;
  }
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
// Copiar textos prontos
// ------------------------------------------------------------------------

function montarCopiar() {
  for (const botao of document.querySelectorAll("[data-copiar]")) {
    const texto = document.getElementById(botao.dataset.copiar).querySelector("[data-texto]").textContent.trim();
    const contagem = document.querySelector(`[data-contagem="${botao.dataset.copiar}"]`);
    if (contagem) contagem.textContent = `${[...texto].length} de ${LIMITE_BIO} caracteres permitidos na bio`;
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
// Checklists: cada [data-checklist] tem a sua barra [data-progresso]
// ------------------------------------------------------------------------

function chaveDaLista(nome, zeraTodoDia) {
  if (!zeraTodoDia) return `andy-proposta-${nome}`;
  const hoje = new Date();
  return `andy-proposta-${nome}-${hoje.getFullYear()}-${hoje.getMonth() + 1}-${hoje.getDate()}`;
}

function montarChecklist(lista) {
  const nome = lista.dataset.checklist;
  const chave = chaveDaLista(nome, lista.hasAttribute("data-zera-todo-dia"));
  const caixas = [...lista.querySelectorAll(".check input")];
  const barra = document.querySelector(`[data-progresso="${nome}"]`);
  let marcados = [];
  try { marcados = JSON.parse(ler(localStorage, chave) ?? "[]"); } catch { marcados = []; }

  const atualizar = () => {
    if (!barra) return;
    const feitos = caixas.filter((c) => c.checked).length;
    barra.querySelector("i").style.width = `${(feitos / caixas.length) * 100}%`;
    barra.querySelector("span").textContent = `${feitos} de ${caixas.length}`;
  };

  caixas.forEach((c, i) => {
    c.checked = marcados.includes(i);
    c.addEventListener("change", () => {
      const indices = caixas.flatMap((x, j) => (x.checked ? [j] : []));
      guardar(localStorage, chave, JSON.stringify(indices));
      atualizar();
    });
  });
  atualizar();
}

desenharIcones();
montarPortao();
montarCopiar();
document.querySelectorAll("[data-checklist]").forEach(montarChecklist);
