console.log(location.pathname);

const displayTime = document.querySelector("#display-time");
const freezeButton = document.querySelector("#freeze-button");
const displayFreezes = document.querySelector("#display-freezes");
const freezeClickingButton = document.querySelector("#freeze-clicking-button");

let count = 0;
let clock;
let frozen = false;
let freezeCount = 0;
let clickFrozen = false;
let clickFrozenCount = false;

window.freeze = function () {
    if (clickFrozen) return false;

    if (frozen) {
        frozen = false;
        freezeButton.innerText = "Freeze time";
        startClock();
    } else {
        frozen = true;
        freezeButton.innerText = "Unfreeze time";
        clearInterval(clock);

        freezeCount++;
        displayFreezes.innerText = `You've frozen time ${freezeCount} times.`;
        freezeClickingButton.hidden = false;
    }

    return true;
};

window.freezeClicking = function () {
    if (clickFrozen) return false;

    clickFrozen = true;
    freezeClickingButton.innerText = "Unfreeze clicking";
    document
        .querySelectorAll("button")
        .forEach((button) => (button.disabled = true));
};

function tick() {
    count++;
    displayTime.innerText = `You've been looking at this page for ${count >= 100000 ? `ages` : `${count} seconds`}.`;
}

function startClock() {
    clock = setInterval(tick, 1000);
}

startClock();
