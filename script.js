'use strict';
// document.querySelector('.message').textContent = 15;
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.guess').value = 24;
// console.log(document.querySelector('.guess').value);

//GUESS THE NUMBER
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highsc = 0;
let tempHigh = 0;
let sc = 10;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!😕';
    document.querySelector('body').style.backgroundColor = '#b89894';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Congratulations! Correct!🥳';
    document.querySelector('.number').textContent = guess;
    tempHigh = Number(document.querySelector('.score').textContent);
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else {
    document.querySelector('body').style.backgroundColor = '#222';
    if (guess < secretNumber) {
      document.querySelector('.message').textContent =
        'Keep Guessing! (Higher)⬆️';
    } else {
      document.querySelector('.message').textContent =
        'Keep Guessing! (Lower)⬇️';
    }
    sc--;
    if (sc > 0) {
      document.querySelector('.score').textContent = sc;
    } else {
      document.querySelector('.message').textContent = 'You Lose!👎';
      document.querySelector('.score').textContent = 0;
    }
  }
  if (tempHigh > highsc) {
    highsc = tempHigh;
    document.querySelector('.highscore').textContent = highsc;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  sc = 10;
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 10;
  document.querySelector('.guess').value = ' ';
  document.querySelector('.highscore').textContent = highsc;
  document.querySelector('.number').textContent = '?';
});
