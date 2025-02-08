// declare variables
const outputHtmlContainer = document.getElementById('output-html-container');
let outputHtml = '';
let numberSize=0, sumResult=0;

// input
let numbersAsString = prompt("Enter a series of integers separated by a space, e.g. '1 2 3 4...'");

let numbers = numbersAsString.split(" "); // split the input string into an array

numbers.forEach(function(number, index){ // loop over the array
  const num = parseInt(number);
  if (!isNaN(num)) {
    numberSize++;
    sumResult += num;
  }
});

// generate output html
outputHtml += '<h1>Sums</h1>';
outputHtml += 'The values entered were: ' + numbersAsString;
outputHtml += '<br>';
outputHtml += 'Sum = ' + sumResult + '<br>';
outputHtml += 'Average = ' + sumResult/numberSize;

// output - update the DOM
outputHtmlContainer.innerHTML = outputHtml;

// Display results in the console
console.log('%cUNIT9 Exercise 2 - Sums (version 2)', 'font-size: 12px; font-weight: 700, color:white; background-color:blue;');
console.log('The values entered were: [' + numbers + "]" + '\n' + 'Sum = ' + sumResult + '\n' + 'Average = ' + sumResult/numberSize);