/* =====================================================================
   AGENDAMENTO — Lucas
   Script das duas marcas: one-to-one/index.html e pkz/index.html.
   1. Cria os cards dos próximos 6 dias de atendimento (seg. a sáb.).
   2. Mostra os horários do dia escolhido (livres e ocupados).
   3. Atualiza o painel "Confirmar agendamento" com o horário marcado.
   4. Guarda a reserva no localStorage do navegador (ainda sem servidor).
   ===================================================================== */

// 1) DADOS ------------------------------------------------
const horas = [
  "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
  "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
];
const totalDias = 6; // quantos cards de dia aparecem

// getDay() devolve 0 para domingo, 1 para segunda ... 6 para sábado.
// Por isso as duas listas abaixo começam no domingo.
const diasCurtos = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const diasLongos = [
  "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
  "Quinta-feira", "Sexta-feira", "Sábado"
];

// getMonth() devolve 0 para janeiro ... 11 para dezembro.
const meses = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

// Cada marca guarda as suas reservas: "reservas-pkz" ou "reservas-oto".
// Quem diz a marca é a classe "pkz" no <body> da página da Playmakerz.
const marca = document.body.classList.contains("pkz") ? "pkz" : "oto";
const chave = "reservas-" + marca;

// Lista das reservas. Cada reserva é um objeto com os campos do
// formulário, o dia e o horário. Exemplo da One to One:
// { nome: "Ana Souza", email: "ana@email.com", telefone: "21 99999-9999",
//   dia: "2026-10-26", horario: "08:00" }
const reservas = JSON.parse(localStorage.getItem(chave)) || [];

let diaEscolhido = "";      // dia marcado nos cards, ex.: "2026-10-26"
let horarioEscolhido = "";  // horário marcado na grade, ex.: "08:00"

// 2) ELEMENTOS DO HTML -----------------------------------
const caixaDias = document.getElementById("dias");
const caixaHorarios = document.getElementById("horarios");
const dataTexto = document.getElementById("agenda-data");
const livresTexto = document.getElementById("agenda-livres");
const rotulo = document.getElementById("confirmar-rotulo");
const titulo = document.getElementById("confirmar-titulo");
const form = document.getElementById("form-agendamento");
const mensagem = document.getElementById("confirmar-status");
const botaoNovo = document.getElementById("agendar-novo");

// 3) FUNÇÕES DE DATA -------------------------------------

// Transforma uma data no texto "2026-10-26" (ano-mês-dia), o formato do
// value dos radios e do atributo datetime da tag <time>.
// Obs.: toISOString() faria isso, mas usa o fuso de Londres; no Brasil,
// depois das 21h, ele já devolveria o dia seguinte.
function paraTexto(data) {
  const ano = data.getFullYear();
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const dia = String(data.getDate()).padStart(2, "0"); // "5" vira "05"
  return ano + "-" + mes + "-" + dia;
}

// Caminho contrário: o texto "2026-10-26" vira uma data.
function paraData(texto) {
  const partes = texto.split("-"); // ["2026", "10", "26"]
  const ano = Number(partes[0]);
  const mes = Number(partes[1]) - 1; // outubro é 9
  const dia = Number(partes[2]);
  return new Date(ano, mes, dia);
}

// Data e hora em que um horário começa. parseInt("17:00") devolve 17.
function inicioDoHorario(dia, horario) {
  const inicio = paraData(dia);
  inicio.setHours(parseInt(horario));
  return inicio;
}

// Os próximos dias de atendimento, de segunda a sábado.
// Começa hoje; se o último horário de hoje já começou, começa amanhã.
function proximosDias() {
  const lista = [];
  const data = new Date();
  const ultimaHora = parseInt(horas[horas.length - 1]); // 20

  if (data.getHours() >= ultimaHora) {
    data.setDate(data.getDate() + 1);
  }

  while (lista.length < totalDias) {
    if (data.getDay() !== 0) { // 0 = domingo: estúdio fechado
      lista.push(paraTexto(data));
    }
    data.setDate(data.getDate() + 1); // setDate já vira o mês sozinho
  }
  return lista;
}

// 4) REGRAS DE OCUPAÇÃO ----------------------------------

// Diz se este dia e horário já estão na lista de reservas.
function estaReservado(dia, horario) {
  for (const reserva of reservas) {
    if (reserva.dia === dia && reserva.horario === horario) {
      return true;
    }
  }
  return false;
}

// Enquanto o site não tem servidor, simulamos a agenda dos outros alunos.
// A conta (dia do mês + hora) % 3 marca 1 de cada 3 horários como
// ocupado e dá sempre o mesmo resultado para o mesmo dia.
function ocupadoPorOutroAluno(dia, horario) {
  const soma = paraData(dia).getDate() + parseInt(horario);
  return soma % 3 === 0;
}

// Livre = ainda não começou, ninguém reservou e não está ocupado.
function estaLivre(dia, horario) {
  if (inicioDoHorario(dia, horario) <= new Date()) {
    return false; // já passou
  }
  if (estaReservado(dia, horario)) {
    return false;
  }
  return !ocupadoPorOutroAluno(dia, horario);
}

// Quantos horários livres o dia tem.
function contarLivres(dia) {
  let total = 0;
  for (const hora of horas) {
    if (estaLivre(dia, hora)) {
      total++;
    }
  }
  return total;
}

// 5) DESENHAR NA TELA ------------------------------------

// Cria os cards dos dias. Roda uma vez só: os dias não mudam.
function mostrarDias(dias) {
  let html = "";

  for (const dia of dias) {
    const data = paraData(dia);
    const curto = diasCurtos[data.getDay()];
    const longo = diasLongos[data.getDay()];
    const mes = meses[data.getMonth()];
    const marcado = dia === diaEscolhido ? "checked" : "";

    html += `
      <label class="dia">
        <input type="radio" name="dia" value="${dia}" ${marcado}>
        <span>
          <abbr class="dia-semana" title="${longo}">${curto}</abbr>
          <strong>${data.getDate()}</strong>
          <abbr title="${mes}">${mes.slice(0, 3)}</abbr>
        </span>
      </label>`;
  }
  caixaDias.innerHTML = html;
}

// Cria a grade de horários do dia escolhido e atualiza o subtítulo
// ("Seg, 26 de outubro" e "7 horários livres").
function mostrarHorarios() {
  let html = "";
  let livres = 0;

  for (const hora of horas) {
    if (estaLivre(diaEscolhido, hora)) {
      livres++;
      const marcado = hora === horarioEscolhido ? "checked" : "";
      html += `
        <label class="horario horario-livre">
          <input type="radio" name="horario" value="${hora}" ${marcado}>
          <span>${hora}</span>
        </label>`;
    } else {
      // disabled: não deixa clicar e o leitor de tela avisa
      html += `
        <label class="horario horario-ocupado">
          <input type="radio" name="horario" value="${hora}" disabled>
          <span>${hora}</span>
        </label>`;
    }
  }
  caixaHorarios.innerHTML = html;

  const data = paraData(diaEscolhido);
  dataTexto.dateTime = diaEscolhido;
  dataTexto.textContent = diasCurtos[data.getDay()] + ", " +
    data.getDate() + " de " + meses[data.getMonth()];

  if (livres === 0) {
    livresTexto.textContent = "Nenhum horário livre";
  } else if (livres === 1) {
    livresTexto.textContent = "1 horário livre";
  } else {
    livresTexto.textContent = livres + " horários livres";
  }
}

// Mostra no painel o horário escolhido: "08:00 · Seg 26/10".
function atualizarPainel() {
  if (horarioEscolhido === "") {
    titulo.textContent = "Escolha um horário";
    titulo.classList.add("confirmar-vazio");
    return;
  }

  const data = paraData(diaEscolhido);
  // "2026-10-26": slice(8) pega "26" e slice(5, 7) pega "10"
  const diaMes = diaEscolhido.slice(8) + "/" + diaEscolhido.slice(5, 7);

  const tempo = document.createElement("time");
  tempo.dateTime = diaEscolhido + "T" + horarioEscolhido;
  tempo.textContent = horarioEscolhido + " · " +
    diasCurtos[data.getDay()] + " " + diaMes;

  titulo.classList.remove("confirmar-vazio");
  titulo.textContent = "";
  titulo.append(tempo);
}

// Escreve uma mensagem embaixo do botão. erro = true pinta de vermelho.
function mostrarMensagem(texto, erro) {
  mensagem.textContent = texto;
  if (erro) {
    mensagem.classList.add("erro");
  } else {
    mensagem.classList.remove("erro");
  }
}

// Depois de uma reserva, volta o painel para o formulário.
function voltarAoFormulario() {
  rotulo.textContent = "Confirmar agendamento";
  form.hidden = false;
  botaoNovo.hidden = true;
  mostrarMensagem("", false);
}

// 6) EVENTOS ---------------------------------------------

// O "change" do radio sobe até a div (event bubbling). Assim um ouvinte
// só na div serve para todos os radios criados pelo innerHTML.
caixaDias.addEventListener("change", function (evento) {
  diaEscolhido = evento.target.value;

  // Se o mesmo horário estiver livre no novo dia, ele continua marcado.
  if (horarioEscolhido !== "" && !estaLivre(diaEscolhido, horarioEscolhido)) {
    horarioEscolhido = "";
  }

  voltarAoFormulario();
  mostrarHorarios();
  atualizarPainel();
});

caixaHorarios.addEventListener("change", function (evento) {
  horarioEscolhido = evento.target.value;
  voltarAoFormulario();
  atualizarPainel();
});

form.addEventListener("submit", function (evento) {
  evento.preventDefault(); // não deixa o navegador recarregar a página

  if (horarioEscolhido === "") {
    mostrarMensagem("Escolha um horário livre antes de enviar.", true);
    return;
  }

  // O required do HTML aceita um campo só com espaços; aqui barramos.
  for (const campo of form.querySelectorAll(".campo")) {
    if (campo.value.trim() === "") {
      mostrarMensagem("Preencha todos os campos.", true);
      campo.focus();
      return;
    }
  }

  // O horário pode ter passado enquanto a página estava aberta.
  if (!estaLivre(diaEscolhido, horarioEscolhido)) {
    horarioEscolhido = "";
    mostrarHorarios();
    atualizarPainel();
    mostrarMensagem("Esse horário não está mais livre. Escolha outro.",
      true);
    return;
  }

  // FormData lê os campos do formulário pelo atributo name (a OTO e a
  // PKZ têm campos diferentes). Object.fromEntries vira objeto comum.
  const reserva = Object.fromEntries(new FormData(form));
  reserva.dia = diaEscolhido;
  reserva.horario = horarioEscolhido;

  reservas.push(reserva);
  localStorage.setItem(chave, JSON.stringify(reservas));

  // A One to One chama o campo de "nome"; a Playmakerz, de "responsavel".
  const nome = reserva.nome || reserva.responsavel;
  const primeiroNome = nome.trim().split(" ")[0];

  form.reset();
  form.hidden = true;
  botaoNovo.hidden = false;
  rotulo.textContent = "Agendamento confirmado";
  mostrarMensagem("Pronto, " + primeiroNome +
    "! A aula experimental está marcada.", false);

  // O título do painel continua com o horário reservado,
  // e na grade ele passa a aparecer como ocupado.
  horarioEscolhido = "";
  mostrarHorarios();
});

botaoNovo.addEventListener("click", function () {
  voltarAoFormulario();
  atualizarPainel();
});

// 7) COMEÇAR ---------------------------------------------
const dias = proximosDias();

// Abre no primeiro dia que ainda tem horário livre.
diaEscolhido = dias[0];
for (const dia of dias) {
  if (contarLivres(dia) > 0) {
    diaEscolhido = dia;
    break;
  }
}

mostrarDias(dias);
mostrarHorarios();
atualizarPainel();
