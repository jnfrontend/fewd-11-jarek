// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
  // globals
  const calcButtons = document.querySelector(".calculator .calculator-buttons");
  let currentDisplay = "0";
  let resultDisplay = false;

  function appendToDisplay(value) {
    if (currentDisplay === "0" || resultDisplay) {
      currentDisplay = value;
    } else {
      currentDisplay += value;
    }
    resultDisplay = false;
    updateDisplay();
  }

  function updateDisplay() {
    const displayElement = document.getElementById("display");
    displayElement.textContent = currentDisplay;
  }

  function calculateResult() {
    try {
      // execute the currentDisplay string as JS code (recommended). Alternative: eval()
      const result = Function("return " + currentDisplay)();
      currentDisplay += `\n${result.toString()}`;
      updateDisplay();
    } catch (error) {
      currentDisplay += "\nError";
      updateDisplay();
    }
    resultDisplay = true;
  }

  function clearLastElement() {
    currentDisplay = currentDisplay.slice(0, -1);
    if (currentDisplay === "") {
      currentDisplay = "0";
    }
    updateDisplay();
  }

  function clearDisplay() {
    currentDisplay = "0";
    updateDisplay();
  }

  function init() {
    calcButtons.addEventListener("click", (event) => {
      if (event.target.tagName.toLowerCase() === "button") {
        switch (event.target.textContent) {
          case "CE":
            clearLastElement();
            break;
          case "C":
            clearDisplay();
            break;
          case "=":
            calculateResult();
            break;
          default:
            // pass value of the clicked button to appendToDisplay()
            appendToDisplay(event.target.textContent);
        }
      }
    });

    window.addEventListener("keydown", (event) => {
      if (event.defaultPrevented) {
        return; // Do nothing if event already handled
      }
      console.log(event.key);
      switch (event.key) {
        // keypad
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case "*":
        case "+":
        case "-":
        case "/":
        case "(":
        case ")":
        case ".":
          appendToDisplay(event.key);
          break;
        case "Enter":
          calculateResult();
          break;
        case "Delete":
          clearDisplay();
          break;
        // regular keys
        case "NumpadDivide":
        case "NumpadMultiply":
        case "NumpadSubstract":
        case "NumpadAdd":
          appendToDisplay("+");
          break;
        case "NumpadEnter":
          calculateResult();
          break;
        case "Delete":
          clearDisplay();
          break;
        default:
          // no nothing
          break;
      }
    });
  }

  window.addEventListener("load", (event) => {
    init();
  });
})();
