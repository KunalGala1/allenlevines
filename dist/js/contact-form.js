const contactForm=document.getElementById("contact-form"),name=document.getElementById("name"),email=document.getElementById("email"),subject=document.getElementById("subject"),humanVerification=document.getElementById("human-verification"),clearError=()=>{Array.from(contactForm.querySelectorAll(".error")).forEach((e=>{e.classList.remove("active")}))};contactForm.addEventListener("submit",(e=>{if(e.preventDefault(),Array.from(contactForm.querySelectorAll(".error")).forEach((e=>{e.classList.remove("active")})),""==name.value)return void name.nextElementSibling.classList.add("active");if(""==email.value)return void email.nextElementSibling.classList.add("active");if(""==subject.value)return void subject.nextElementSibling.classList.add("active");if(""==humanVerification.value)return void humanVerification.nextElementSibling.classList.add("active");let t=!1;t=3==humanVerification.value||t,t="three"==humanVerification.value.toLowerCase()||t,t?contactForm.submit():humanVerification.nextElementSibling.nextElementSibling.classList.add("active")}));