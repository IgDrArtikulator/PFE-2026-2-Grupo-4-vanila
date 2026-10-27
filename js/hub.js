/* =====================================================================
   HUB
   Script do Hub (index.html da pasta principal): slider da foto do hero.
   Os caminhos das fotos (img/...) partem da pasta principal, onde está
   o index.html que carrega este script.
   1. As fotos ficam num array de objetos (src e alt).
   2. As setas ‹ › e os tracinhos trocam a foto (setAttribute no <img>).
   3. A foto também troca sozinha a cada 6 segundos (setInterval) e para
      enquanto o mouse ou o foco do teclado estão no hero.
   As 4 fotos já existem na pasta img/ e têm o mesmo tamanho (1376x768).
   O object-fit: cover do CSS faz cada uma preencher o hero sem distorcer.
   ===================================================================== */

// 1) DADOS ------------------------------------------------
// Para trocar ou incluir fotos, é só mexer neste array:
// os tracinhos são criados a partir dele.
const fotosHero = [
  { src: "img/hub-hero.webp", alt: "Atleta jovem e atleta adulto treinando lado a lado" },
  { src: "img/hub-pkz.webp", alt: "Jovens atletas da Playmakerz em treino de agilidade" },
  { src: "img/hub-oto.webp", alt: "Aluna do One to One treinando com kettlebell" },
  { src: "img/hub-video-principal.webp", alt: "Um dia de treino no centro de treinamento" }
];

const tempoSlide = 6000; // milissegundos entre uma troca automática e outra

let slideAtual = 0;   // posição (índice) da foto que está no hero
let timerHero;        // guarda o setInterval para poder parar e recomeçar
const tracos = [];    // botões dos tracinhos, criados no passo 5

// 2) ELEMENTOS DO HTML -----------------------------------
const hero = document.getElementById("inicio");
const fotoHero = document.getElementById("hero-foto");
const sliderHero = document.getElementById("hero-slider");
const caixaTracos = document.getElementById("hero-tracos");
const setaAnterior = document.getElementById("hero-anterior");
const setaProxima = document.getElementById("hero-proxima");

// 3) FUNÇÕES ---------------------------------------------

// Só o tracinho da foto atual fica com a classe "ativo" (lilás no CSS).
function acenderTraco(indice) {
  tracos.forEach((traco, i) => {
    if (i === indice) {
      traco.classList.add("ativo");
      traco.setAttribute("aria-current", "true");
    } else {
      traco.classList.remove("ativo");
      traco.removeAttribute("aria-current");
    }
  });
}

// Mostra a foto de posição "indice".
function mostrarSlide(indice) {
  // Depois da última volta para a primeira; antes da primeira vai para a última
  if (indice < 0) {
    indice = fotosHero.length - 1;
  } else if (indice >= fotosHero.length) {
    indice = 0;
  }
  slideAtual = indice;
  acenderTraco(indice);

  // A classe "trocando" deixa a foto transparente (opacity 0 no CSS).
  // Depois de 300 ms (tempo do transition) troca o src e o alt
  // e tira a classe, então a foto nova aparece suavemente.
  fotoHero.classList.add("trocando");
  setTimeout(() => {
    fotoHero.setAttribute("src", fotosHero[indice].src);
    fotoHero.setAttribute("alt", fotosHero[indice].alt);
    fotoHero.classList.remove("trocando");
  }, 300);
}

// Troca automática: setInterval chama a função a cada tempoSlide ms.
// clearInterval antes, para nunca ter dois relógios rodando juntos.
function iniciarTimer() {
  clearInterval(timerHero);
  timerHero = setInterval(() => mostrarSlide(slideAtual + 1), tempoSlide);
}

function pararTimer() {
  clearInterval(timerHero);
}

// 4) COMEÇAR ---------------------------------------------
if (hero && fotoHero && sliderHero) {

  // 5) Um tracinho (botão) para cada foto do array
  fotosHero.forEach((foto, i) => {
    // Pré-carrega a foto, para a troca não piscar
    const preCarga = new Image();
    preCarga.src = foto.src;

    const traco = document.createElement("button");
    traco.type = "button";
    traco.className = "hub-slider-traco";
    traco.setAttribute("aria-label", "Mostrar foto " + (i + 1));
    traco.addEventListener("click", () => mostrarSlide(i));
    tracos.push(traco);
  });
  caixaTracos.append(...tracos);
  acenderTraco(0);

  setaAnterior.addEventListener("click", () => mostrarSlide(slideAtual - 1));
  setaProxima.addEventListener("click", () => mostrarSlide(slideAtual + 1));

  // Pausa enquanto a pessoa está usando o hero (mouse ou teclado)
  hero.addEventListener("mouseenter", pararTimer);
  hero.addEventListener("mouseleave", iniciarTimer);
  hero.addEventListener("focusin", pararTimer);
  hero.addEventListener("focusout", iniciarTimer);

  sliderHero.hidden = false; // com o JS pronto, mostra os controles
  iniciarTimer();
}
