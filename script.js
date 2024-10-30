window.onload = function () {
  document.querySelector(".hero .hero__profile img").classList.add("rotate");
};

window.onscroll = function () {
  const wScroll = window.scrollY;

  const about = document.querySelector("#about .container");
  console.log(about);

  const rectAbout = about.getBoundingClientRect();

  const aboutToTop = rectAbout.top;

  if (wScroll > aboutToTop - 100) {
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
