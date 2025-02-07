document.addEventListener("DOMContentLoaded", function(e){
    console.log('Script Unit-10: Document is ready to use');

    // Create dynamic element with content
    const container_1 = document.querySelector("#dynamic_content");
    if (container_1) {
        const div = document.createElement("div");
        div.textContent = "Hello, World!";
        container_1.appendChild(div);
    } else {
        console.error('Container_1 element not found');
    }


    // Create dynamic <ul> element with ID tag
    const container_2 = document.querySelector("#dynamic_items");
    if (container_2) {
        const ul = document.createElement("ul");
        ul.id = "basket";
        container_2.appendChild(ul);
    } else {
        console.error('Container_2 element not found');
    }
}); // End event handler - DOMContentLoaded

/*
** Function below have to be outside of the event handler, to work with onclick="add('item 1') that we have in HTML body"
*/

// -- When we click on the button with onclick, it will call the add function with "item 1" as argument and add the item to the #basket container.
function add(item) {
    const ul = document.querySelector("#basket"); // Get element "ul#basket" that we created above.     
    const li = document.createElement("li"); // Create new element "li"

    li.textContent = item; // Set text content
    ul.appendChild(li); // Display new created element "li" in the basket container ul#basket
}