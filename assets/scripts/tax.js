import { randomChance } from "/assets/scripts/random.js";

function year() {
    // Date.now() -> number of milliseconds since 1970
    return 1970 + Date.now() / (1000 * 60 * 60 * 24 * 365);
}

function nextMarch() {
    const currentYear = year();
    const currentMonth = 12 * (currentYear % 1) + 1;
    return `March 31st, ${
        Math.floor(currentYear) + (currentMonth > 3 ? 1 : 0)
    }`;
}

const message = `You have too much money! You must submit your tax return by ${nextMarch()} or face prosecution.`;

if (+localStorage.coins >= 500 && randomChance(1 / 5)) {
    if (confirm(message)) {
        location.href = "/things/tax/";
    }
}
