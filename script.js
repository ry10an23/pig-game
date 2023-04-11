'use strict';

// Selecting Elements
const score0E1 = document.querySelector('#score--0');
const score1E1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
score0E1.textContent = 0;
score1E1.textContent = 0;
diceEl.classList.add('hidden');

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `./imgs/dice-${dice}.png`;

  // 3. Check for rolled 1: If true, switch to next player
});
