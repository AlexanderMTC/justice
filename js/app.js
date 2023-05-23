const navegacion = document.querySelector(".navegacion");
const enlaces = document.querySelectorAll(".navegacion a");
const menu = document.getElementById("menu");

document.addEventListener("DOMContentLoaded", () => {
  mostrarMenu();
  cerrarMenu();
});

function myFunction(x) {
  navegacion.classList.toggle("ocultar");
  menu.classList.toggle("change-menu");
  x.classList.toggle("change");
}

function cerrarMenu() {
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
      e.preventDefault();
      const seccion = document.querySelector(e.target.attributes.href.value);
      cambioSeccion(seccion);
      if (e.target.tagName === "A") {
        navegacion.classList.add("ocultar");
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
