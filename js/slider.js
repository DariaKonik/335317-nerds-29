const promoSection = document.querySelector(".promo");
const firstSliderButton = promoSection.querySelector(".slider-controls__button:first-child");
const secondSliderButton = promoSection.querySelector(".slider-controls__button:nth-child(2)");
const thirdSliderButton = promoSection.querySelector(".slider-controls__button:nth-child(3)");
const firstSlide = promoSection.querySelector(".slider__item:first-child");
const secondSlide = promoSection.querySelector(".slider__item:nth-child(2)");
const thirdSlide = promoSection.querySelector(".slider__item:nth-child(3)");
const sliderWrapper = document.querySelector(".first-section-wrapper");

function removeActiveClass() {
  const activeSliderButton = promoSection.querySelector(".slider-controls__button--active");
  const activeSlide = promoSection.querySelector(".slider__item--current");
  activeSlide.classList.remove("slider__item--current");
  activeSliderButton.classList.remove("slider-controls__button--active");
};

secondSliderButton.addEventListener("click", function() {
  removeActiveClass();
  secondSlide.classList.add("slider__item--current");
  sliderWrapper.classList.remove("promo-wrapper-1");
  sliderWrapper.classList.remove("promo-wrapper-3");
  sliderWrapper.classList.add("promo-wrapper-2");
  secondSliderButton.classList.add("slider-controls__button--active");
  });

firstSliderButton.addEventListener("click", function (event) {
  removeActiveClass();
  firstSlide.classList.add("slider__item--current");
  sliderWrapper.classList.remove("promo-wrapper-2");
  sliderWrapper.classList.remove("promo-wrapper-3");
  sliderWrapper.classList.add("promo-wrapper-1");
  firstSliderButton.classList.add("slider-controls__button--active");
});

thirdSliderButton.addEventListener("click", function () {
  removeActiveClass();
  thirdSlide.classList.add("slider__item--current");
  sliderWrapper.classList.remove("promo-wrapper-1");
  sliderWrapper.classList.remove("promo-wrapper-2");
  sliderWrapper.classList.add("promo-wrapper-3");
  thirdSliderButton.classList.add("slider-controls__button--active");
});
