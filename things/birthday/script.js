console.log(location.pathname);

// html elements
birthdayField;
earlierButton;
laterButton;
submitButton;

let userLowerBound = -2208988800000;
let userUpperBound = Date.now();
let guessedDate;

function randomInteger(min, max) {
    return Math.random() * (max - min) + min;
}

function guessBirthday(lowerBound, upperBound) {
    guessedDate = randomInteger(lowerBound, upperBound);
    // if (isNaN(guessedDate.getTime())) console.log(lowerBound, upperBound);
    return guessedDate;
}

function setGuess() {
    birthdayField.textContent = formatDate(
        guessBirthday(userLowerBound, userUpperBound)
    );
}

function formatDate(dateNum) {
    return new Date(dateNum).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

earlierButton.addEventListener("click", function () {
    userUpperBound = guessedDate;
    setGuess();
});

laterButton.addEventListener("click", function () {
    userLowerBound = guessedDate;
    setGuess();
});

submitButton.addEventListener("click", function () {
    alert(`You were born on ${formatDate(guessedDate)}.`);
});

setGuess();
