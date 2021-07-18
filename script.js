"use strict";

const modal = document.querySelector(".modal");
const guess = document.querySelector(".guess");
const dice = document.querySelector(".dice");

const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
const guessModal = document.querySelector(".guess-modal");
const diceModal = document.querySelector(".dice-modal");
const login = document.querySelector(".login-modal");
const mainContainer = document.querySelector(".container-modal");
const clickGuess = document.querySelector(".click-guess");
const clickDice = document.querySelector(".click-dice");

function myFunction() {
  window.location.href = "modal.html";
}

const openGuess = function () {
  window.location.href = "guess.html";
};

const openDice = function () {
  window.location.href = "dice.html";
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const closeGuess = function () {
  guess.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

// btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
login.addEventListener("click", myFunction);

document.addEventListener("keydown", function (e) {
  //   console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
