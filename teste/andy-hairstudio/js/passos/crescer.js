// Fase 4: crescer (indicação, parcerias, pacotes, datas do ano e anúncio pequeno).

import { PACOTES } from "../ideias.js";

export const FASE_CRESCER = {
  id: "crescer",
  icone: "grafico",
  titulo: "Crescer",
  quando: "Do segundo mês em diante",
  tempo: "uma ação nova por semana",
  resumo: "Com o perfil arrumado e a rotina andando, é hora de levar o seu trabalho para gente nova da região: pelos clientes, pelos vizinhos de comércio e, quando um vídeo já provou que funciona, por um anúncio pequeno.",
  passos: [
    {
      id: "indicacao",
      titulo: "Lançar a indicação premiada",
      tempo: "15 min",
      porque: "Indicação de amigo é a propaganda em que o cliente mais confia, e você só paga o bônus quando o cliente novo aparece.",
      onde: null,
      como: [
        "Escolha o bônus: hidratação, sobrancelha ou um desconto no próximo serviço.",
        "Poste o texto abaixo nos stories e guarde num destaque (pode ser o <b>Clientes</b>).",
        "Fale da indicação para cada cliente no fim do atendimento.",
        "Quando um cliente novo disser quem indicou, anote na lista de retorno para dar o bônus aos dois.",
      ],
      pecas: [{ tipo: "copiar", texto: "indicacao" }],
      pronto: "A indicação está nos stories e você já contou para os clientes da semana.",
    },
    {
      id: "parceria",
      titulo: "Fazer uma parceria local",
      tempo: "1 conversa e 1 post",
      porque: "Post em colaboração aparece para os seguidores dos dois perfis: é público novo e da região, sem pagar nada.",
      onde: ["Ao postar", "Marcar pessoas", "Convidar colaborador"],
      como: [
        "Pense em vizinhos de Alvorada com público parecido: <b>loja de roupa, fotógrafo, maquiadora, academia</b>.",
        "Mande o convite abaixo pelo Direct.",
        "Combinem o vídeo (ex.: transformação de uma cliente ou modelo deles).",
        "Ao postar, toque em <b>Marcar pessoas › Convidar colaborador</b> e escolha o perfil do parceiro. Quando ele aceitar, o post aparece nos dois perfis.",
      ],
      pecas: [{ tipo: "copiar", texto: "parceria" }],
      pronto: "Saiu um post em colaboração com um comércio da cidade.",
    },
    {
      id: "pacotes",
      titulo: "Criar 1 ou 2 pacotes",
      tempo: "30 min para decidir",
      porque: "Pacote faz o cliente voltar com data marcada e aumenta quanto cada um gasta, sem você precisar atender mais gente.",
      onde: null,
      como: [
        "Leia as ideias abaixo e escolha <b>só 1 ou 2</b> para começar. Muito pacote confunde.",
        "Defina o preço: o pacote sai um pouco mais barato do que os serviços separados, mas você ganha a volta garantida.",
        "Cadastre no <b>catálogo do WhatsApp Business</b> e no destaque <b>Valores</b>.",
        "Ofereça no fim de cada atendimento: <i>\"Quer já deixar marcada a manutenção?\"</i>",
      ],
      pecas: [{ tipo: "cartoes", itens: PACOTES }],
      pronto: "Pelo menos 1 pacote está no catálogo, no destaque Valores, e você já ofereceu para os clientes da semana.",
    },
    {
      id: "datas",
      titulo: "Planejar as datas especiais do ano",
      tempo: "20 min, uma vez por ano",
      porque: "Nas datas especiais as pessoas já estão procurando presente e querendo ficar bonitas. Quem se planeja enche a agenda; quem lembra na véspera perde.",
      onde: null,
      como: [
        "Veja o calendário abaixo. O mês de hoje aparece marcado.",
        "Escolha as datas que combinam com o seu público (não precisa fazer todas).",
        "Comece a divulgar <b>2 semanas antes</b> de cada uma: stories, um Reels e a arte da Agenda.",
        "O painel <b>Seu dia hoje</b>, no alto da página, avisa quando uma data estiver chegando.",
      ],
      pecas: [{ tipo: "calendario" }],
      pronto: "Você escolheu as datas do ano e já sabe qual é a próxima.",
    },
    {
      id: "anuncio",
      titulo: "Impulsionar o melhor Reels só na região",
      tempo: "10 min (e 7 dias rodando)",
      porque: "Pagar para mostrar um vídeo que já deu certo sozinho gasta menos para trazer cliente do que anunciar um vídeo qualquer.",
      onde: ["Abrir o Reels", "Impulsionar"],
      como: [
        "Escolha o Reels que mais trouxe visitas no mês (você viu no fechamento do mês).",
        "Abra o vídeo e toque em <b>Impulsionar</b>.",
        "Objetivo: <b>Mais mensagens</b>, levando para o <b>WhatsApp</b>.",
        "Público: <b>Criar o seu</b>, local <b>Alvorada</b>, num raio de <b>5 a 8 km</b> do salão.",
        "Comece pequeno: por exemplo <b>R$ 10 a 20 por dia, durante 7 dias</b>. A forma de pagamento você cadastra lá mesmo.",
        "No fim, conte quantas conversas chegaram e quantas viraram horário marcado.",
      ],
      pecas: [
        { tipo: "atencao", html: "Só impulsione depois que o perfil estiver arrumado (fase 1): quem chega pelo anúncio vê o perfil antes de chamar." },
      ],
      pronto: "O anúncio rodou 7 dias e você anotou quantos clientes ele trouxe.",
    },
  ],
};

// O que não fazer: aparece no fim da trilha.
export const EVITAR = [
  "Seguir e deixar de seguir em massa, ou comprar seguidores: o Instagram passa a mostrar menos o seu perfil.",
  "Sumir por semanas e voltar postando 5 de uma vez.",
  "Deixar pergunta de preço sem resposta, ou responder só \"chama no privado\".",
  "Post só de arte, sem foto real do trabalho.",
  "Foto com a tela da câmera aparecendo, tremida ou com luz amarela.",
  "Postar foto de cliente sem pedir autorização.",
];
