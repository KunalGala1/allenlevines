const tempIcons = Array.from(document.getElementsByClassName("temp-icon"));

const hideIfAtEnd = element => {
  const span = element.parentElement;
  const spanY = span.offsetTop;
  const newLine = element.parentElement.nextElementSibling;
  const newLineY = newLine.offsetTop;

  if (spanY == newLineY) {
    element.classList.remove("hide");
    span.classList.remove("icon-hidden");
  } else {
    element.classList.add("hide");
    span.classList.add("icon-hidden");
  }
};

window.addEventListener("resize", () => {
  tempIcons.forEach(element => hideIfAtEnd(element));
});

window.addEventListener("load", () => {
  for (let index = 0; index < 2; index++) {
    tempIcons.forEach(element => hideIfAtEnd(element));
  }
});
