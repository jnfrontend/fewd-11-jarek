// declare variables
const outputHtmlContainer = document.getElementById('output-html-container');
let outputHtml = '';
// Empty variable for stars;
let stars = "";

// input
let noStars = parseInt(prompt("Enter a positive number of stars: "));
// input error handling
while (isNaN(noStars) || noStars <= 0) {
  noStars = parseInt(prompt("Invalid number. Re-enter a positive number of stars: "));
}



// generate output html
outputHtml += '<h1>Stars</h1>';
outputHtml += '<hr>';
for (let i = 0; i < noStars; i++) {
  outputHtml += '*';
  // Print stars in single line in console output;
  stars += '*';
}  
outputHtml += '<hr>';
outputHtml += '<h2>' + 'Pretty'.toUpperCase() + '</h2>';

// output - update the DOM
outputHtmlContainer.innerHTML = outputHtml;

// Display Stars in console
console.log("Stars");
console.log("%c" + stars, "color:white; background-color:blue;");
console.log('Pretty'.toUpperCase());