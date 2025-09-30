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
