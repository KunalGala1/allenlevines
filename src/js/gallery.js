const spotlight = document.getElementById("spotlight");
const cards = document.querySelectorAll(
  "#photos-pg main section[role='content'] .card"
);
const closeBtn = document.querySelector("#spotlight .close-btn");
const nextBtn = document.querySelectorAll("#spotlight .angle-btn")[1];
const prevBtn = document.querySelectorAll("#spotlight .angle-btn")[0];

// ===close spotlight===
spotlight.addEventListener("click", ev => {
  if (ev.target != spotlight) return; // prevents event bubbling manually (so angle btns do not trigger close)
  spotlight.classList.remove("active");
  document.body.classList.remove("frozen");
  spotlight.querySelector("img").src = "";
  spotlight.querySelector("img").setAttribute("alt", "");
});

closeBtn.addEventListener("click", () => {
  spotlight.classList.remove("active");
  document.body.classList.remove("frozen");
  spotlight.querySelector("img").src = "";
  spotlight.querySelector("img").setAttribute("alt", "");
});

// ===open spotlight===
Array.from(cards).forEach(element => {
  element.addEventListener("click", ev => {
    spotlight.classList.add("active");
    const src = ev.target.src;
    spotlight.querySelector("img").src = src;
    document.body.classList.add("frozen");

    // move spotlight to current scroll position
    spotlight.style.top = window.scrollY + "px";
  });
});

// ===resize and reposition spotlight===
window.addEventListener("resize", () => {
  spotlight.style.top = window.scrollY + "px";
});

// ===navigate spotlight===
// todo - add loading screen while image loads

nextBtn.addEventListener("click", () => {
  for (let i = 0; i < Array.from(cards).length; i++) {
    const element = Array.from(cards)[i];
    if (element.firstElementChild.src == spotlight.querySelector("img").src) {
      let index = Array.from(cards).indexOf(element);
      index++;
      if (index >= cards.length) index = 0;
      spotlight.querySelector("img").src = cards[index].firstElementChild.src;
      break;
    }
  }
});

prevBtn.addEventListener("click", () => {
  for (let i = 0; i < Array.from(cards).length; i++) {
    const element = Array.from(cards)[i];
    if (element.firstElementChild.src == spotlight.querySelector("img").src) {
      let index = Array.from(cards).indexOf(element);
      index--;
      if (index < 0) index = cards.length - 1;
      spotlight.querySelector("img").src = cards[index].firstElementChild.src;
      break;
    }
  }
});
