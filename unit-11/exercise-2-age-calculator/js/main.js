// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
    // globals
    const ageCalculatorComponent = document.querySelector('.component-age-calculator');
    const ageCalculatorForms = ageCalculatorComponent.getElementsByClassName('age-calculator-form');
    const ageCalculatorForm = ageCalculatorForms[0];
    const ageCalculatorSubmit = ageCalculatorComponent.querySelector('.submit');
    const outputContainer = ageCalculatorComponent.querySelector('.age-output-container');
  
    function age() {
      
      // declare variables  
      const ageCalculatorFormData = new FormData(ageCalculatorForm, ageCalculatorSubmit); // get form data
  
      const birthday = ageCalculatorFormData.get('birthday');
      const birthdayArray = birthday.split('-');
  
      const y1 = birthdayArray[0];
      const m1 = birthdayArray[1];
      const d1 = birthdayArray[2];
  
      let outputHtml = "";
  
      const date = new Date(); // today's date
      let d2 = date.getDate();
      let m2 = 1 + date.getMonth();
      let y2 = date.getFullYear();
  
      const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // days of the month 1=Jan(31), 2=Feb(28), 3=Mar(31) etc.
      if (d1 > d2) {
          d2 = d2 + month[m2 - 1];
          m2 = m2 - 1;
      }
      if (m1 > m2) {
          m2 = m2 + 12;
          y2 = y2 - 1;
      }
  
      const d = d2 - d1;
      const m = m2 - m1;
      const y = y2 - y1;

      let years = "";
      let months = "";
      let days = "";
      let andText = "";


      if (y > 0) {
        years = `${y} Years, `;
        if (y === 1) { 
            years = years.replace("s", "");
        }
      }
      if (m > 0) {
        months = `${m} Months`;
        if (m === 1) { 
            months = months.substring(0, months.length - 1);
        }
      }
      if (d > 0) {
        days = `${d} Days`;
        andText = '';
        if (d === 1) { 
            days = days.substring(0, days.length - 1);
        }
      }
      if (y > 0 || m > 0 && d > 0) {
        andText = ' and ';
      }
      console.log(y);
  
      outputHtml = "<p>Your Age is: <b>" + years + months + "</b>" + andText + "<b>" + days + "</b></p>";
  
      // output 
      outputContainer.innerHTML = outputHtml;
    }
  
  
    function init() {
      // set max attribute on birthday input field to be today
      const yesterdayDate = () => {
        let d = new Date();
        d.setDate(d.getDate() - 1);
        return d;
      };
  
      const birthdayInput = ageCalculatorComponent.querySelector('#birthday');
      birthdayInput.setAttribute('max', yesterdayDate().toISOString().split('T')[0]); // set so that today's date can not be selected
      birthdayInput.setAttribute('value', yesterdayDate().toISOString().split('T')[0]); // set to avoid issues with no date being set
  
      // submit event handler
      ageCalculatorSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        age();
      });
    }
  
    window.addEventListener("load", (event => {
      init();
    }));
  
  })();