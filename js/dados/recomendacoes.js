// ========================================================================
// Recomendações: trechos de cartas recebidas. Só o trecho vai ao site;
// a carta completa é enviada a pedido (ver a página de contato).
// Publicado com a autorização de quem assinou.
// ========================================================================

export const recomendacoes = [
  {
    id: "esefid-ufrgs",
    autora: "Fernanda Tambosi Varella",
    cargo: {
      pt: "Diretora da Clínica de Fisioterapia ESEFID/UFRGS",
      en: "Director, ESEFID/UFRGS Physiotherapy Clinic",
    },
    data: "2026-07-27",
    assinatura: { pt: "Assinada digitalmente via gov.br", en: "Digitally signed via gov.br" },
    // Projetos que a carta comprova (aparece na página deles)
    projetos: ["fisiohub", "gerenciamento-clinica"],
    trecho: {
      pt: [
        "Demonstra proatividade na identificação de gargalos relativos aos fluxos de trabalho, com sugestões de melhorias, especialmente no que diz respeito à proposição e desenvolvimento de soluções de informática que contribuam com a automatização de processos de trabalho.",
        "Avalio que ele pode contribuir positivamente em ambientes de trabalho relacionados a diferentes áreas, principalmente atuando com atividades que envolvam conhecimentos de informática e Tecnologia da Informação.",
      ],
      en: [
        "He shows initiative in identifying bottlenecks in workflows, suggesting improvements, especially by proposing and developing IT solutions that help automate work processes.",
        "I believe he can make a positive contribution to workplaces in different areas, especially in roles involving computing and Information Technology.",
      ],
    },
    // O original é em português; em inglês o site avisa que é tradução
    traducao: { pt: "", en: "Free translation from the original in Portuguese." },
  },
];

export function recomendacoesDoProjeto(slug) {
  return recomendacoes.filter((r) => r.projetos.includes(slug));
}
