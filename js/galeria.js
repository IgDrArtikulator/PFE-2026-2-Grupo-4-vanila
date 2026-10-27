/* =====================================================================
   GALERIA (slider)
   Script das duas marcas: one-to-one/index.html e pkz/index.html.
   As fotos ficam empilhadas no mesmo quadro (HTML) e só a que tem a
   classe "ativa" aparece (CSS). As setas ‹ ›, os tracinhos e as setas
   do teclado trocam a classe de foto; o contador e a legenda acompanham.
   Mesma ideia do slider do Hub (js/hub.js), mas aqui as fotos já estão
   no HTML: para incluir uma foto, basta copiar um <figure class="galeria-slide">.
   Obs.: este arquivo divide o escopo global com agendamento.js, planos.js
   e menu.js, por isso os nomes aqui não repetem os de lá.
   ===================================================================== */

// 1) ELEMENTOS DO HTML -----------------------------------
const caixaGaleria = document.getElementById("galeria-slider");
// querySelectorAll devolve uma NodeList, que também tem forEach
const slidesGaleria = document.querySelectorAll(".galeria-slide");
const controlesGaleria = document.getElementById("galeria-controles");
const caixaTracosGaleria = document.getElementById("galeria-tracos");
const contadorGaleria = document.getElementById("galeria-contador");
const legendaGaleria = document.getElementById("galeria-legenda");
const galeriaAnterior = document.getElementById("galeria-anterior");
const galeriaProxima = document.getElementById("galeria-proxima");

let fotoGaleriaAtual = 0;   // posição (índice) da foto que está aparecendo
const tracosGaleria = [];   // botões dos tracinhos, criados no passo 3

// 2) FUNÇÕES ---------------------------------------------

// 1 vira "01" (para o contador "01 / 04")
function doisDigitos(numero) {
  return String(numero).padStart(2, "0");
}

// Mostra a foto de posição "indice" e esconde as outras.
function mostrarFotoGaleria(indice) {
  // Depois da última volta para a primeira; antes da primeira vai para a última
  if (indice < 0) {
    indice = slidesGaleria.length - 1;
  } else if (indice >= slidesGaleria.length) {
    indice = 0;
  }
  fotoGaleriaAtual = indice;

  // Só a foto escolhida e o tracinho dela ficam ativos.
  // aria-hidden: o leitor de tela ignora as fotos escondidas.
  slidesGaleria.forEach((slide, i) => {
    if (i === indice) {
      slide.classList.add("ativa");
      slide.setAttribute("aria-hidden", "false");
      tracosGaleria[i].classList.add("ativo");
      tracosGaleria[i].setAttribute("aria-current", "true");
    } else {
      slide.classList.remove("ativa");
      slide.setAttribute("aria-hidden", "true");
      tracosGaleria[i].classList.remove("ativo");
      tracosGaleria[i].removeAttribute("aria-current");
    }
  });

  // A legenda é o próprio texto alternativo (alt) da foto
  const imagem = slidesGaleria[indice].querySelector("img");
  legendaGaleria.textContent = imagem.getAttribute("alt");
  contadorGaleria.textContent =
    doisDigitos(indice + 1) + " / " + doisDigitos(slidesGaleria.length);
}

// 3) COMEÇAR ---------------------------------------------
if (caixaGaleria && slidesGaleria.length > 0) {

  // Um tracinho (botão) para cada foto do HTML
  slidesGaleria.forEach((slide, i) => {
    const traco = document.createElement("button");
    traco.type = "button";
    traco.className = "galeria-traco";
    traco.setAttribute("aria-label", "Mostrar foto " + (i + 1));
    traco.addEventListener("click", () => mostrarFotoGaleria(i));
    tracosGaleria.push(traco);
  });
  caixaTracosGaleria.append(...tracosGaleria);

  galeriaAnterior.addEventListener("click", () => mostrarFotoGaleria(fotoGaleriaAtual - 1));
  galeriaProxima.addEventListener("click", () => mostrarFotoGaleria(fotoGaleriaAtual + 1));

  // Setas ← → do teclado, quando o foco está num botão da galeria
  caixaGaleria.addEventListener("keydown", evento => {
    if (evento.key === "ArrowLeft") {
      mostrarFotoGaleria(fotoGaleriaAtual - 1);
    } else if (evento.key === "ArrowRight") {
      mostrarFotoGaleria(fotoGaleriaAtual + 1);
    }
  });

  controlesGaleria.hidden = false; // com o JS pronto, mostra as setas
  mostrarFotoGaleria(0);
}
