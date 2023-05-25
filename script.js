const nav = document.querySelector(".nav--bar");
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
const sectionProjects = document.querySelector("#section--projects");
const myWork = document.querySelector("#my--work");
///load at top of page on refresh

/// Settings for the sticky navbar
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

myWork.addEventListener("click", function () {
  sectionProjects.scrollIntoView();
});
///pop up ///
function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

//projectlinks
const project1IMG = document.querySelector("#pj1");
const project2IMG = document.querySelector("#pj2");
const project3IMG = document.querySelector("#pj3");
const project4IMG = document.querySelector("#pj4");
const project5IMG = document.querySelector("#pj5");
const bottomLink1 = document.querySelector("#bottom-link-1");
const bottomLink2 = document.querySelector("#bottom-link-2");
const bottomLink3 = document.querySelector("#bottom-link-3");

function projectLinks(id, link) {
  id.addEventListener("click", function (e) {
    e.preventDefault();
    window.open(link, "_blank");
  });
}

projectLinks(project1IMG, "https://shoeshopdemo.netlify.app/");
projectLinks(project2IMG, "https://mybestrecipes.netlify.app/");
projectLinks(project3IMG, "https://thewordleclone.netlify.app/");
projectLinks(project4IMG, "https://proweatherapp.netlify.app/");
projectLinks(project5IMG, "#");
projectLinks(bottomLink1, "https://github.com/dpapadat94");
projectLinks(
  bottomLink2,
  "https://www.linkedin.com/in/dennis-papadatos-dev94/"
);
projectLinks(bottomLink3, "Dennis P Resume .pdf");
