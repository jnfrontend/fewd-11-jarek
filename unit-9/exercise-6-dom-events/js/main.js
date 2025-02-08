document.addEventListener("DOMContentLoaded", function () {

    /* 
    ****************************************************************
    ** 1. Select the elements we'll be working with
    ****************************************************************
    */
    
    // Paragraph elements
    const para1 = document.getElementById("para1");
    const para2 = document.getElementById("para2");

    // Button elements
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    /*
    ****************************************************************
    ** 2. Create a function to change the text color of a paragraph
    ****************************************************************
    */
    function changeColour(domElement, textColor) { 
        domElement.style.color = textColor;
    }

    /*
    **************************************************************************************
    ** 3. Add an event listener to btn1 that changes the text color of para1 when clicked
    **************************************************************************************
    Hint: Use the addEventListener() method to add a click event listener to btn1, 
    and call the changeColour() function inside the event listener function, 
    passing para1 as the argument
    */

    // Change the text colour of para1 when btn1 is clicked
    btn1.addEventListener("click", function(e) { 
        e.preventDefault();
        console.log('Clicked Button 1 [OK]');
        changeColour(para1, "deeppink");
    });

    // Change the text colour of para2 when btn2 is clicked
    btn2.addEventListener("click", function(e) { 
        e.preventDefault();
        console.log('Clicked Button 2 [OK]');
        changeColour(para2, "deepskyblue");
    });

    /*
    ****************************************************************
    ** 4. Create a new paragraph element and add it to the container
    ****************************************************************
    Hint: Use the createElement() method to create a new p element, 
    set its text content using the textContent property, and append 
    it to the container using the appendChild() method
    */
   
    // Create new paragraph element
    let newPara = document.createElement("p");
    newPara.textContent = "This is dynamic paragraph 3."; // Add content
    newPara.setAttribute("id", "para3"); // Set ID attribute
    console.log(newPara);

    // Get container element
    let container = document.getElementById("container");
    container.appendChild(newPara); // Append new paragraph into container

    /*
    *********************************************************************************************
    ** 4. Add an event listener to para1 that changes the background color to yellow when clicked
    *********************************************************************************************
    Hint: Use the addEventListener() method to add a click event listener
    to para1, and set its backgroundColour property to "yellow" inside 
    the event listener function
    */

    // Change the background colour of para1 when it is clicked
    para1.addEventListener("click", function(e) { 
        e.preventDefault();
        para1.style.backgroundColor = "yellow";
    });

    /*
    **********************************************************************************************************************
    ** 5. Add a "highlight" class to para2 when the user hovers over it, and remove the class when the user stops hovering
    **********************************************************************************************************************
    Hint: Use the classList property to add the "highlight" class to para2 when the mouseover event is triggered,
    and remove the class when the mouseout event is triggered
    */

    para2.onmouseover = function() { 
        this.classList.add("highlight");
    }

    para2.onmouseleave=function() {
        this.classList.remove("highlight");
    }

    /*
    *******************************************************************************************************
    ** 6. Add a "Delete" button after each paragraph that, when clicked, removes the paragraph from the DOM
    *******************************************************************************************************
    Hint: Use the querySelectorAll() method to select all p elements on the page, 
    and loop through them using the forEach() method. Inside the loop, create a new 
    button element, set its text content using the textContent property, append it 
    to the p element using the appendChild() method, and add a click event listener 
    to the button that removes the p element from the DOM using 
    the remove() method.e previous exercise
    */
    // Get all paragraph elements
    let paras = document.querySelectorAll("p");

    // Create and add delete button to each paragraph
    paras.forEach(function(thisPara) {
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete"; // Add text to the delete button
        thisPara.appendChild(deleteButton);
        // console.log(thisPara);

        // Add click event listener to delete button only if it exists
        if (thisPara.getElementsByTagName("button")[0]) {
            deleteButton.addEventListener("click", function(e) { 
                e.preventDefault();
                thisPara.remove(); // Remove this paragraph from the DOM
                console.log('Paragraph has been removed [OK]');
            });
        } else {
            console.error('[!] Delete button not found :(');
        }
    });
});
