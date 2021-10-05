const result = document.getElementById('result');
const button = document.getElementById('guess');
const number = document.getElementById('number');
const remainingGuessElement = document.getElementById('remaining-text');

// let guessNum = 10;
let remainingGuess = 4;
let theRandomNumber = Math.floor(Math.random() * 20) + 1;

button.addEventListener('click', () => {
  console.log('remainging guesses',remainingGuess);
  // guessNum--;
  remainingGuess--;
  // console.log(guessNum);
  let userGuess = Number(number.value);
  console.log(userGuess);

  if (userGuess === theRandomNumber) {
    result.textContent = 'You are correct!';
  } else

  if (userGuess > theRandomNumber) {
    result.textContent = 'You are too high!';
  } else

  if (userGuess < theRandomNumber) {
    result.textContent = 'You are too low!';
  }

  // console.log(guessNum);

  const resultText = 'You are ${guess}.';
  number.textContent = number;

  remainingGuessElement.textContent = remainingGuess

});

reset.addEventListener('click', () => {
  guessNum = 10;

}
)

