const hostAddress = "http://127.0.0.1:5500",
      assetsDirectoryIMGs = "unit-6/assets/images/",
      heroSubdirectory = "unit-6/pages/superheroes";

document.addEventListener("DOMContentLoaded",() => {
    /*
    ** Once the page is laoded create card component
    */

    // Array with the superheroes names and their cards description
    let superHeroes = ['The Flash', 'Wonder Woman', 'Superman', 'Zatanna'];
    let superHeroesDescriptions = [
        'Able to run at near light-speeds, his powers provide the ultimate caffeine kick: He can run up buildings, move so swiftly he phases through objects, create sonic booms with the snap of his fingers.', 
        'Wonder Woman is Princess Diana of the immortal Amazons from Greek mythology. Wonder Woman has superhuman strength and speed, as well as the trademark bulletproof bracelets, but it\’s probably her Golden Lasso of Truth most people really wish they had.', 
        'Superman has super strength, speed, flight, invulnerability as well as his renowned X-ray and heat vision. The most powerful being on the planet, his amazing abilities are also a melancholy reminder of how different he is from the people he\’s dedicated to protect.', 
        'Intelligent, confident, self-assured and able to manipulate reality itself with her vast magical abilities, Zatanna balances her time as a skilled stage illusionist with battling the dark arts alongside some of the world/’s greatest super heroes.'
    ];
    
    // Loop through the array and create a card for each hero
    superHeroes.forEach(function (superheroName, index) {
        let heroPathName = superheroName.toLowerCase().replace(/\s+/g, "-"); // Replace the white space with "-"
        Card(superheroName, heroPathName, superHeroesDescriptions[index]);
    });
});

// Function to create a hero card with given hero name and image
function Card(hero, heroPath, heroDescription) {
    const suerpheroCard = `
        <div class="card_container">
            <a href="${hostAddress}/${heroSubdirectory}/${heroPath}.html">
                <div class="card_hero">
                    <img src="${hostAddress}/${assetsDirectoryIMGs}/superheroes/${heroPath}.png" class="card_hero_img" alt="${hero}">
                    <h2 class="card_hero_name">${hero}</h2>
                </div>
                <div class="card_content">
                    <p>${heroDescription}</p>
                    <span>READ MORE</span>
                </div>
            </a>
        </div>`;

    document.getElementById("superheroes").innerHTML += suerpheroCard;
    return suerpheroCard;
}