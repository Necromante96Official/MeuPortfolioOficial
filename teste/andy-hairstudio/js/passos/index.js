// ========================================================================
// A trilha: as fases em ordem, cada uma com os seus passos.
//
// Formato de uma fase:
//   { id, icone, titulo, quando, tempo, resumo, passos: [passo] }
//
// Formato de um passo:
//   id       nome curto e único (guarda o "feito" no navegador)
//   titulo   o que fazer, começando pelo verbo
//   tempo    quanto leva, mais ou menos
//   porque   uma frase: o que muda para o cliente
//   onde     o caminho dentro do app, toque por toque (ou null)
//   como     a lista numerada de ações (aceita <b>, <i>, <a>)
//   pecas    blocos extras: textos para copiar, listas, dicas, checklists
//            (os tipos estão em ../pecas.js)
//   pronto   como saber que terminou
// ========================================================================

import { FASE_PERFIL } from "./perfil.js";
import { FASE_ATENDIMENTO } from "./atendimento.js";
import { FASE_ROTINA } from "./rotina.js";
import { FASE_CRESCER } from "./crescer.js";

export const FASES = [FASE_PERFIL, FASE_ATENDIMENTO, FASE_ROTINA, FASE_CRESCER];
