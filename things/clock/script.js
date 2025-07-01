console.log(location.pathname);

let count = 0;
let clock;

let frozen = false;
let freezeCount = 0;
let clickFrozen = false;
let clickFrozenCount = false;

function freeze() {
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

    }

    return true;
}
window.freeze = freeze;

function freezeClicking() {
    
    if (clickFrozen) return false;
    
    clickFrozen = true;
    freezeClickingButton.innerText = "Unfreeze clicking";
    freezeClickingButton.disabled = true;
    freezeButton.disabled = true;
    
}
window.freezeClicking = freezeClicking;

function tick() {
    count++;
    displayTime.innerText = `You've been looking at this page for ${count} seconds.`;
}

function startClock() {
    clock = setInterval(tick, 1000);
}

startClock();