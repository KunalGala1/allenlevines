const contactForm = document.getElementById("contact-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const humanVerification = document.getElementById("human-verification");

const clearError = () => {
  Array.from(contactForm.querySelectorAll(".error")).forEach(element => {
    element.classList.remove("active");
  });
};

contactForm.addEventListener("submit", ev => {
  ev.preventDefault();
  clearError();

  if (name.value == "") {
    name.nextElementSibling.classList.add("active");
    return;
  }

  if (email.value == "") {
    email.nextElementSibling.classList.add("active");
    return;
  }

  // todo - add verification that email is valid
  if (subject.value == "") {
    subject.nextElementSibling.classList.add("active");
    return;
  }

  if (humanVerification.value == "") {
    humanVerification.nextElementSibling.classList.add("active");
    return;
  }
  let verificationPassed = false;
  verificationPassed = humanVerification.value == 3 ? true : verificationPassed;
  verificationPassed =
    humanVerification.value.toLowerCase() == "three"
      ? true
      : verificationPassed;

  if (!verificationPassed) {
    humanVerification.nextElementSibling.nextElementSibling.classList.add(
      "active"
    );
    return;
  }
  contactForm.submit();
});
