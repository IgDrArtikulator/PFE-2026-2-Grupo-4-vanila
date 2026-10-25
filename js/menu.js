/* =====================================================================
   MENU HAMBÚRGUER — Arthur
   Usado em one-to-one/index.html e pkz/index.html.
   Código do material do professor (hamburguer/script.js), sem alterações:
   abre/fecha o menu do celular, fecha ao clicar fora e com a tecla ESC.
   ===================================================================== */

const button = document.getElementById("ham");
const menu = document.getElementById("menuSm");

if (button && menu) {

  function closeMenu() {
    menu.classList.remove("activated");
    button.setAttribute("aria-expanded", false);
  }

  function toggleMenu() {
    const isOpen = menu.classList.toggle("activated");
    button.setAttribute("aria-expanded", isOpen);
  }

  button.addEventListener("click", toggleMenu);

  // clique fora
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !button.contains(e.target)) {
      closeMenu();
    }
  });

  // ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });
}
