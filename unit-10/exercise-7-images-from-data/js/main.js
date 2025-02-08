// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
    // globals
    const contentContainer = document.getElementById("content");
    
    function renderImages(images){
        let imagesHtml ='';

        imagesHtml = '<div class="image-container">';

        for (let i in images.hits) {
            imagesHtml += '<div class="image">';
            imagesHtml += '<a title="Click to see a large version of this image" href="' + images.hits[i].largeImageURL + '">';
            imagesHtml += '<img src="' + images.hits[i].webformatURL + '">';
            imagesHtml += '</a>';
            imagesHtml += '<div class="image-info">';
            imagesHtml += '<div class="tags">';
            let tagsArray = images.hits[i].tags.split(',');
            for (j in tagsArray) {
                let linkQuery = encodeURI(tagsArray[j].trim() );
                let linkText = tagsArray[j].trim();
                imagesHtml += '<a href="#" onclick="loadImages(\'' +  linkQuery + '\')">' + linkText + '</a>'; 
            }
            imagesHtml += '</div>';
            imagesHtml += '<div class="right">';
            imagesHtml += '  <span class="favorites">' + images.hits[i].favorites + '</span>';
            imagesHtml += '  <span class="likes">' + images.hits[i].likes + '</span>';
            imagesHtml += '  <span class="comments">' + images.hits[i].comments + '</span>';
            imagesHtml += '</div></div></div>';
        }
        imagesHtml += '</div>';

        contentContainer.innerHTML = imagesHtml;
    }

    function init() {
        try {
            // option 1 - load data as a JB object
            console.log('dataOption1');
            console.log(dataOption1);
            renderImages(dataOption1); // render images
            // option 2 - load data as a string variable
            const dataOption2 = JSON.parse(dataStringOption2);
            console.log('dataOption2');
            console.log(dataOption2);
            //renderImages(dataOption2); // render images    
            // option 3 - embed data in html
            const dataOption3 = JSON.parse(document.getElementById('dataStringOption3').text);
            console.log('dataOption3');
            console.log(dataOption3)
        } catch(err) {
            console.error(err);
            contentContainer.innerHTML = '<h2>Error</h2><p>No images to display.</p><p>' + err + '</p>';
        }
    }

    window.addEventListener("load", (event => {
        init();
    }));

})();