alert("9:22")

import { questions } from "./questions.js";

console.log(location.pathname);

function createQuestion(details) {
  // delete the container to clear the previous question
  questionSpace.remove();
  const questionSpace = document.createElement("div");
  questionSpace.id = "questionSpace";
  const heading = document.createElement("h2");
  heading.textContent = details.question;
  questionSpace.appendChild(heading);
  for (let o of details.options) {
    const card = document.createElement("button");
    const image = document.createElement("img");
    image.src = o.image;
    card.appendChild(image);
    card.innerText += o.title
    card.addEventListener("onclick", function() {
      alert(o.scores.cool, o.scores.mysterious, o.scores.musical)
    })
    questionSpace.appendChild(card);
  document.body.appendChild(questionSpace);
  }
}

const userScores = {
  cool: 0,
  mysterious: 0,
  musical: 0,
};

for (let q of questions) {
  createQuestion(q);
}
