"use strict";

const languageBtn = document.getElementById("languageBtn");
const textElements = document.getElementsByClassName("text");
const chevronBtns = document.getElementsByClassName("section-hero--chevron");
const images = document.getElementsByClassName("section-hero__container");

languageBtn.addEventListener("click", function () {
  for (const element of textElements) {
    let oldText = element.innerText;
    element.innerText = element.getAttribute("data-language");
    element.setAttribute("data-language", oldText);
  }
});

var imagePosition = 0;

for (const btn of chevronBtns) {
  btn.addEventListener("click", function () {
    let direction = btn.getAttribute("data-direction");
    if (direction === "left") {
      if (imagePosition >= 0) imagePosition = -400;
      else imagePosition += 100;
    } else {
      if (imagePosition <= -400) imagePosition = 0;
      else imagePosition -= 100;
    }
    for (const image of images) {
      image.style.transform = `translateX(${imagePosition}vw)`;
    }
  });
}
