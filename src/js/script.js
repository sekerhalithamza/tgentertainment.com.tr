"use strict";

const languageBtn = document.getElementById("languageBtn");
const textElements = document.getElementsByClassName("text");
const chevronBtns = document.getElementsByClassName("section-hero--chevron");
const images = document.getElementsByClassName("section-hero__container");
const serviceContainers = document.getElementsByClassName("section-services__container-content");
const popUp = document.getElementById("popUp");
const gallery = document.getElementById("gallery");
const galleryBtns = document.getElementsByClassName("section-references--chevron");

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
      if (imagePosition >= 0) imagePosition = -200;
      else imagePosition += 100;
    } else {
      if (imagePosition <= -200) imagePosition = 0;
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" || event.key === "Esc") {
    popUp.classList.remove("active");
  }
});

var galleryPosition = 0;

// Min vw: translatex(300vw)
// Max vw: translateX(300vw)
for (let btn of galleryBtns) {
  btn.addEventListener("click", function () {
    let direction = btn.getAttribute("data-direction");
    if (direction === "right")
      if (galleryPosition <= -300) {
        galleryPosition *= -1;
      } else galleryPosition -= 25;
    else if (galleryPosition >= 300) {
      galleryPosition *= -1;
    } else galleryPosition += 25;
    gallery.style.transform = `translateX(-50%) translateY(-50%) translateX(${galleryPosition}vw)`;
  });
}

// Autoslide (in ms)
window.setInterval(() => {
  chevronBtns[1].click();
}, 3000);
