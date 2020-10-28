const buttonContacts = document.querySelector(".button-contacts");
const modalQuestion = document.querySelector(".modal-question");
const modalClose = modalQuestion.querySelector(".modal-close");
const questionForm = modalQuestion.querySelector(".modal-question__form");
const nameInput = modalQuestion.querySelector(".modal-question__user-name");
const emailInput = modalQuestion.querySelector(".modal-question__user-email");


buttonContacts.addEventListener("click", function(evt) {
  modalQuestion.classList.add("modal-show");
  nameInput.focus();
});

modalClose.addEventListener("click", function(evt) {
  modalQuestion.classList.remove("modal-show");
  modalQuestion.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27)
  {
    if(modalQuestion.classList.contains("modal-show")) {
      evt.preventDefault();
      modalQuestion.classList.remove("modal-show");
      modalQuestion.classList.remove("modal-error");
    }
  }
});

questionForm.addEventListener("submit", function(evt) {
  if (!nameInput.value || !emailInput.value) {
    evt.preventDefault();
    modalQuestion.classList.remove("modal-error");
    modalQuestion.offsetWidth = modalQuestion.offsetWidth;
    modalQuestion.classList.add("modal-error");
  }
});
