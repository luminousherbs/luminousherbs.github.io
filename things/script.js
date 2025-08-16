console.log(location.pathname);

// html elements
feed;


function createItem(item) {

    const card = document.createElement("a");
    card.className = "page-card";
    card.href = item.querySelector("guid").textContent;

    const title = document.createElement("h2");
    title.innerText = item.querySelector("title").textContent;
    

    const description = document.createElement("p");
    description.innerText = (
        item.querySelector("description").textContent
        +
        "\n"
        +
        new Date(item.querySelector("pubDate").textContent).toLocaleDateString()
    );

    const br = document.createElement("br");

    card.appendChild(title);
    card.appendChild(description);
    feed.appendChild(card);
    feed.appendChild(br);

}

function parseFeed() {
    fetch("feed.xml")
    .then((response) => response.text())
    .then((str) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(str, "application/xml");
        const items = xml.querySelectorAll("item");
        items.forEach((item) => {
            createItem(item);
        });
  });
}

parseFeed();