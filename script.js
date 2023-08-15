const navEL = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight * 0.2) {
    navEL.classList.add("navbar-scrolled");
  } else if (window.scrollY < window.innerHeight * 0.2) {
    navEL.classList.remove("navbar-scrolled");
  }
});