// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
  // globals
  const factSlider = document.getElementById('factorialSlider');
  const outputContainer = document.querySelector('.factorial-output-container');

  function factorial(number) {
  
    // declare variables
    let outputHtml = "";

    outputHtml = `<p>Factorials up to ${number}: </p>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Factorial</th>
          </tr>
        </thead>
        <tbody>`;
    // calculate factorials
    for (let j=number; j >= 1; j--) { // outer loop
      outputHtml += `<tr><td>${j}!</td><td>${fac(j)}</td></tr>`;
    }
    outputHtml += `</tbody>
      </table>`; 
    // output factorials
    outputContainer.innerHTML = outputHtml;
  }

  // calculate factorial for a number
  const fac = (num) => {
    let fac = 1;
    for (let i=1; i <= num; i++) {
      fac *= i;
    }
    return fac;
  }

  function init() {
    // calculate initial factorial
    factorial(parseInt(factSlider.value));

    // event handler for the slider
    factSlider.addEventListener("change", (event) => {
      factorial(parseInt(event.target.value));
    });
  }

  window.addEventListener("load", (event => {
    init();
  }));

})();