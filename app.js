"use strict";
const elements = document.querySelectorAll(".project-article");
const nextSlide = document.querySelector(".btn-next");
const projectImg = document.querySelectorAll(".project-img");
const githubIcon = document.getElementById("github-link");
const progressItems = document.querySelectorAll(".progress-item");
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const span = document.getElementsByClassName("close")[0];

const imageUrlList = ["http://google.com", "http://youtube.com", "http://google.com"];

let curSlide = 0;
let maxSlide = elements.length - 1;

hideExceptCurrent();

function hideExceptCurrent() {
  for (let i = 0; i < elements.length; i++) {
    if (i !== curSlide) {
      elements[i].style.display = "none";
      progressItems[i].classList.remove("active");
    }
  }
}

nextSlide.addEventListener("click", () => {
   if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  hideExceptCurrent();
  //display next
  elements[curSlide].style.display = "";
  progressItems[curSlide].classList.add("active");
});

for (let i = 0; i < projectImg.length; i++) {
  projectImg[i].addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = projectImg[i].src;
    githubIcon.href = imageUrlList[i];
  })
}

span.onclick = function() {
  modal.style.display = "none";
}
 /* transform: translateY(-15px); */