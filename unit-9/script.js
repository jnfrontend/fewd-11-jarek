// Run the script when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  console.log('Script-Running', {ucd:'fewd-11', unit:9});
  // https://developer.mozilla.org/en-US/docs/Web/API/console

  // 1.
  // ********************************
  // Get/find element in DOM (Document Object Model)
  // ********************************
  //
  // The Javascript web api
  // the getElementById method is the contract between the browser and javascript
  // the browser engine provides the method and the javascript engine uses it
  const btn = document.getElementById("button");
  const dom_box2 = document.getElementById("box2"); // "var_name" snake case (variable naming)
  const domBox3 = document.getElementById("box3"); // "varName" camel case (variable naming)

  // 1A.
  // Check if button exist
  if (!btn) {
    // Using console methods for debugging
    console.error("btn::Button not found");
    console.table("Button not found", {});
    console.trace();
  }

  // 1B.
  // Manipulate DOM element
  // Check if dom_box2 exists first
  if (dom_box2) {
    dom_box2.innerText = "DOM Edit"; // Change/update content of DOM element domBox2
    dom_box2.style.backgroundColor = "crimson"; // Change background color of domBox2
    dom_box2.style.color = "white";
  } else {
    console.error('Element "dom_box2" not found');
  }

  // 1C.
  // Select all elements with the same class name and change style
  const doms = document.getElementsByClassName("box");
  for (let i = 0; i < doms.length; i++) {
    doms[i].style.border = "3px solid crimson";
  }

  // 2.
  // EVENT LISTENER (submit, click handler)
  // Get form elements by tag name
  const forms = document.getElementsByTagName("form");
  console.log(forms);

  //
  // Form Submit Button
  // Get all form elements and use event listener for submit buttons
  //
  for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      console.log("Form has been submitted");

      const input = forms[i].querySelector("input");
      const value = input.value;
      //   alert(value);
      write(value);
    });
  }

  //
  // Form Regular Button
  // Use event listener for form with regular buttons
  //
  forms[2].addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Clicked form button");

    const input = forms[2].querySelector("input");
    // Check if input/field exist
    if (!input) {
      console.error("Input field not found");
      return;
    } else {
      const value = input.value;
      console.log(value);
    }
  });

  // Display form value into the form-output element
  function write(value) {
    document.getElementById("form-output").children[0].innerHTML = value;
  }

  //
  // Add event listener for second box
  //
  let box2 = document.querySelectorAll(".box")[1];
  function whenItsClicked(event) {
    event.preventDefault();
    console.log("This box inner text is: " + event.target.innerText); // form input use target.value
    console.log(event.currentTarget);
    console.log(event); // [!] Display object with properties to use
  }
  box2.addEventListener(
    "click",
    function (e) {
      e.stopPropagation();
      console.log("Second box clicked");
    },
    false
  ); // or false = when stopPropagation() is "true" then any other click event on box2 will be ignored

  box2.addEventListener("click", whenItsClicked);

  // 3.
  // ********************************
  // Image slider: Option A
  // ********************************
  for (let i = 1; i < 4; i++) {
    // changeImages(i);
  }
  // Set delay for looping
  function changeImages(i) {
    setTimeout(function () {
      console.log(i);
      const img = document.getElementById("random_img");

      img.src = `/unit-9/images/img-${i + 1}.jpg`;
      img.alt = `Image ${i + 1}`;
    }, 1500 * i);
  }

  // ********************************
  // Image slider: Option B
  // ********************************
  // Use setInterval to change random image every 1.5 seconds
  //
  setInterval(function () {
    const random = Math.floor(Math.random() * 3) + 1;
    const img = document.getElementById("random_img");
    img.src = `/unit-9/images/img-${random}.jpg`;
    img.alt = `Image ${random}`;
  }, 1500);

  // 4.
  // ********************************
  // Create/Add new element
  // ********************************
  //
  // Create a new div element
  // Append new content to the div
  let div = document.createElement("div");
  let newContent = document.createTextNode("Dynamic Content");
  div.classList.add("box", "dynamicBox");
  div.appendChild(newContent);
  //   div.removeChild(div);
  //   div.removeChild(newContent);
  console.log(div);
  console.log("nodeType is: " + newContent.nodeType);
  console.log(newContent.nodeValue.toString());
  // Append the dynamic div to the container with other box's
  let container = document.getElementById("container");
  container.appendChild(div);
  // Manipulate child element in container
  container.children[5].style.borderRadius = "50%";

  //
  // OTHER
  //

  // ********************************
  // window.close()
  // ********************************
  //
  // This will close the browser window tab
  // window.close();

  // ********************************
  // window.alert()
  // ********************************
  //
  // We dont have to use window to access specific method
  // window.alert('This is window alert');
  // alert('This is an alert() function test');

  // ********************************
  // Resources
  // ********************************
  //
  // Some useful JavaScripts links:
  // https://www.w3schools.com/js/default.asp
  // https://www.tutorialspoint.com/javascript/index.htm
  // https://developer.mozilla.org/en-US/learn/javascript
  // https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
});
