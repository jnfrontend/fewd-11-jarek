class FactorialSlider {
  componentRoot;
  factSlider;
  outputContainer;

  constructor(componentRoot) {
    this.componentRoot = document.querySelector(componentRoot);
    this.factSlider = this.componentRoot.querySelector('input[name="fact"]');
    this.outputContainer = this.componentRoot.querySelector('.factorial-output-container');
    // event handling
    this.componentRoot.addEventListener("change", this);
  }

  factorial(number) {
  
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
      outputHtml += `<tr><td>${j}!</td><td>${this.fac(j)}</td></tr>`;
    }
    outputHtml += `</tbody>
      </table>`; 
    // output factorials
    this.outputContainer.innerHTML = outputHtml;
  }

  // calculate factorial for a number
  fac = (num) => {
    let fac = 1;
    for (let i=1; i <= num; i++) {
      fac *= i;
    }
    return fac;
  }

  handleEvent(event) {
    console.log("handleEvent");
    console.log(event);
    this.factorial(parseInt(event.target.value));
  }
}

function init() {
  // calculate initial factorial
  const factSlider = new FactorialSlider(".component-factorial");
}

window.addEventListener("load", (event => {
  init();
}));
