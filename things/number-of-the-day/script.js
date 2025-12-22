console.log(location.pathname);

const today = new Date();

const numberField = document.querySelector("h1");

function getNumberOfTheDay(day, month, year) {
    // pseudorandom number
    let x = String(Math.sqrt(day + month + year));
    return +x[x.length - 1] * (day + 7);
}

numberField.textContent = getNumberOfTheDay(
    today.getDay(),
    today.getMonth(),
    today.getFullYear()
);
