function getRandomInt() {
    return Math.floor(Math.random() * 100) + 1;
}

let randomNumber = getRandomInt();
const display = document.getElementById('tip');

function checkGuess() {
    const userGuess = Number(document.getElementById('guessInput').value);

    if (userGuess === randomNumber) {
        display.textContent = 'Congratulations! You guessed the number!';
        randomNumber = getRandomInt();
    } 
    else if (userGuess < randomNumber) {
        if (randomNumber - userGuess <= 5) {
            display.textContent = 'You are very close!';
        } else {
            display.textContent = 'Too low! Try again.';
        }
    } 
    else {
        display.textContent = 'Too high! Try again.';
    }
}
