// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
  // globals
  let currImage = 0;
  let body = document.querySelector("body"),
      lightBox = document.querySelector(".lightBox"),
      images = document.querySelectorAll(".gImg"),
      showImg = lightBox.querySelector(".showImg img"),
      close = lightBox.querySelector(".close");
  let lightBoxContent = lightBox.querySelector('.lightBox_content');   
  let navigationDots = null;

  function lightbox() {
    // start add navigation dots
    let navigationDotsHtml = '';
    for (let i=0; i<images.length; i++) {
      navigationDotsHtml += '<span class="navigation-dot"></span>';
    }

    const navDotsFragment = new DocumentFragment(); // https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
    let navDotsDiv = document.createElement("div");
    navDotsDiv.className = 'navigation-dot-container';
    navDotsDiv.innerHTML = navigationDotsHtml;
    navDotsFragment.append(navDotsDiv);
    lightBoxContent.appendChild(navDotsFragment);
    navigationDots = lightBoxContent.querySelectorAll('.navigation-dot');
    // end add navigation dots
    
    // navigation dot event handler
    for (const [index, navDot] of navigationDots.entries()) {
      navDot.addEventListener("click", () => {
        showImage(index);
      });
    }

    // image event handler
    for (const [index, image] of images.entries()) { // https://medium.com/@_DandyLyons/how-to-use-a-js-for-of-loop-with-an-index-a4675ed22351
      image.addEventListener("click", () => {
        showImage(index);
      });
    }
    // add next/prev links to lightbox
    lightBox.querySelector('.lightBox_content .showImg').insertAdjacentHTML("afterend",
    `<div class="navigation-buttons">
      <a class="previous">❮</a>
      <a class="next">❯</a>        
    </div>`);

    // previous button event handler
    lightBox.querySelector('.navigation-buttons .previous').addEventListener("click", (event => {
      if (currImage !== 0) {
        currImage -= 1;
        showImg.src = images[currImage].src;
        makeNavigationDotActive(currImage);
      } 
    }));

    // next button event handler
    lightBox.querySelector('.navigation-buttons .next').addEventListener("click", (event => {
      if (currImage !== (images.length-1)) {
        currImage += 1;
        showImg.src = images[currImage].src;
        makeNavigationDotActive(currImage);
      }
    }));

    // close event handler
    close.addEventListener('click', ()=>{
      lightBox.style.display = "none";
      body.style.overflow = "visible";
    });
  }

  function makeNavigationDotActive(imageIndex) {
    for (let i=0; i<navigationDots.length; i++) {
      navigationDots[i].className = navigationDots[i].className.replace(" active", "");
    }
    navigationDots[imageIndex].className += " active";
  }

  function showImage(imageIndex) {
    showImg.src = images[imageIndex].src;
    currImage = imageIndex;
    lightBox.style.display = "block";
    body.style.overflow = "hidden";
    makeNavigationDotActive(currImage);
  }

  function init() {
    lightbox();
  }

  window.addEventListener("load", (event => {
      init(); // Initialize the lightbox
  }));

})();