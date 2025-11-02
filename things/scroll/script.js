console.log(location.pathname);

const scrollHeights = [];
let finalState,
    initialState = {};
let scrollTimer;

function setValues() {
    // reset the timer for scrolling
    clearTimeout(scrollTimer);

    calculateSpeed();
    // calculateAcceleration();

    // wait 40ms, then declare scrolling to be over if the timer never got reset
    scrollTimer = setTimeout(function () {
        calculateSpeed();
        // calculateAcceleration();
    }, 40);
}

function calculateSpeed() {
    initialState = structuredClone(finalState);
    finalState = {
        height: scrollY,
        time: Date.now(),
    };

    const speed = Math.floor(
        ((finalState.height - initialState.height) /
            (finalState.time - initialState.time)) *
            50
    );

    finalState.speed = speed;

    const acceleration =
        speed === 0
            ? 0
            : Math.floor(
                  ((finalState.speed - initialState.speed) /
                      (finalState.time - initialState.time)) *
                      50
              );

    finalState.acceleration = acceleration;

    if (speed > 0) {
        speedField.style.width = speed + "px";
        speedField.style.backgroundColor = "green";
    } else {
        speedField.style.width = -speed + "px";
        speedField.style.backgroundColor = "red";
    }

    if (acceleration > 0) {
        accelerationField.style.width = acceleration + "px";
        accelerationField.style.backgroundColor = "blue";
    } else {
        accelerationField.style.width = -acceleration + "px";
        accelerationField.style.backgroundColor = "yellow";
    }

    // calculateAcceleration();
}

window.addEventListener(
    "scroll",
    function () {
        setValues();
    },
    1000
);
