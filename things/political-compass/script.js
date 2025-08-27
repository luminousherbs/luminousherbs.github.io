alert("10:03")

import { questions } from "./questions.js";

console.log(location.pathname);

const rule = document.querySelector("hr");

function createQuestion(details) {
  alert("create question")
  alert(questionSpace)
  // delete the container to clear the previous question
  questionSpace.innerHTML = "";
  alert("removed")
  const heading = document.createElement("h2");
  heading.textContent = details.question;
  questionSpace.appendChild(heading);
  for (let o of details.options) {
    alert("looping option")
    const card = document.createElement("button");
    const image = document.createElement("img");
    image.src = o.image;
    card.appendChild(image);
    card.innerText += o.title
    card.addEventListener("onclick", function() {
      alert(o.scores.cool, o.scores.mysterious, o.scores.musical)
    })
    questionSpace.appendChild(card);
  }
  alert("appending")
  rule.after(questionSpace);
    alert("appended")
}

const userScores = {
  cool: 0,
  mysterious: 0,
  musical: 0,
};

const questionIndex = 0;
createQuestion(questionIndex);
