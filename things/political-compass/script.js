alert("10:53")

import { questions } from "./questions.js";

console.log(location.pathname);

const rule = document.querySelectorAll("hr")[1];

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
    card.onclick = function() {
      alert("clicked")
      for (const [key, value] of o.scores) {
        alert("looping " + key + " " + value)
        userScores[key] += value;
      }
      questionIndex++;
      createQuestion(questions[questionIndex]);
      alert("cool " + userScores.cool);
      alert("mysterious " + userScores.mysterious);
      alert("musical " + userScores.musical);
    }
    questionSpace.appendChild(card);
  }
  alert("appending")
  insertBefore(questionSpace, rule);
    alert("appended")
}

const userScores = {
  cool: 0,
  mysterious: 0,
  musical: 0,
};

const questionIndex = 0;
createQuestion(questions[questionIndex]);
