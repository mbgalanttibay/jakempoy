`use strict`;
const hand = document.querySelectorAll(`.play`);
const rock = document.querySelector(`#rock`).textContent;
const scissors = document.querySelector(`#scissors`).textContent;
const paper = document.querySelector(`#paper`).textContent;
const player1 = document.querySelector(`#player1`);
const comp = document.querySelector(`#comp`);
const result = document.querySelector(`.result`);
const vsInput = document.querySelector(`.vsInput`);
const username = document.querySelector(`#username`);
const overlay = document.querySelector(`.overlay`);
console.log(rock, scissors, paper, hand);

// const displayInput = function () {};

const displayInput = function (e) {
  player1.value = e.target.textContent;
  comp.value = compInput();
  logThis();
};
const logThis = function () {
  if (
    (player1.value === rock && comp.value === scissors) ||
    (player1.value === scissors && comp.value === paper) ||
    (player1.value === paper && comp.value === rock)
  ) {
    result.textContent = `You Win!! 🎉🎉`;
  } else if (
    (comp.value === rock && player1.value === scissors) ||
    (comp.value === scissors && player1.value === paper) ||
    (comp.value === paper && player1.value === rock)
  ) {
    result.textContent = `You Lost!! ☠️☠️`;
  } else {
    result.textContent = `Again`;
  }
};
for (let i = 0; i < hand.length; i++) {
  hand[i].addEventListener(`click`, displayInput);
}

function compInput() {
  const randomNumber = Math.trunc(Math.random() * 3 + 1);
  let play;
  if (randomNumber === 1) {
    play = rock;
  } else if (randomNumber === 2) {
    play = scissors;
  } else if (randomNumber === 3) {
    play = paper;
  }
  return play;
}

username.addEventListener(`keypress`, function (e) {
  if (e.keyCode === 13) {
    console.log(username.value);
    vsInput.textContent = `${username.value} VS Computer`;
    overlay.classList.add(`hidden`);
  }
});
