// declare variables
const outputHtmlContainer = document.getElementById('output-html-container');
let outputHtml = '';
let sumResult = 0;
const numberSize = 5;
let numbers = [];

outputHtml += '<h1>Sums</h1>';
outputHtml += 'The values entered were: ';

for (let i=0; i<numberSize; i++){
  let number = parseInt(prompt("Enter an " + numberSize + " integer number(s): "));
  sumResult += number;
  outputHtml += number + ' ';
  numbers.push(number);
}

outputHtml += '<br>';
outputHtml += 'Sum = ' + sumResult + '<br>';
outputHtml += 'Average = ' + sumResult/numberSize;

// output - update the DOM
outputHtmlContainer.innerHTML = outputHtml;

// Display results in the console
console.log('%cUNIT9 Exercise 2 - Sums (version 1)', 'font-size: 12px; font-weight: 700, color:white; background-color:blue;');
console.log('The values entered were: [' + numbers + "]" + '\n' + 'Sum = ' + sumResult + '\n' + 'Average = ' + sumResult/numberSize);