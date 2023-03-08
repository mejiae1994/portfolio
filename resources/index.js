const scrollUp = document.querySelector(".scroll-button");

window.onscroll = () => {
  if (
    window.innerHeight * 1.5 + window.pageYOffset >=
    document.body.offsetHeight
  ) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
};
