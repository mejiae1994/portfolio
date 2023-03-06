"use strict";
const elements = document.querySelectorAll(".project-article");
const nextSlide = document.querySelector(".btn-next");
const projectImg = document.querySelectorAll(".project-img");
const githubIcon = document.getElementById("github-link");
const demoLink = document.getElementById("demo-link");
const progressItems = document.querySelectorAll(".progress-item");
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const span = document.getElementsByClassName("close")[0];

const projectSources = [
  {
    githubLink: "https://github.com/mejiae1994/Eel",
    demoLink: "https://mejiae1994.github.io/Eel/"
  },
  {
    githubLink: "http://google.com",
    demoLink: "http://youtube.com"
  },
  {
    githubLink: "http://youtube.com",
    demoLink: "http://google.com"
  }
]

let curSlide = 0;
let maxSlide = elements.length - 1;

// hideExceptCurrent();

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
    githubIcon.href = projectSources[i].githubLink;
    demoLink.href = projectSources[i].demoLink;
  })
}

span.onclick = function() {
  modal.style.display = "none";
}
 /* transform: translateY(-15px); */