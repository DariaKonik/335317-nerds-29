const buttonContacts = document.querySelector(".button-contacts");
const modalQuestion = document.querySelector(".modal-question");
const modalClose = modalQuestion.querySelector(".modal-close");
const questionForm = modalQuestion.querySelector(".modal-question__form");
const nameInput = modalQuestion.querySelector(".modal-question__user-name");
const emailInput = modalQuestion.querySelector(".modal-question__user-email");
const questionInput = modalQuestion.querySelector(".modal-question__question");
const mapOffice = document.querySelector("iframe.contacts__map");
const promoSection = document.querySelector(".promo");
const firstSliderButton = promoSection?.querySelector(".slider-controls__button:first-child");
const secondSliderButton = promoSection?.querySelector(".slider-controls__button:nth-child(2)");
const thirdSliderButton = promoSection?.querySelector(".slider-controls__button:nth-child(3)");
const firstSlide = promoSection?.querySelector(".slider__item:first-child");
const secondSlide = promoSection?.querySelector(".slider__item:nth-child(2)");
const thirdSlide = promoSection?.querySelector(".slider__item:nth-child(3)");

mapOffice.style.display = "block";

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

buttonContacts.addEventListener("click", function(evt) {
  evt.preventDefault();
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


questionForm.addEventListener("submit", function() {
   if (!nameInput.value)
   {
    nameInput.classList.add("invalid");
    nameInput.addEventListener("focus", function() {
      nameInput.classList.remove("invalid");
      }, {once: true});
   }
 });

questionForm.addEventListener("submit", function() {
   if (!emailInput.value)
   {
    emailInput.classList.add("invalid");
    emailInput.addEventListener("focus", function() {
      emailInput.classList.remove("invalid");
      }, {once: true});
   }
 });


function removeActiveClass() {
  const activeSliderButton = promoSection?.querySelector(".slider-controls__button--active");
  const activeSlide = promoSection?.querySelector(".slider__item--current");
  activeSlide.classList.remove("slider__item--current");
  activeSliderButton.classList.remove("slider-controls__button--active");
};

if (secondSliderButton!=null) {
  secondSliderButton.addEventListener("click", function() {
    removeActiveClass();
    secondSlide.classList.add("slider__item--current");
    secondSliderButton.classList.add("slider-controls__button--active");
    });
};

if (firstSliderButton!=null) {
  firstSliderButton.addEventListener("click", function () {
    removeActiveClass();
    firstSlide.classList.add("slider__item--current");
    firstSliderButton.classList.add("slider-controls__button--active");
  });
};

if (thirdSliderButton!=null) {
  thirdSliderButton.addEventListener("click", function () {
    removeActiveClass();
    thirdSlide.classList.add("slider__item--current");
    thirdSliderButton.classList.add("slider-controls__button--active");
  });
};
