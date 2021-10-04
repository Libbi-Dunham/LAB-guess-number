const result = document.getElementById('result');
const button = document.getElementById('guess');
const number = document.getElementById('number');

let guessNum = 10
let theRandomNumber = Math.floor(Math.random() * 20) + 1;

button.addEventListener('click', () => {
  guessNum--;
  console.log(guessNum);
  let userGuess = Number(number.value);
  console.log(userGuess);

  if (userGuess === theRandomNumber) {
    result = 'You are correct!';
  } else

  if (userGuess > theRandomNumber) {
    result = 'You are too high!'
  } else

  if (userGuess === theRandomNumber) {
    result = 'You are too low!'
  } else

  console.log(guessNum);

});

reset.addEventListener('click', () => {
  guessNum = 10;

}
)

