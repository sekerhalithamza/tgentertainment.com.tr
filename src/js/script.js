"use strict";

const languageBtn = document.getElementById("languageBtn");
const textElements = document.getElementsByClassName("text");
const chevronBtns = document.getElementsByClassName("section-hero--chevron");
const images = document.getElementsByClassName("section-hero__container");
const serviceContainers = document.getElementsByClassName("section-services__container-content");
const popUp = document.getElementById("popUp");

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

for (const container of serviceContainers) {
  container.addEventListener("click", function () {
    const title = container.getElementsByClassName(
      "section-services__container-content-wrapper--title"
    )[0];
    const text = container.getElementsByClassName(
      "section-services__container-content-wrapper--text"
    )[0];

    const popUpTitle = popUp.getElementsByClassName("popup__content--title")[0];
    const popUpText = popUp.getElementsByClassName("popup__content--text")[0];

    [popUpTitle.innerText, popUpText.innerText] = [title.innerText, text.innerText];
    popUpTitle.setAttribute("data-language", title.getAttribute("data-language"));
    popUpText.setAttribute("data-language", text.getAttribute("data-language"));
    popUp.classList.add("active");
  });
}

popUp.addEventListener("click", (event) => {
  if (!event.target.closest(".popup__content")) {
    popUp.classList.remove("active");
  }
});
