alert("script2.js")
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

import { questions } from "./questions";
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
