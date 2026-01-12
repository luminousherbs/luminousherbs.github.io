import { randomPhrase, fillerWord } from "./filler.js";

export async function parseFeed(
    category,
    showDescription = true,
    showDate = false,
) {
    console.log("parsing");

    const elements = [];

    return fetch(`${category}/feed.xml`)
        .then((response) => response.text())
        .then((str) => {
            // convert the feed into javascript objects representing each item
            const parser = new DOMParser();
            const xml = parser.parseFromString(str, "application/xml");
            const items = xml.querySelectorAll("item");

            items.forEach((item) => {
                const card = document.createElement("a");
                card.className = "page-card";
                card.href = item.querySelector("guid").textContent;

                const title = document.createElement("h2");
                title.innerText = item.querySelector("title").textContent;

                const subheading = document.createElement("p");

                if (showDescription) {
                    subheading.innerText +=
                        item.querySelector("description")?.textContent ??
                        "Bad code only.";
                }

                if (showDate) {
                    subheading.innerText += new Date(
                        item.querySelector("pubDate").textContent,
                    ).toLocaleDateString();
                }

                card.appendChild(title);
                card.appendChild(subheading);
                elements.push(card);
            });
            return elements;
        });
}

export async function createFeed(
    feed,
    showDescription = true,
    showDate = false,
) {
    console.log("creating");
    // given a <div>, render a feed inside it
    parseFeed(".", showDescription).then((xml) => {
        xml.forEach((card) => {
            feed.appendChild(card);
            feed.appendChild(document.createElement("br"));
        });
    });
}
