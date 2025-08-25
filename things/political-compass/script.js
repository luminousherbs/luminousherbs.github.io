alert("script4.js")
/*
// Catch runtime JS errors
window.onerror = function (message, source, lineno, colno, error) {
  alert(`Error: ${message}\nSource: ${source}\nLine: ${lineno}, Column: ${colno}\nStack: ${error?.stack}`);
  return false; // Let the error propagate to the console too
};

// Catch script loading or other resource loading errors
window.addEventListener('error', function (event) {
  if (event.target && (event.target.src || event.target.href)) {
    alert(`Resource Load Error: ${event.target.src || event.target.href}`);
  }
}, true); // Use capture to catch errors on elements like <script>, <link>, <img>

// Catch unhandled promise rejections
window.addEventListener('unhandledrejection', function (event) {
  alert(`Unhandled Promise Rejection: ${event.reason}`);
});
*/
import { questions } from "./questions.js";
alert("after import")
alert(questions.toString())
console.log(location.pathname);

function createQuestion(details) {
  alert("creating " + details.question);
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
