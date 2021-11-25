"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
console.log(btnOpenModal);
function openModal() {
  console.log("button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

function closeModel() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
btnCloseModal.addEventListener("click", closeModel);

overlay.addEventListener("click", closeModel);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModel();
    }
  }
});
