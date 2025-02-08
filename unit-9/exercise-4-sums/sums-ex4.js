// declare variables
const outputHtmlContainer = document.getElementById("output-html-container");
let outputHtml = "";

let number = 0;
let sumResult = 0;
let numberCount = 0;

// generate output html
outputHtml += "<h1>SUMS Version 2</h1>";
outputHtml += "The values you entered were: "; // + number that has been entered into the prompt

// input
while (true) {
  number = parseInt(prompt("Enter a positive integer. Enter -1 to quit"));

  // input error handling - check if the entered value is a positive integer, if not, ask for a new number to be entered.
  while (isNaN(number)) {
    number = parseInt(
      prompt("Invalid number. Re-enter a positive number. Enter -1 to quit")
    );
  }

  if (number == -1) {
    break; // break out of while loop if number is -1
  }
  outputHtml += number + " "; // add to outputHtml

  sumResult += number;
  numberCount++;
}

// add to output html
outputHtml += "<br>";
outputHtml += "Number Count = " + numberCount + "<br>";
outputHtml += "Sum = " + sumResult.toFixed(3) + "<br>";
outputHtml += "Average = " + (sumResult / numberCount).toFixed(3);

// output - update the DOM
outputHtmlContainer.innerHTML = outputHtml;
