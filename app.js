const result = document.getElementById('result');
const button = document.getElementById('guess');
const number = document.getElementById('number');
const resetButton = document.getElementById('reset');
console.log(resetButton);
const remainingGuessElement = document.getElementById('remaining-text');
const correct1 = document.getElementById('correct-amount');
const failed1 = document.getElementById('failed-amount');
let remainingGuess = 4;
let theRandomNumber = Math.floor(Math.random() * 20) + 1;
let correct = 0;
let failed = 0;
console.log(theRandomNumber);

button.addEventListener('click', () => {
    console.log('remainging guesses', remainingGuess);
    remainingGuess--;

    let userGuess = Number(number.value);
    console.log(userGuess);

    if (userGuess === theRandomNumber) {
        result.textContent = 'You are correct!';
        correct++;
        console.log(correct);
        correct1.textContent = `The amount of times correct: ${correct}`
    } else

    if (userGuess > theRandomNumber) {
        result.textContent = 'You are too high!';
    } else

    if (userGuess < theRandomNumber) {
        result.textContent = 'You are too low!';
    }
    
    if (remainingGuess === 0){
        button.style.display = 'none';
        failed++;
        console.log(failed);
        failed1.textContent = `The amount of times failed: ${failed}`
    }

    number.textContent = number;
    remainingGuessElement.textContent = remainingGuess;
});

resetButton.addEventListener('click', () => {
    remainingGuess = 4;
    console.log(remainingGuess);
    remainingGuessElement.textContent = remainingGuess;
    number.value = 'Number Here';
    result.textContent = '';
    button.style.display = '';
    theRandomNumber = Math.floor(Math.random() * 20) + 1;
});

