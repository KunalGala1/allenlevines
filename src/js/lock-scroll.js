const content = document.querySelector("#bio-pg main section[role='content']");

// ===returns total width of articles===
function getWidth() {
  // todo - articles already defined... how to make local?
  const articles2 = Array.from(document.getElementsByClassName("tab"));

  let sum = 0;

  for (let index = 0; index < articles2.length; index++) {
    const element = articles2[index];
    sum = sum + element.offsetWidth;
  }

  return sum;
}

// ===keep track of hash===
let hash = window.location.hash;
const tabLinks = Array.from(document.getElementsByClassName("tab-link"));
tabLinks.forEach((element) => {
  element.addEventListener("click", () => {
    hash = window.location.hash; // update hash
  });
});

// ===on resize, lock scroll to current hash===
window.addEventListener("resize", () => {
  let index;
  tabLinks.forEach((element) => {
    if (element.getAttribute("href") == hash) {
      index = tabLinks.indexOf(element);
    }
  });

  // scroll to appropriate length
  content.scrollLeft = getWidth() * (index / tabLinks.length);
});
