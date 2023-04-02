const tabs = Array.from(document.getElementsByClassName("tab-link"));
const articles = Array.from(document.getElementsByClassName("tab"));

tabs.forEach(element => {
  element.addEventListener("click", event => {
    event.preventDefault();

    //   active styling for appropriate tab link
    tabs.forEach(element => {
      element.classList.remove("active");
    });
    event.target.classList.add("active");

    // active styling for appropriate article
    articles.forEach(element => {
      element.classList.remove("active");
    });
    const index = tabs.indexOf(event.target);
    articles[index].classList.add("active");

    //   scroll to tab
    const scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    location.hash = event.target.getAttribute("href");
    document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
  });
});
