const buttonContacts = document.querySelector(".button-contacts");
const modalQuestion = document.querySelector(".modal-question");
const modalClose = modalQuestion.querySelector(".modal-close");
const questionForm = modalQuestion.querySelector(".modal-question__form");
const nameInput = modalQuestion.querySelector(".modal-question__user-name");
const emailInput = modalQuestion.querySelector(".modal-question__user-email");
const questionInput = modalQuestion.querySelector(".modal-question__question");
const promoSection = document.querySelector(".promo");
const firstSliderButton = promoSection.querySelector(".slider-controls__button:first-child");
const secondSliderButton = promoSection.querySelector(".slider-controls__button:nth-child(2)");
const thirdSliderButton = promoSection.querySelector(".slider-controls__button:nth-child(3)");
const firstSlide = promoSection.querySelector(".slider__item:first-child");
const secondSlide = promoSection.querySelector(".slider__item:nth-child(2)");
const thirdSlide = promoSection.querySelector(".slider__item:nth-child(3)");
const sliderWrapper = document.querySelector(".first-section-wrapper");

let isStorageSupport = true;
let storedName = "";
let storedEmail = "";

try {
  storedName = localStorage.getItem("name");
  storedEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

function hideModal() {
  modalQuestion.classList.remove("modal-show");
  modalQuestion.classList.remove("modal-error");
}

buttonContacts.addEventListener("click", function() {
  modalQuestion.classList.add("modal-show");
  if (isStorageSupport) {
    emailInput.value = storedEmail;
    nameInput.value = storedName;
    questionInput.focus();
  } else {
   nameInput.focus();
 }
});

modalClose.addEventListener("click", function() {
  hideModal();
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27)
  {
    if(modalQuestion.classList.contains("modal-show")) {
      evt.preventDefault();
      hideModal();
    }
  }
});

questionForm.addEventListener("submit", function(evt) {
  if (!nameInput.value || !emailInput.value)
  {
    evt.preventDefault();
    modalQuestion.classList.remove("modal-error");
    modalQuestion.offsetWidth = modalQuestion.offsetWidth;
    modalQuestion.classList.add("modal-error");
  } else {
    if (isStorageSupport)
    {
      localStorage.setItem("name", nameInput.value);
      localStorage.setItem("email", emailInput.value);
    }
  }
});

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
