let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const submitButton = document.getElementById('submit');
const guessInput = document.getElementById('guess');
const messageDisplay = document.getElementById('message');
const restartButton = document.getElementById('restart');

submitButton.addEventListener('click', function() {
    const userGuess = parseInt(guessInput.value);
    attempts++;
    
    if (userGuess < 1 || userGuess > 100) {
        messageDisplay.textContent = "Please enter a number between 1 and 100.";
    } else if (userGuess === randomNumber) {
        messageDisplay.textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts!`;
        submitButton.disabled = true;
        restartButton.style.display = 'inline-block';
    } else if (userGuess < randomNumber) {
        messageDisplay.textContent = "Too low! Try again.";
    } else {
        messageDisplay.textContent = "Too high! Try again.";
    }
    
    guessInput.value = '';
});

restartButton.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    messageDisplay.textContent = '';
    submitButton.disabled = false;
    restartButton.style.display = 'none';
});