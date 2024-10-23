let hamburger = document.getElementById("hamburger");
let list = document.getElementById("list");

let icons = document.getElementById("nav3inside");

hamburger.addEventListener("click", function () {
  list.classList.toggle("active");
  icons.classList.toggle("active");
});

const navbar = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const flag = 0;
  if (window.scrollY > 200) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  currentIndex += step;

  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}
