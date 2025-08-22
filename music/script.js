console.log(location.pathname);


function createItem(item) {

    const card = document.createElement("a");
    card.className = "page-card";
    card.href = `${item.querySelector("guid").textContent}/song.m4a`;
    card.download = item.querySelector("guid").textContent;

    const title = document.createElement("h2");
    title.innerText = item.querySelector("title").textContent;

    const date = document.createElement("p");
    // convert date to user's preferred date format
    date.innerText = new Date(item.querySelector("pubDate").textContent).toLocaleDateString();
    
    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = `${item.querySelector("guid").textContent}/song.m4a`;

    const br = document.createElement("br");

    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(audio);
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
        console.log(items)
        items.forEach((item) => {
            const title = item.querySelector("title").textContent;
            const link = item.querySelector("link").textContent;
            console.log(title, link);
            createItem(item);
        });
  });
}

parseFeed();