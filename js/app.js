const navegacion = document.querySelector(".nav__menu");
const enlaces = document.querySelectorAll(".nav__link");
const menu = document.getElementById("menu");

document.addEventListener("DOMContentLoaded", () => {
  mostrarMenu();
  cerrarMenu();
});

function mostrarMenu() {
  menu.addEventListener("click", () => {
    navegacion.classList.toggle("ocultar");
    menu.classList.toggle("change");
  });
}

function cerrarMenu() {
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
      e.preventDefault();
      const seccion = document.querySelector(e.target.attributes.href.value);
      cambioSeccion(seccion);
      if (e.target.tagName === "A") {
        navegacion.classList.add("ocultar");
        menu.classList.remove("change");
      }
    });
  });
}

function cambioSeccion(seccion) {
  seccion.scrollIntoView({
    behavior: "smooth",
  });
}

(() => {
  const scrollButton = document.querySelector(".scrollTop");

  scrollButton.addEventListener("click", (e) => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  });

  window.addEventListener("scroll", (e) => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 300) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  });
})();
