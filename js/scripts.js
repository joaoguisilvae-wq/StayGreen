// Navbar Toggle
const navToggle = document.getElementById("navToggle");
const navbar = document.querySelector(".navbar");

navToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

// Fechar navbar ao clicar em um link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");
  });
});
