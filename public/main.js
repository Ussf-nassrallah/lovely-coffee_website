const toggleIcon = document.querySelector(".toggle-icon");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");

toggleIcon.addEventListener("click", () => {
  nav.classList.toggle("show-links");
});

const currentLocation = location.href;

navLinks.forEach((navLink) => {
  if (navLink.href === currentLocation) {
    navLink.classList.add("active");
  }
})