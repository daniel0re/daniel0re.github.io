const portafolio = document.querySelector("#container_portfolio");

document.addEventListener('DOMContentLoaded', () => {
  leerDatos();
});

async function leerDatos() {
  try {
    const respuesta = await fetch('../proyectos.json');
    const resultado = await respuesta.json();
    mostrarHTML(resultado.servicios);
    cargarPagina();
  } catch (error) {
    console.log(error);
  }
}

function mostrarHTML(datos) {
  datos.forEach(dato => {
    const { titulo, imagen, descripcion, hrefPage, hrefRepo } = dato;
    portafolio.innerHTML +=
      `<div class="portfolio__item">
          <picture>
            <source type="image/jpeg" srcset="./projects/${imagen}" />
            <img class="portfolio__img" alt="portfolio item" />
          </picture>
        <div class="portfolio__description">
          <h3 class="portfolio__description--title">${titulo}</h3>
          <p class="portfolio__description--text">
              ${descripcion}
          </p>
          <div class="buttons__container">
              <a class="button" href="${hrefPage}" target="_blank"
                rel="noopener noreferrer">
                <i class="fas fa-globe-americas"></i> Website
              </a>
              <a class="button" href="${hrefRepo}" target="_blank"
                rel="noopener noreferrer">
                <i class="fab fa-github"></i>Repository
              </a>
          </div>
        </div>
      </div>`
  });
}

function cargarPagina() {

  const navbar = document.querySelector(".navbar");
  // const homebg = document.querySelector(".home__background");
  const menu = document.querySelector(".navbar__menu");
  const links = document.querySelector(".navbar__links");
  const sections = document.querySelectorAll("section");


  const config = {
    rootMargin: "0px",
    threshold: [0.6, 0.9],
  };

  function handleLlinks() {
    if (window.innerWidth <= 991) {
      links.classList.toggle("visible");
    }
  }

  menu.addEventListener("click", handleLlinks);
  links.addEventListener("click", handleLlinks);

  window.addEventListener("scroll", function () {
    window.scrollY > 100 && (navbar.style.background = `rgba(0,0,0,0.9)`);
    window.scrollY < 100 && (navbar.style.background = `transparent`);
  });

  let observer = new IntersectionObserver(function (entries, self) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        intersectionHandler(entry);
      }
    });
  }, config);

  sections.forEach((section) => {
    observer.observe(section);
  });

  function intersectionHandler(entry) {
    const id = entry.target.id;
    const currentlyActive = document.querySelector(".navbar__links  .active");
    const shouldBeActive = document.querySelector(
      ".navbar__links [data-ref=" + id + "]"
    );

    if (currentlyActive) {
      currentlyActive.classList.remove("active");
    }
    if (shouldBeActive) {
      shouldBeActive.classList.add("active");
    }
  }

  // window.addEventListener("mousemove", parallax);

  // function parallax(e) {
  //   elements.forEach((item) => {
  //     const speed = item.getAttribute("data-speed");
  //     console.log(speed);
  //     const x = (window.innerWidth - e.pageX * speed) / 100;
  //     const y = (window.innerHeight - e.pageY * speed) / 100;
  //     item.style.transform = `translateX(${x}px) translateY(${y}px)`;
  //   });
  // }

  ScrollReveal().reveal(".navbar", { delay: 150 });
  ScrollReveal().reveal(".home__profile", { delay: 250 });
  ScrollReveal().reveal(".home__title--primary", { delay: 250 });
  ScrollReveal().reveal(".home__title", { delay: 350 });
  ScrollReveal().reveal(".home__title--secondary", { delay: 450 });
  ScrollReveal().reveal(".section__title", { delay: 150 });
  ScrollReveal().reveal(".section__subtitle", { delay: 250 });
  ScrollReveal().reveal(".about__description", { delay: 250 });
  ScrollReveal().reveal(".about__summary", { delay: 350 });
  ScrollReveal().reveal(".button--cta", { delay: 450 });
  ScrollReveal().reveal(".skill__title", { delay: 350 });
  ScrollReveal().reveal(".skill__item", { delay: 350 });
  ScrollReveal().reveal(".services__item", { delay: 350 });
  ScrollReveal().reveal(".portfolio__item", { delay: 350 });
  ScrollReveal().reveal(".contact__item", { delay: 350 });
  ScrollReveal().reveal(".footer", { delay: 350 });

}
