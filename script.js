window.onload = function () {
  document.querySelector(".hero .hero__profile img").classList.add("rotate");
};

window.onscroll = function () {
  const wScroll = window.scrollY;

  const about = document.querySelector("#about .container");

  const rectAbout = about.getBoundingClientRect();

  const aboutToTop = rectAbout.top;

  if (wScroll > aboutToTop - 200) {
    about.classList.add("about__container__show");
  }

  const projectContainers = document.querySelectorAll(".projects__container");
  for (let i = 0; i < projectContainers.length; i++) {
    const rectProjects = projectContainers[i].getBoundingClientRect();
    const projectsToTop = rectProjects.top;
    if (wScroll > projectsToTop + (700 + i)) {
      projectContainers[i].classList.add("projects__container__show");
    }
  }
};

const navbarHamburger = document.querySelector("#navbar__hamburger");

navbarHamburger.onclick = function () {
  document.querySelector(".navbar__nav").classList.toggle("navbar__show");
};
