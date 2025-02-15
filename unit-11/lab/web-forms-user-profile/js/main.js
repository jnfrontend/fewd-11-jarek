// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
  // globals
  const userProfile = document.querySelector('.user-profile');
  const userProfileForm = userProfile.querySelector('form');
  const userProfileSubmit = userProfile.querySelector('#submit');
  const userProfileLSName = 'userProfileFormData';
  
  let userProfileFormData = new FormData(userProfileForm, userProfileSubmit);
  let userProfileLocalFormData = {};

  function getFormData() {
    // option 1 - using form elements
    console.log('option 1');
    const formElements = userProfileForm.elements;
    for (const element of formElements) {
      console.log(element);
      const elementName = element.getAttribute('name');
      if (elementName) {
        console.log(element.getAttribute('name'), element.value);
      }
    }

    // option 2 - using FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
    userProfileFormData = new FormData(userProfileForm, userProfileSubmit); // update with latest from data
    userProfileLocalFormData = {};
    for (let [key, value] of userProfileFormData) {
      if (userProfileLocalFormData.hasOwnProperty(key)) {
        value += ',' + userProfileLocalFormData[key];
      }
      userProfileLocalFormData[key] = value;
    }
  }

  function init(){
    // check localstorage and load form data if present
    const lsFormData = localStorage.getItem(userProfileLSName);
    if (lsFormData) {
      userProfileLocalFormData = JSON.parse(lsFormData);
    }
    updateFormData();
  }

  function updateFormData() {
    if(userProfileFormData) {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
      Object.entries(userProfileLocalFormData).forEach(([key, value]) => {
        // certain input types such as radio contain more than one element  
        const fieldElements = userProfileForm.querySelectorAll(`[name=${key}]`);
        for (const fieldElement of Array.from(fieldElements) ) {
          const tagName = fieldElement.tagName.toLowerCase();
          //for (const value of values.split(',')) { // field element may contain multiple values, e.g. select multiple.
            switch (tagName) {
              case 'input':
                if (fieldElement.getAttribute('type').toLowerCase() === 'radio' ) {
                  fieldElement.setAttribute('checked', '');
                } else { 
                  fieldElement.value = value;
                }
                break;
              case 'textarea':
                fieldElement.innerHTML = value;
                break;
              case 'select':          
                fieldElement.value = value;
              default:
                // do nothing 
            }
          //}
        }
      });  
    }
  }

  function resetLocalFormData() {
    for (const [key, value] of userProfileFormData) {
      userProfileLocalFormData[key] = '';
    }
  }

  window.addEventListener("load", (event => {

    init();

    // submit event handler
    userProfileForm.addEventListener('submit', (event) => {
      event.preventDefault();
      getFormData();
      //localStorage.removeItem(userProfileLSName); // clear localStorage
      localStorage.setItem(userProfileLSName, JSON.stringify(userProfileLocalFormData)); // store form data to localStorage
    });

    // reset event handler
    userProfileForm.addEventListener('reset', (event) => {
      userProfileLocalFormData = {}; // clear local form data object
      localStorage.removeItem(userProfileLSName); // clear localStorage
      resetLocalFormData(); // clear local form data 
      updateFormData(); // update html form
    });

  }));

})();
