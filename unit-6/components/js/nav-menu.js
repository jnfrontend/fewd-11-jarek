document.addEventListener("DOMContentLoaded",() => {
    /*
    ** Once the page is laoded create nav component
    */

    // Create the menu component
    Menu();
});

// Function to create the menu nav list
function Menu(host = 'http://127.0.0.1:5500'){
    const menu = `<nav><ul><li><a href='#'>Movies</a></li><li><a href='#'>Characters</a></li><li><a href='#'>Comics</a></li></ul></nav>`;

    document.getElementById("menu").innerHTML = menu;
    return menu;
}