'use strict';

// Selecting Elements
const score0E1 = document.querySelector('#score--0');
const score1E1 = document.getElementById('score--1');
const diceE1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
score0E1.textContent = 0;
score1E1.textContent = 0;
diceE1.classList.add('hidden');

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  // 2. Display dice
  // 3. Check for rolled 1: If true, switch to next player
});
