console.log(location.pathname);

// wouldn't need this if js didn't suck
// let fieldA, fieldB, fieldC, fieldXPositive, fieldXNegative;

function questionInput() {
    const res = solve({ a: fieldA.value, b: fieldB.value, c: fieldC.value });
    console.log(res);
    fieldXPositive.value = res.xPositive;
    fieldXNegative.value = res.xNegative;

    fixAllWidths([fieldA, fieldB, fieldC, fieldXPositive, fieldXNegative]);
}

function answerInput() {
    let vals = {
        a: fieldA.value,
        b: fieldB.value,
        c: fieldC.value,
        xPositive: fieldXPositive.value,
        xNegative: fieldXNegative.value,
    };
    let newVals = vals;

    delete newVals.a;
    if (solve(newVals)) {
        fieldA.value = solve(newVals);
    }
    newVals = vals;

    delete newVals.b;
    if (solve(newVals)) {
        fieldB.value = solve(newVals);
    }
    newVals = vals;

    delete newVals.c;
    if (solve(newVals)) {
        fieldC.value = solve(newVals);
    }
    newVals = vals;

    delete newVals.xPositive;
    if (solve(newVals)) {
        fieldXPositive.value = solve(newVals);
    }
    newVals = vals;

    delete newVals.xNegative;
    if (solve(newVals)) {
        fieldXNegative.value = solve(newVals);
    }
    newVals = vals;

    fixAllWidths([fieldA, fieldB, fieldC, fieldXPositive, fieldXNegative]);
}

function fixAllWidths(elements) {
    for (let e of elements) {
        e.style.width = e.value.length + 1 + "ch";
    }
}

function findA(values) {
    const aPositive = Number(
        (
            -values.c / (values.xPositive * values.xPositive) -
            values.b / values.xPositive
        ).toFixed(10)
    );
    const aNegative = Number(
        (
            -values.c / (values.xNegative * values.xNegative) -
            values.b / values.xNegative
        ).toFixed(10)
    );
    return aPositive == aNegative ? aPositive : NaN;
}

function findB(values) {
    const bPositive = Number(
        (-values.c / values.xPositive - values.a * values.xPositive).toFixed(10)
    );
    const bNegative = Number(
        (-values.c / values.xNegative - values.a * values.xNegative).toFixed(10)
    );
    return bPositive == bNegative ? bPositive : NaN;
}

function findC(values) {
    const cPositive = Number(
        (
            -(values.a * values.xPositive * values.xPositive) -
            values.b * values.xPositive
        ).toFixed(10)
    );
    const cNegative = Number(
        (
            -(values.a * values.xNegative * values.xNegative) -
            values.b * values.xNegative
        ).toFixed(10)
    );
    return cPositive == cNegative ? cPositive : NaN;
}

function findX(values) {
    return {
        xPositive:
            (-values.b +
                Math.sqrt(values.b * values.b - 4 * values.a * values.c)) /
            (2 * values.a),
        xNegative:
            (-values.b -
                Math.sqrt(values.b * values.b - 4 * values.a * values.c)) /
            (2 * values.a),
    };
}

function solve(values) {
    if (values.a === undefined) {
        return findA(values);
    } else if (values.b === undefined) {
        return findB(values);
    } else if (values.c === undefined) {
        return findC(values);
    } else if (
        values.xPositive === undefined &&
        values.xNegative === undefined
    ) {
        return findX(values);
    } else {
        return NaN;
    }
}

// listen for inputs
fieldA.addEventListener("input", questionInput);
fieldB.addEventListener("input", questionInput);
fieldC.addEventListener("input", questionInput);
fieldXPositive.addEventListener("input", answerInput);
fieldXNegative.addEventListener("input", answerInput);
