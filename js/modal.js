var modalLink = document.querySelector(".search-title");
var modalForm = document.querySelector(".search-form");
var checkInForm = document.querySelector("[name=check-in-date]");
var checkOutForm = document.querySelector("[name=check-out-date]")

modalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalForm.classList.toggle("modal-show");
  checkInForm.focus();
});

modalForm.addEventListener("submit", function (evt) {
  if (!checkInForm.value || !checkOutForm.value) {
    evt.preventDefault();
    modalForm.classList.remove("modal-error");
    modalForm.offsetWidth = modalForm.offsetWidth;
    modalForm.classList.add("modal-error");
  }
});
