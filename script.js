const navEL = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 877) {
    navEL.classList.add("navbar-scrolled");
  } else if (window.scrollY < 877) {
    navEL.classList.remove("navbar-scrolled");
  }
});