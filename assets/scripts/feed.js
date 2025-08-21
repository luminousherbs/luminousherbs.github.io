export async function parseFeed(category, showDescription = true, showDate = false) {

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
                subheading.innerText += item.querySelector("description").textContent;
            }

            if (showDate) {
                subheading.innerText += new Date(item.querySelector("pubDate").textContent).toLocaleDateString()
            }


            card.appendChild(title);
            card.appendChild(subheading);
            elements.push(card);
        });
        return elements;
    });

}

export function createFeed(feed) {
    // given a <div>, render a feed inside it
    parseFeed(".").then((xml) => {
        xml.forEach((card) => {
            feed.appendChild(card);
            feed.appendChild(document.createElement("br"));
        })
    })
}