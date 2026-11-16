// Fase 3: entrar no ritmo (rotina do dia, primeiro Reels, semana e mês).

import { IDEIAS_DE_REELS, GANCHOS, IDEIAS_DE_STORIES } from "../ideias.js";

export const SEMANA_MODELO = [
  ["Seg", "Stories: agenda da semana", "Horários livres + enquete (\"qual corte você quer ver?\")"],
  ["Ter", "Reels: antes e depois", "Transformação com música em alta"],
  ["Qua", "Stories: caixinha de perguntas", "As respostas viram o post de quinta"],
  ["Qui", "Reels: uma dica", "Responder uma dúvida da caixinha"],
  ["Sex", "Stories: clientes", "Repostar quem marcou você, feedbacks"],
  ["Sáb", "Reels: transformação do dia", "Dia mais cheio, mais material"],
  ["Dom", "Folga", "Só responder mensagens"],
];

export const FASE_ROTINA = {
  id: "rotina",
  icone: "relogio",
  titulo: "Entrar no ritmo",
  quando: "Da semana 3 em diante",
  tempo: "30 a 40 min por dia, dentro do próprio trabalho",
  resumo: "Perfil arrumado não traz cliente sozinho: o que traz é aparecer com constância. Aqui está o que fazer todo dia, toda semana e todo mês. Vale mais 3 posts toda semana do que 10 numa semana e nada no mês seguinte.",
  passos: [
    {
      id: "rotina-diaria",
      titulo: "Seguir a rotina do dia",
      tempo: "30 a 40 min, espalhados no dia",
      porque: "Os stories mostram que o salão está vivo e com horário; os vídeos gravados hoje viram os Reels da semana.",
      onde: null,
      como: [
        "Abra esta página todo dia e vá marcando a lista abaixo.",
        "A lista <b>zera sozinha</b> a cada dia: amanhã começa limpa.",
        "Quando conseguir fazer a lista inteira por <b>uma semana seguida</b>, marque este passo como feito (a lista continua aqui para todo dia).",
      ],
      pecas: [
        {
          tipo: "checklist", id: "diaria", zeraTodoDia: true,
          grupos: [
            { quando: "Ao abrir o salão", tempo: "10 min", titulo: "Começar o dia", itens: [
              ["Story com os horários livres de hoje", "Com a figurinha de link para o WhatsApp"],
              ["Responder todas as mensagens e comentários de ontem"],
              ["Confirmar pelo WhatsApp os clientes de hoje"],
            ] },
            { quando: "Durante os atendimentos", tempo: "sem tempo extra", titulo: "Gravar o material", itens: [
              ["Foto ou vídeo do \"antes\"", "Sempre pedindo autorização ao cliente"],
              ["10 a 20 segundos do processo", "Mãos trabalhando, a finalização, o secador, a navalha"],
              ["O \"depois\" no mesmo lugar, mesma luz e mesmo ângulo"],
              ["Pedir ao cliente que poste e marque @andy_hairstudio"],
            ] },
            { quando: "Fim do dia", tempo: "20 a 30 min", titulo: "Fechar o dia", itens: [
              ["2 a 4 stories", "Resultado do dia, bastidores, repost de cliente"],
              ["Responder tudo no Direct e no WhatsApp", "Ninguém fica sem resposta até o dia seguinte"],
              ["Pedir avaliação no Google a 1 cliente feliz de hoje"],
              ["Guardar o melhor vídeo do dia numa pasta \"Para postar\""],
              ["10 min comentando", "Nos perfis de clientes e de comércios de Alvorada"],
            ] },
          ],
        },
        { tipo: "copiar", texto: "vago" },
        { tipo: "dica", html: "Vagou um horário? Poste o story acima na hora. Horário vazio é dinheiro que não volta, e a pressa (\"quem chamar primeiro leva\") faz a pessoa agir." },
      ],
      pronto: "Você fez a rotina inteira por 7 dias seguidos.",
    },
    {
      id: "primeiro-reels",
      titulo: "Postar o primeiro Reels do jeito certo",
      tempo: "20 min",
      porque: "Reels (vídeo curto em pé) é o que o Instagram mostra para quem ainda não te segue. Foto parada chega quase só em quem já te conhece.",
      onde: ["Instagram", "+ (criar)", "Reels"],
      como: [
        "Escolha na pasta \"Para postar\" o vídeo mais impressionante da semana.",
        "Corte para que os <b>primeiros 3 segundos</b> já mostrem o \"depois\" (o resultado), com uma frase escrita na tela: <i>\"Ele chegou assim…\"</i>. Se a pessoa passar o vídeo logo no começo, o Instagram para de mostrar.",
        "No Instagram, toque em <b>+</b>, escolha <b>Reels</b>, selecione o vídeo e coloque uma <b>música em alta</b> (as que têm a setinha ↗ ao lado).",
        "Na legenda, use o <b>montador de legenda</b> abaixo: escolha o serviço, escreva como o cabelo chegou e toque em Copiar.",
        "Toque em <b>Adicionar localização</b> e marque o <b>Studio Nove</b>. Faça isso em todo post: cliente de cabeleireiro é sempre da região.",
        "Toque em <b>Compartilhar</b>. Depois, poste o Reels também nos seus stories.",
      ],
      pecas: [
        { tipo: "legenda" },
        { tipo: "ideias", titulo: "Frases para os 3 primeiros segundos", itens: GANCHOS },
        {
          tipo: "lista", titulo: "Fotos e vídeos melhores, sem gastar", estilo: "bom",
          itens: [
            "Um canto fixo para gravar: a parede de madeira do Studio Nove já é ótima.",
            "Luz de frente (janela ou ring light), nunca só de cima.",
            "Celular <b>em pé</b>, lente limpa (passe na camiseta), sem zoom.",
            "Antes e depois sempre no mesmo ângulo e na mesma luz.",
            "Grave mais do que precisa: depois escolha o melhor pedaço.",
          ],
        },
        { tipo: "ideias", titulo: "Sem ideia do que gravar? Ideias de Reels", itens: IDEIAS_DE_REELS },
      ],
      pronto: "O Reels está no ar, com legenda, localização e o \"depois\" logo no começo.",
    },
    {
      id: "semana",
      titulo: "Seguir a semana modelo",
      tempo: "3 a 4 Reels por semana + stories todo dia útil",
      porque: "Com o dia de cada coisa já decidido, você não perde tempo pensando no que postar.",
      onde: null,
      como: [
        "Siga o calendário abaixo. Não precisa ser perfeito: o importante é não sumir.",
        "Uma vez por semana, faça as tarefas da lista \"Toda semana\".",
        "Quando completar <b>4 semanas</b> assim, marque este passo como feito.",
      ],
      pecas: [
        { tipo: "semana", dias: SEMANA_MODELO },
        { tipo: "ideias", titulo: "Ideias de stories que fazem as pessoas responderem", itens: IDEIAS_DE_STORIES },
        {
          tipo: "lista", titulo: "Toda semana",
          itens: [
            "Ver na lista de retorno quem está \"no prazo\" e mandar a mensagem (fase 2).",
            "Atualizar o destaque <b>Agenda</b> com os horários da semana.",
            "Escolher na pasta \"Para postar\" os vídeos da semana seguinte.",
            "Se aparecer a opção <b>Reels de teste</b> (ou \"Trial\") ao publicar, use em 1 vídeo: ele é mostrado primeiro só para quem não te segue.",
          ],
        },
        {
          tipo: "lista", titulo: "O que mais faz um vídeo ser mostrado",
          itens: [
            "<b>Ser assistido até o fim:</b> vídeos curtos (15 a 30 segundos) e com o resultado no começo.",
            "<b>Ser enviado pelo Direct:</b> dicas úteis e transformações fortes são o que a pessoa manda para a amiga.",
            "<b>Palavras certas:</b> escreva \"cabeleireiro em Alvorada\" na legenda e use 3 a 5 hashtags da cidade, não 30 genéricas.",
          ],
        },
      ],
      pronto: "Você postou 3 Reels por semana durante 4 semanas seguidas.",
    },
    {
      id: "mes",
      titulo: "Fazer o fechamento do mês",
      tempo: "30 min, uma vez por mês",
      porque: "Para repetir o que deu certo e parar o que não traz cliente.",
      onde: ["Seu perfil", "Painel profissional"],
      como: [
        "No perfil, toque em <b>Painel profissional</b> e veja os <b>3 posts</b> que mais trouxeram visitas ao perfil e toques no link do WhatsApp. Faça mais vídeos parecidos com esses.",
        "Conte quantos agendamentos vieram do Instagram. Para saber, pergunte a todo cliente novo: <b>\"como você me achou?\"</b>",
        "Revise os 3 posts fixados e o destaque <b>Valores</b> (preço mudou?).",
        "Anote os números no <b>painel do mês</b> abaixo: ele guarda neste celular e mostra se subiu ou desceu em relação ao mês anterior.",
      ],
      pecas: [{ tipo: "numeros" }],
      pronto: "Você sabe qual vídeo do mês mais trouxe cliente e quantos agendamentos vieram do Instagram.",
    },
  ],
};
