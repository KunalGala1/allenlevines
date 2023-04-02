// variables
const burger = document.getElementById("burger");
const navClose = document.getElementById("nav-close");
const nav = document.getElementById("nav");
const navLinks = document.getElementsByClassName("navlink");

// Open Nav
burger.addEventListener("click", () => {
  nav.classList.add("active");
  burger.classList.add("active");

  // link animation
  for (let index = 0; index < navLinks.length; index++) {
    const element = navLinks[index];
    if (element.style.animation) {
      element.style.animation = "";
    } else {
      element.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 12 + 0.3
      }s`;
    }
  }
});

// Close Nav
navClose.addEventListener("click", () => {
  nav.classList.remove("active");
  burger.classList.remove("active");
  // reset animation state
  for (let index = 0; index < navLinks.length; index++) {
    const element = navLinks[index];
    element.style.animation = "";
  }
});
