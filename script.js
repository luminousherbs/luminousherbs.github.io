import { createFeed } from "/assets/scripts/feed.js";

console.log(location.pathname);

// html elements
const feed = document.querySelector("#feed");

createFeed(feed);
