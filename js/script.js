const buttonContacts = document.querySelector(".button-contacts");
const modalQuestion = document.querySelector(".modal-question");
const modalClose = modalQuestion.querySelector(".modal-close");
const questionForm = modalQuestion.querySelector(".modal-question__form");
const nameInput = modalQuestion.querySelector(".modal-question__user-name");
const emailInput = modalQuestion.querySelector(".modal-question__user-email");
const questionInput = modalQuestion.querySelector(".modal-question__question");

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
