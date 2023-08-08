const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;
let slideIndex = 0;

function slideNext() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  sliderContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

setInterval(slideNext, 3000); // Automatically slide every 3 seconds
