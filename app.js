const result = document.getElementById('result');
const button = document.getElementById('guess');
const number = document.getElementById('number');
const resetButton = document.getElementById('reset');
console.log(resetButton);
const remainingGuessElement = document.getElementById('remaining-text');


let remainingGuess = 4;
let theRandomNumber = Math.floor(Math.random() * 20) + 1;

button.addEventListener('click', () => {
    console.log('remainging guesses', remainingGuess);
    remainingGuess--;

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

    // result.textContent = `You are ${guess}.`;
    number.textContent = number;

    remainingGuessElement.textContent = remainingGuess;

});

resetButton.addEventListener('click', () => {
    remainingGuess = 4;
    console.log(remainingGuess);
    remainingGuessElement.textContent = remainingGuess;
    number.value = 'Number Here';
    result.textContent = '';
    
    theRandomNumber = Math.floor(Math.random() * 20) + 1;


}
);

