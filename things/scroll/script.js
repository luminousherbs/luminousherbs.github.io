console.log(location.pathname);

const scrollHeights = [];
let finalState, initialState = {};
let scrollTimer;

function setSpeed() {
    // reset the timer for scrolling
    clearTimeout(scrollTimer);

    calculateSpeed();

    // wait 40ms, then declare scrolling to be over if the timer never got reset
    scrollTimer = setTimeout(function() {
        calculateSpeed();
    }, 40);
}

function calculateSpeed() {
    initialState = structuredClone(finalState);
    finalState = {
        height: scrollY,
        time: Date.now(),
    };

    const speed = Math.floor((
        (finalState.height - initialState.height) /
        (finalState.time   - initialState.time  )
    ) * 50);

    if (speed > 0) {
        speedField.style.width = speed + "px";
        speedField.style.backgroundColor = "green";
    } else {
        speedField.style.width = -speed + "px";
        speedField.style.backgroundColor = "red";
    }
}

window.addEventListener("scroll", function() {
    setSpeed();
}, 1000)