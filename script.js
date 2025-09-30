let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const wrapper = document.querySelector('.slides-wrapper');
const total = slides.length;

function showSlide(index) {
  if (index >= total) currentIndex = 0;
  else if (index < 0) currentIndex = total - 1;
  else currentIndex = index;

  wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector('.next')?.addEventListener('click', () => showSlide(currentIndex + 1));
document.querySelector('.prev')?.addEventListener('click', () => showSlide(currentIndex - 1));

setInterval(() => {
  showSlide(currentIndex + 1);
}, 4000);

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Events للأزرار
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto play كل 4 ثواني
setInterval(nextSlide, 4000);

// تشغيل أول Slide
showSlide(currentSlide);
