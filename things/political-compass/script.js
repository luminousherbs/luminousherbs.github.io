alert("script.js")
import { questions } from "questions.js";
try {

console.log(location.pathname);

function createQuestion(details) {
  alert("creating " + details.question);
}

const userScores = {
  cool: 0,
  mysterious: 0,
  musical: 0,
};

for (let q of questions) {
  createQuestion(q);
}

} catch (err) {
  alert(err);
}
