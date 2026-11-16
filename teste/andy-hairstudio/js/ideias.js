// ========================================================================
// Banco de ideias: o que gravar, como começar o vídeo, o que postar nos
// stories, as datas do ano e os pacotes. Os passos da trilha mostram
// estas listas; o painel "Seu dia hoje" usa as datas.
// ========================================================================

// [título, o que mostrar]
export const IDEIAS_DE_REELS = [
  ["Como chegou x como saiu", "o formato que você já usa, sempre com o \"depois\" no começo."],
  ["Progressiva em 30 segundos", "o processo acelerado, do lavatório ao liso."],
  ["Degradê do zero", "máquina, navalha e acabamento em vídeo rápido."],
  ["A reação no espelho", "o cliente se vendo pela primeira vez."],
  ["O corte certo pro seu rosto", "visagismo explicado em 3 formatos de rosto."],
  ["3 erros que estragam sua progressiva", "lavar cedo, prender o cabelo, shampoo errado."],
  ["Quanto tempo dura?", "responder dúvidas reais da caixinha de perguntas."],
  ["Foto de referência x resultado", "o cliente trouxe a foto e você entregou."],
  ["Um dia no Studio Nove", "bastidores, da abertura ao último cliente."],
  ["Coloração passo a passo", "do fio ao tom final."],
  ["Tratamento que salvou o cabelo", "antes danificado, depois com brilho."],
  ["Freestyle", "desenho no corte com música em alta."],
  ["Primeiro corte da criança", "conteúdo que as famílias compartilham."],
  ["Pronto pro evento", "casamento, formatura, entrevista de emprego."],
  ["Mito ou verdade", "\"cortar a ponta faz crescer?\"."],
  ["O que tem na minha bancada", "ferramentas e produtos que você usa."],
  ["Feedback em vídeo", "10 segundos do cliente falando, sem roteiro."],
  ["Cortes em alta da estação", "3 cortes masculinos que estão pedindo."],
  ["Pergunte ao cabeleireiro", "você respondendo uma pergunta olhando pra câmera."],
  ["Transformação da semana", "a melhor da semana, todo sábado."],
  ["Progressiva x semidefinitiva", "a diferença explicada em 20 segundos, com antes e depois de cada uma."],
  ["Corte feminino que muda tudo", "do comprido sem forma ao corte com movimento."],
  ["Lavatório relaxante", "o momento da lavagem, com som ambiente: as pessoas assistem até o fim."],
  ["Quanto custa x quanto dura", "a conta de quanto sai por semana uma progressiva bem cuidada."],
  ["O pedido mais difícil da semana", "o cliente pediu algo complicado e você resolveu."],
];

// Frases para escrever na tela nos 3 primeiros segundos do vídeo.
export const GANCHOS = [
  ["\"Ela chegou assim…\"", "e corta direto para o depois."],
  ["\"Espera o final\"", "com o depois guardado para os últimos segundos."],
  ["\"Ninguém acreditou que era o mesmo cabelo\"", "para transformações fortes."],
  ["\"Pare de fazer isso com o seu cabelo\"", "abre uma dica de cuidado."],
  ["\"O corte que mais pedem em Alvorada\"", "puxa quem é da cidade."],
  ["\"Quanto tempo dura uma progressiva?\"", "pergunta que todo mundo já fez."],
  ["\"Ele pediu um degradê navalhado\"", "e mostra o processo."],
  ["\"3 sinais de que seu cabelo precisa de tratamento\"", "lista curta, gera envio."],
  ["\"Mostrei a foto e ele fez igual\"", "foto de referência x resultado."],
  ["\"Você tá lavando o cabelo errado\"", "dica com tom de alerta."],
  ["\"Primeira vez cortando curto\"", "a reação é o vídeo."],
  ["\"De armado para alinhado em 1 dia\"", "semidefinitiva ou progressiva."],
];

// Stories que fazem as pessoas responderem (e o Instagram mostrar mais).
export const IDEIAS_DE_STORIES = [
  ["Enquete \"Qual você faria?\"", "duas fotos de corte lado a lado."],
  ["Caixinha \"Pergunte ao cabeleireiro\"", "responda as melhores em vídeo."],
  ["Quiz \"Progressiva ou semidefinitiva?\"", "mostre um cabelo e deixe adivinharem."],
  ["Bastidor rápido", "café, organização da bancada, a música do salão."],
  ["Contagem regressiva", "para uma data especial ou um horário promocional."],
  ["Repost de cliente", "sempre agradecendo e marcando de volta."],
  ["Agenda da semana", "os horários livres com a figurinha de link do WhatsApp."],
  ["Antes e depois em 2 telas", "primeiro o antes; na tela seguinte, o depois."],
  ["Escala de 0 a 10", "\"quanto você ama esse resultado?\" com a figurinha de emoji."],
  ["Produto do mês", "o que você usou e por que."],
];

// [mês (1 a 12), dia aproximado, data, ideia]. As datas que mudam todo ano
// (Carnaval, Páscoa, Dia das Mães e dos Pais, Black Friday) ficam num dia
// próximo do comum; a Black Friday está no dia de 2026.
export const DATAS_DO_ANO = [
  [1, 15, "Férias de verão", "Reels de cortes de verão; promoção para quem vai viajar."],
  [2, 5, "Volta às aulas", "Corte das crianças e adolescentes: pacote para irmãos."],
  [2, 20, "Carnaval", "Agenda especial antes do feriado; penteados e cortes para a festa."],
  [3, 8, "Dia da Mulher", "Homenagem às clientes; mimo (hidratação) para quem vier na semana."],
  [4, 10, "Páscoa", "Sorteio entre quem marcar um amigo nos comentários."],
  [5, 10, "Dia das Mães", "Vale-presente: o filho dá à mãe um tratamento ou escova."],
  [6, 12, "Dia dos Namorados", "Combo para casal (corte + escova); Reels de transformação a dois."],
  [6, 24, "Festa junina", "Bastidores com tema junino; penteados para a festa."],
  [8, 10, "Dia dos Pais", "Vale-presente de corte e barba para o pai."],
  [9, 15, "Dia do Cliente", "Agradecimento a quem sempre volta; bônus no próximo horário."],
  [10, 12, "Dia das Crianças", "Primeiro corte com certificado e foto."],
  [11, 27, "Black Friday", "Condição só para a semana; agenda abre antes para os VIP."],
  [12, 5, "Formaturas", "Agenda para formandos; penteados e cortes de festa."],
  [12, 20, "Natal e Ano-Novo", "Abra a agenda de dezembro já em novembro: é o mês mais cheio."],
];

// [nome, como funciona, por que ajuda]
export const PACOTES = [
  ["Manutenção da progressiva", "Retoque da raiz com dia marcado no fim do atendimento (no prazo que você indicar).", "O cliente já sai com o próximo horário: ele não esquece e não vai pra outro."],
  ["Plano mensal masculino", "2 cortes por mês com preço fechado, pago no primeiro corte.", "Dinheiro certo todo mês e cliente fiel."],
  ["Cartão fidelidade", "A cada 5 atendimentos, o 6º ganha um bônus (hidratação, sobrancelha).", "Motivo a mais para voltar sempre com você."],
  ["Combo transformação", "Corte + tratamento (ou corte + coloração) num valor menor do que separado.", "Aumenta o valor de cada atendimento."],
  ["Vale-presente", "Um cartão bonito (pode ser a arte preta e dourada) com o serviço escolhido.", "Vende nas datas especiais para quem nem é cliente ainda."],
];
