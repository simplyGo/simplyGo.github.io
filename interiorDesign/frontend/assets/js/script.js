// didn't use webpack to build one file from several. Everything was written in this file :c

// --- FEEDBACK-SLIDER ---

const fbSliderCtrl = document.querySelector('.feedback__list');
const fbkList = document.querySelectorAll('.feedback__item');

const fbSliderPrev = document.querySelector('.feedback__slider-prev');
const fbSliderNext = document.querySelector('.feedback__slider-next');

const slideFb1 = document.getElementById('feedback-slide--1');
const slideFb2 = document.getElementById('feedback-slide--2');
const slideFb3 = document.getElementById('feedback-slide--3');
const slideFb4 = document.getElementById('feedback-slide--4');
const slideFbList = document.querySelectorAll('.feedback-slider__input');

const sliderFbLabel1 = document.querySelector('.feedback-slider__button--slide1');
const sliderFbLabel2 = document.querySelector('.feedback-slider__button--slide2');
const sliderFbLabel3 = document.querySelector('.feedback-slider__button--slide3');
const sliderFbLabel4 = document.querySelector('.feedback-slider__button--slide4');
const sliderFbLabelList = document.querySelectorAll('.feedback-slider__button');

const slideButtonFbPrev = document.querySelector('.feedback__slider-prev');
const slideButtonFbNext = document.querySelector('.feedback__slider-next');
const slideButtonFbPrevImage = document.querySelector('.feedback__slider-decor--prev');
const slideButtonFbNextImage = document.querySelector('.feedback__slider-decor--next');

const check = 'checked';
let curSlide = 1;

function clearForAtrr() {
  sliderFbLabelList.forEach((item) => {
    item.removeAttribute('for');
  });
}

function showSlideButtons() {
  slideButtonFbPrev.style.display = 'block';
  slideButtonFbNext.style.display = 'block';
}

function getCurSlide() {
  let i = 1;
  let thisSlide;
  slideFbList.forEach((slide) => {
    if (slide.hasAttribute(check)) curSlide = i;
    i += 1;
  });
}

function removeAttr() {
  getCurSlide()
  slideFbList[curSlide - 1].removeAttribute(check);
}

function changePhotos() {
  getCurSlide();
  showSlideButtons();
  switch(curSlide) {
    case 1:
      slideButtonFbPrev.style.display = 'none';
      slideButtonFbNextImage.style.background = "url('../img/avaMain.jpg')";
      break;
    case 2:
      slideButtonFbPrevImage.style.background = "url('../img/av1.jpg')";
      slideButtonFbNextImage.style.background = "url('../img/av2.jpg')";
      break;
    case 3:
      slideButtonFbPrevImage.style.background = "url('../img/avaMain.jpg')";
      slideButtonFbNextImage.style.background = "url('../img/avaMain.jpg')";
      break;
    case 4:
      slideButtonFbPrevImage.style.background = "url('../img/av2.jpg')";
      slideButtonFbNext.style.display = 'none';
      break;
  }
}

function switchAttr(slide) {
  removeAttr();
  slideFbList[slide - 1].setAttribute(check, '');
}

function moveFbSliderLeft() {
  getCurSlide();
  switchAttr(curSlide - 1);
  changePhotos();
}

function moveFbSliderRight(curValue, elemWidth) {
  getCurSlide();
  switchAttr(curSlide + 1);
  changePhotos();
}

clearForAtrr();
showSlideButtons();

fbSliderPrev.addEventListener('click', moveFbSliderLeft);
fbSliderNext.addEventListener('click', moveFbSliderRight);

sliderFbLabel1.addEventListener('click', function() {
  removeAttr();
  slideFb1.setAttribute(check, '');
  changePhotos();
});

sliderFbLabel2.addEventListener('click', function() {
  removeAttr();
  slideFb2.setAttribute(check, '');
  changePhotos();
});

sliderFbLabel3.addEventListener('click', function() {
  removeAttr();
  slideFb3.setAttribute(check, '');
  changePhotos();
});

sliderFbLabel4.addEventListener('click', function() {
  removeAttr();
  slideFb4.setAttribute(check, '');
  changePhotos();
});

// --- PORTFOLIO-SLIDER ---
// coming soon
// const portfolioSliderBtnList = document.querySelectorAll('.portfolio-slider__button');
// const portfolioSliderBtnLeft = document.querySelector('.slider-button--left');
// const portfolioSliderBtnRight = document.querySelector('.slider-button--right');
// const portfolioSliderControl = document.querySelector('.portfolio-slider__slider');
//
// const mobileWidthMax = 690;
// const tabletWidthMax = 1234;
// const sliderOffsetMult = 0.84;
// const portfolioSlideNumber = 2;
//
// function getPortfolioSlideNumber() {
//
// }
