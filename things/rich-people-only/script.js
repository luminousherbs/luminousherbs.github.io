console.log(location.pathname);

function createPoorText() {
    const poorText = document.createDocumentFragment();

    const poorTitle = document.createElement("h2");
    poorTitle.textContent = "You are not rich.";

    const poorDescription = document.createElement("p");
    poorDescription.textContent = "Come back when you have at least 100 coins.";

    poorText.append(poorTitle, poorDescription);
    return poorText;
}

function createRichText() {
    const richText = document.createDocumentFragment();

    const richTitle = document.createElement("h2");
    richTitle.textContent = "Congratulations! You are rich.";

    const richDescription = document.createElement("p");
    richDescription.textContent = "You may bask in your wealth and glory.";

    richText.append(richTitle, richDescription);
    return richText;
}

function getCoins() {
    return +localStorage.getItem("coins");
}

function isRich() {
    return getCoins() >= 100;
}

// determine what text to use and insert it before the <hr>
const text = isRich() ? createRichText() : createPoorText();
end.parentNode.insertBefore(text, end);
