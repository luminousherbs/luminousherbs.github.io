console.log(location.pathname);

const taxRate = 0.2;

function coins() {
    return +localStorage.coins;
}

function calculateTax(money) {
    return money * (1 - taxRate) < 250 ? money * taxRate : money - 249;
}

function richText() {
    return `You currently have ${coins()} coins, which is too many. Press the button below to submit your tax returns and pay ${calculateTax(
        coins()
    )} coins to the government.`;
}

function poorText() {
    return `You don't need to pay tax.`;
}

// logic
if (coins() >= 250) {
    messageBox.innerText = richText();
    button.disabled = false;
} else {
    messageBox.innerText = poorText();
    button.disabled = true;
}

button.addEventListener("click", function () {
    if (coins() >= 250) {
        localStorage.coins = coins() - calculateTax(coins());
        alert("Your tax has been paid successfully.");
    }
    location.reload();
});
