const messageButton = document.querySelector(".contacts__button");
messageButton.addEventListener("click", () => {
  openForm(formContaner);
});
const formContaner = document.querySelector(".form");

function openForm(form) {
  form.classList.toggle("form__open");
}
const submitButton = formContaner.querySelector(".form__button");
submitButton.addEventListener("click", () => {
  closeForm(formContaner);
});

function closeForm(form) {
  form.preventDefault();
  form.classList.remove("form__open");
}
