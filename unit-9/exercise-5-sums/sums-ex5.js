// declare variables
const outputHtmlContainer = document.getElementById("output-html-container");
let outputHtml = "";
let numberCount = 0,
  sumResult = 0;
let number = 0;

// generate output html
outputHtml += "<h1>SUMS Version 2</h1>";
outputHtml += "<hr>";
outputHtml += "The numbers you entered were: ";
outputHtml += "<table cellpadding='0' cellspacing='0' border='0'>";
outputHtml += "  <thead><tr><th>Count</th><th>Value</th></tr></thead>";
outputHtml += "  <tbody>";

// input
while (true) {
  number = parseFloat(prompt("Enter a positive number. Enter -1 to quit"));

  // input error handling - check if the entered value is a positive integer, if not, ask for a new number to be entered.
  while (isNaN(number)) {
    number = parseInt(
      prompt("Invalid number. Re-enter a positive number. Enter -1 to quit")
    );
  }

  if (number == -1) {
    break; // break out of while loop if number is -1
  }
  sumResult += number;
  numberCount++;
  outputHtml +=
    "<tr><td>" + numberCount + "</td><td>" + number + "</td></tr>"; // add to output html
}

// add to output html
outputHtml += "</tbody></table>";
outputHtml += "Sum = " + Number(Number(sumResult).toFixed(3)) + "<br>"; // Cast number to the correct amount of decimal places (3) and, when converting back to Number, get rid of zeros.
outputHtml += "Average = " + (sumResult / numberCount).toFixed(3);

// output - update the DOM
outputHtmlContainer.innerHTML = outputHtml;
