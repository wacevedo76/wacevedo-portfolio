const navToggler = document.querySelector(".nav-menu-toggler");
const navMenu = document.querySelector(".navbar-rightside");

navToggler.addEventListener("click", () => {
  (navMenu.style.display == "none") ? navMenu.style.display = "flex" : navMenu.style.display = "none";
});
