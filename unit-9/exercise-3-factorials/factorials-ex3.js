// declare variables
const outputHtmlContainer = document.getElementById("output-html-container");
let outputHtml = "";

// calculate factorial using for loop
function fact(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

// calculate factorial using recursion
// see https://www.freecodecamp.org/news/recursion-in-javascript/ for more details
function factorial(num) {
  // if number is 0
  if (num === 0) {
    return 1;
  }
  // if number is positive
  else {
    return num * factorial(num - 1);
  }
}

// input
let noFacts = parseInt(
  prompt("Enter the number of factorials that you want generated. Valid values are between 0 and 20: ")
);
// input error handling
// noFacts = entered value to prompt window
while (isNaN(noFacts) || noFacts <= 0 || noFacts > 20) {
  noFacts = parseInt(
    prompt("Invalid number. Re-enter a positive number between 0 and 20: ")
  );
}

// generate output html
outputHtml += "<h1>Factorial Count Down</h1>";
outputHtml += "<hr>";
for (let i = noFacts; i >= 1; i--) {
  outputHtml += i + "! = " + factorial(i) + "<br>";
}

// output - update the DOM
outputHtmlContainer.innerHTML = outputHtml;
