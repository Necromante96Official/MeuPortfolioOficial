// ========================================================================
// Servidor local para ver o site (npm run servir → http://localhost:5500).
// Sem dependências. Os módulos ES do site não abrem pelo file://, por
// isso este servidor existe. Endereço inexistente devolve o 404.html,
// como no GitHub Pages.
// ========================================================================

import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = resolve(fileURLToPath(new URL("..", import.meta.url)));
const PORTA = Number(process.env.PORT) || 5500;

const TIPOS = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

createServer(async (req, res) => {
  const caminho = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let arquivo = normalize(join(RAIZ, caminho.endsWith("/") ? `${caminho}index.html` : caminho));

  // Nada fora da pasta do site
  if (!arquivo.startsWith(RAIZ)) {
    res.writeHead(403).end();
    return;
  }

  try {
    const corpo = await readFile(arquivo);
    res.writeHead(200, { "Content-Type": TIPOS[extname(arquivo)] ?? "application/octet-stream", "Cache-Control": "no-store" });
    res.end(corpo);
  } catch {
    arquivo = join(RAIZ, "404.html");
    res.writeHead(404, { "Content-Type": TIPOS[".html"] });
    res.end(await readFile(arquivo));
  }
}).listen(PORTA, () => console.log(`Portfólio em http://localhost:${PORTA}`));
