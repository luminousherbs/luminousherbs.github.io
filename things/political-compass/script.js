// alert("12:35")

import { questions } from "./questions.js";

console.log(location.pathname);

const rule = document.querySelectorAll("hr")[1];

function createQuestion(details) {
  // alert("create question")
  // alert(questionSpace)
  // delete the container to clear the previous question
  questionSpace.innerHTML = "";
  // alert("removed")
  const heading = document.createElement("h2");
  heading.textContent = details.question;
  questionSpace.appendChild(heading);
  for (let o of details.options) {
    // alert("looping option")
    const card = document.createElement("button");
    const image = document.createElement("img");
    image.src = o.image;
    card.appendChild(image);
    card.innerText += o.title
    card.onclick = function() {
      // alert("clicked")
      for (const key in o.scores) {
        const value = o.scores[key];
        // alert("looping " + key + " " + value);
        userScores[key] += value;
        // alert(userScores[key])
      }
      questionIndex++;
      // alert("incremented")
      try {
        // alert("inside try")
      createQuestion(questions[questionIndex]);
      } catch (err) {
                    alert("inside catch");
        alert(err);
      }
      // alert("cool " + userScores.cool);
      // alert("mysterious " + userScores.mysterious);
      // alert("musical " + userScores.musical);
    }
    questionSpace.appendChild(card);
  }
  // alert("appending")
  // insertBefore(questionSpace, rule);
    // alert("appended")
}
window.createQuestion = createQuestion;

const userScores = {
  cool: 0,
  mysterious: 0,
  musical: 0,
};

let questionIndex = 0;
createQuestion(questions[questionIndex]);
