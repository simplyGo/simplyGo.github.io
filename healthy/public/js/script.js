// --- TIMER --

const promoDate = new Date(2018, 8, 30, 00, 00, 00, 00).getTime();
const promoDay = document.querySelector('.special-timer__item--day .special-timer__number');
const promoHour = document.querySelector('.special-timer__item--hour .special-timer__number');
const promoMin = document.querySelector('.special-timer__item--min .special-timer__number');
const promoSec = document.querySelector('.special-timer__item--sec .special-timer__number')

const monthArr = []

function getDiffDays(date1, date2) {
  return date1.getDate() - date2.getDate();
}

function promoTime() {
  const now = new Date().getTime();
  const diff = promoDate - now;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((diff % (1000 * 60)) / 1000);

  days = days < 10 ? '0' + days : days;
  hours = hours < 10 ? '0' + hours : hours;
  mins = mins < 10 ? '0' + mins : mins;
  secs = secs < 10 ? '0' + secs : secs;

  promoDay.innerHTML = days;
  promoHour.innerHTML = hours;
  promoMin.innerHTML = mins;
  promoSec.innerHTML = secs;

  if (diff < 0) {
    promoDay.innerHTML = '00';
    promoHour.innerHTML = '00';
    promoMin.innerHTML = '00';
    promoSec.innerHTML = '00';
    clearInterval(promoTimer);
  }
}

const promoTimer = setInterval(promoTime, 1000);

// --- PRODUCTS-SLIDER ---

const productsControl1 = document.querySelector('.products-slider--one .products-slider__list');
const productsControl2 = document.querySelector('.products-slider--two .products-slider__list');
const productsControl3 = document.querySelector('.products-slider--three .products-slider__list');

const productsSlider1ButtonLeft = document.querySelector('.products-slider--one .products-slider__button--left');
const productsSlider1ButtonRight = document.querySelector('.products-slider--one .products-slider__button--right');

const productsSlider2ButtonLeft = document.querySelector('.products-slider--two .products-slider__button--left');
const productsSlider2ButtonRight = document.querySelector('.products-slider--two .products-slider__button--right');

const productsSlider3ButtonLeft = document.querySelector('.products-slider--three .products-slider__button--left');
const productsSlider3ButtonRight = document.querySelector('.products-slider--three .products-slider__button--right');

const productsStep = 370;
const productSlides = 2;

function moveSliderLeft(slider, step) {
  const thisOffset = parseInt(window.getComputedStyle(slider, '').left) === 0 ? parseInt(window.getComputedStyle(slider, '').left) : parseInt(slider.style.left);
  const minOffset = 0;
  const newOffset = thisOffset + step;

  if (newOffset > 0) return;
  slider.style.left = newOffset + 'px';
}

function moveSliderRight(slider, step, slides) {
  const thisOffset = parseInt(window.getComputedStyle(slider, '').left) === 0 ? parseInt(window.getComputedStyle(slider, '').left) : parseInt(slider.style.left);
  const maxOffset = slides * step;
  const newOffset = thisOffset - step;
  if ((-1) * newOffset > maxOffset) return;
  slider.style.left = newOffset + 'px';
}

productsSlider1ButtonLeft.addEventListener('click', function() {
  moveSliderLeft(productsControl1, productsStep);
});

productsSlider1ButtonRight.addEventListener('click', function() {
  moveSliderRight(productsControl1, productsStep, productSlides);
});

productsSlider2ButtonLeft.addEventListener('click', function() {
  moveSliderLeft(productsControl2, productsStep);
});

productsSlider2ButtonRight.addEventListener('click', function() {
  moveSliderRight(productsControl2, productsStep, productSlides);
});

productsSlider3ButtonLeft.addEventListener('click', function() {
  moveSliderLeft(productsControl3, productsStep);
});

productsSlider3ButtonRight.addEventListener('click', function() {
  moveSliderRight(productsControl3, productsStep, productSlides);
});


// --- COMMENTS SLIDER ---

const commentsControl = document.querySelector('.comments__slider');
const commentBtnLeft = document.querySelector('.control-buttons__button--left');
const commentBtnRight = document.querySelector('.control-buttons__button--right');

const commentsStep = 600;
const commentsSlides = 4;

commentBtnLeft.addEventListener('click', function() {
  moveSliderLeft(commentsControl, commentsStep);
});

commentBtnRight.addEventListener('click', function() {
  moveSliderRight(commentsControl, commentsStep, commentsSlides);
});
