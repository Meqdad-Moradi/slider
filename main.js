const slides = Array.from(document.querySelectorAll(".slide"));
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// next slide
function nextSlide() {
  const activeSlide = document.querySelector(".slide.active");
  const nextSlideEl = activeSlide.nextElementSibling;

  reset();

  if (nextSlideEl) {
    nextSlideEl.classList.add("active");
  } else {
    slides[0].classList.add("active");
  }
}

// prev slide
function prevSlide() {
  const activeSlide = document.querySelector(".slide.active");
  const prevSlideEl = activeSlide.previousElementSibling;

  reset();

  if (prevSlideEl) {
    prevSlideEl.classList.add("active");
  } else {
    slides[slides.length - 1].classList.add("active");
  }
}

// remove active class from all slide
function reset() {
  slides.forEach((slide) => slide.classList.remove("active"));
}

// toggle nav menu
const navList = document.querySelector(".nav-list");
const toggler = document.querySelector(".toggler");

toggler.addEventListener("click", (e) => {
  const currentTarget = e.currentTarget;
  currentTarget.classList.toggle('active')
  navList.classList.toggle("active");
});
