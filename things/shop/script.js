console.log(location.pathname);

const prices = {
    "Cool hat": 5,
    "Cooler hat": 20,
    "Coolest hat": 50,
};

function getCoins() {
    return +localStorage.coins || 0;
}
window.getCoins = getCoins;

function buy(item) {
    const price = prices[item];
    let coins = getCoins();

    if (coins < price) return false;

    coins -= price;
    localStorage.setItem("coins", coins);
    localStorage.setItem(item, (+localStorage[item] || 0) + 1);
    updateDisplay();
}
window.buy = buy;

function updateDisplay() {
    output.innerText = `You have ${getCoins()} coins.`;
    itemsDisplay.innerHTML = "";
    for (const [key, value] of Object.entries(prices)) {
        // surely value and key are the wrong way round?
        const count = +localStorage[key] ?? 0;
        if (count) itemsDisplay.innerHTML += `${key}: ${count}<br>`;
    }
    updateAffordable();
}
window.updateDisplay = updateDisplay;

function updateAffordable() {
    for (const [key, value] of Object.entries(prices)) {
        console.log(value, value > getCoins());
        if (value > getCoins()) {
            // special case where `getElementById` is required
            document.getElementById(
                key
            ).children[2].firstChild.disabled = false;
            console.log(
                document.getElementById(key),
                document.getElementById(key).children,
                document.getElementById(key).children[2],
                document.getElementById(key).children[2].firstChild
            );
        } else {
            // special case where `getElementById` is required
            document.getElementById(key).children[2].firstChild.disabled = true;
        }
    }
}

function addCoins(number) {
    let coins = getCoins();
    coins += number;
    localStorage.coins = coins;
    updateDisplay();
}

// define elementS
getCoin.addEventListener("click", () => {
    addCoins(1);
});
updateDisplay();
