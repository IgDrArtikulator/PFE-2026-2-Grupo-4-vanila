/* =====================================================================
   PLANOS
   Script das duas marcas: one-to-one/index.html e pkz/index.html.
   1. Os planos de cada marca ficam num array de objetos.
   2. Cada objeto vira um card (article) na seção #nossos-planos.
   Os cards são montados com createElement + textContent, sem innerHTML
   (slide "Alternativas seguras a innerHTML").
   Obs.: este arquivo divide o escopo global com agendamento.js e menu.js,
   por isso os nomes aqui não repetem os de lá (ex.: "marca", "titulo").
   ===================================================================== */

// 1) DADOS ------------------------------------------------
// Campos de cada plano:
//   nome, chamada     → obrigatórios
//   descricao, itens  → opcionais (texto e lista de serviços)
//   nota              → opcional, vira um selo no fim do card
//   destaque          → true deixa o card com borda colorida e botão cheio
//   botao             → opcional, texto do botão (padrão: "Quero este plano")
const planosPkz = [
  {
    nome: "Plano Performance",
    chamada: "Para quem busca evolução acelerada",
    descricao: "Mais frequência de treinos e acompanhamento próximo para potencializar resultados. Ideal para atletas que querem dar um passo além da performance.",
    itens: [
      "2 treinos por semana",
      "Nutrição e psicologia com acompanhamento contínuo",
      "Fisioterapia com foco em recovery e prevenção",
      "Avaliação completa"
    ],
    destaque: true
  },
  {
    nome: "Plano Desenvolvimento",
    chamada: "Para construir uma base sólida",
    descricao: "Equilíbrio entre treino, saúde e desenvolvimento progressivo. Perfeito para quem está em fase de construção e evolução constante.",
    itens: [
      "1 treino por semana",
      "Nutrição e psicologia com acompanhamento contínuo",
      "Fisioterapia com foco em recovery e prevenção",
      "Avaliação completa"
    ]
  },
  {
    nome: "Flexibilidade",
    chamada: "Um plano que se adapta ao atleta",
    descricao: "Os serviços da Play Makerz também podem ser contratados de forma individual, de acordo com a necessidade de cada atleta. Mais autonomia, sem abrir mão do suporte profissional.",
    botao: "Montar meu plano"
  }
];

const planosOto = [
  {
    nome: "Plano Express",
    chamada: "Para quem tem pouco tempo, mas não abre mão de se cuidar",
    itens: [
      "Treinos de 30 min até 5 vezes por semana",
      "Fisio: avaliação inclusa",
      "Nutri: avaliação inclusa"
    ]
  },
  {
    nome: "Plano One Move",
    chamada: "Constância é chave!",
    itens: [
      "Treinos de 60 min 3 vezes por semana",
      "Fisio: avaliação inclusa",
      "Nutri: avaliação inclusa"
    ]
  },
  {
    nome: "Plano One Power",
    chamada: "O ideal para quem busca evolução mais próxima",
    itens: [
      "Treinos de 60 min 6 vezes por semana",
      "Fisio: avaliação inclusa",
      "Nutri: avaliação mensal e planejamento alimentar personalizado"
    ]
  },
  {
    nome: "Plano Be The One",
    chamada: "O mais completo do Studio",
    itens: [
      "Treinos de 60 min, até 2 por dia",
      "Fisio: 2 sessões semanais com fisioterapeuta",
      "Nutri: avaliação mensal e planejamento alimentar personalizado"
    ],
    nota: "Prioridade no agendamento",
    destaque: true
  }
];

// Mesma regra do agendamento.js: a classe "pkz" no <body> diz a marca.
const planos = document.body.classList.contains("pkz") ? planosPkz : planosOto;

// 2) ELEMENTO DO HTML -----------------------------------
const caixaPlanos = document.getElementById("planos-lista");

// 3) FUNÇÕES ---------------------------------------------

// Cria um elemento já com classe e texto.
// Ex.: novoElemento("p", "eyebrow", "Olá") → <p class="eyebrow">Olá</p>
function novoElemento(tag, classe, texto) {
  const elemento = document.createElement(tag);
  elemento.className = classe;
  elemento.textContent = texto;
  return elemento;
}

// Monta o card de um plano e devolve pronto para inserir na página.
function criarCardPlano(plano) {
  const card = novoElemento("article", "card plano-item", "");
  if (plano.destaque) {
    card.classList.add("plano-item-destaque");
  }

  // append aceita vários elementos de uma vez
  card.append(
    novoElemento("p", "eyebrow", plano.chamada),
    novoElemento("h2", "plano-nome", plano.nome)
  );

  if (plano.descricao) {
    card.append(novoElemento("p", "plano-descricao", plano.descricao));
  }

  if (plano.itens) {
    const lista = novoElemento("ul", "plano-itens", "");
    plano.itens.forEach(item => {
      lista.append(novoElemento("li", "", item));
    });
    card.append(lista);
  }

  if (plano.nota) {
    card.append(novoElemento("p", "plano-nota", plano.nota));
  }

  // Todos os botões levam para o Contato (os valores são passados pela equipe)
  const estilo = plano.destaque ? "btn btn-primario" : "btn btn-contorno";
  const botao = novoElemento("a", estilo, plano.botao || "Quero este plano");
  botao.href = "#contato";
  card.append(botao);

  return card;
}

// 4) COMEÇAR ---------------------------------------------
// map transforma cada objeto num card; o spread (...) insere todos de uma vez.
if (caixaPlanos) {
  caixaPlanos.append(...planos.map(criarCardPlano));
}
