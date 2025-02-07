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

  function lightbox() {
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

    lightBox.querySelector('.navigation-buttons .previous').addEventListener("click", (event => {
      if (currImage !== 0) {
        currImage -= 1;
        showImg.src = images[currImage].src;
      } 
    }));
    lightBox.querySelector('.navigation-buttons .next').addEventListener("click", (event => {
      if (currImage !== (images.length-1)) {
        currImage += 1;
        showImg.src = images[currImage].src;
      }
    }));

    close.addEventListener('click', ()=>{
      lightBox.style.display = "none";
      body.style.overflow = "visible";
    });
  }

  function showImage(imageIndex) {
    showImg.src = images[imageIndex].src;
    currImage = imageIndex;
    lightBox.style.display = "block";
    body.style.overflow = "hidden";
  }

  function init() {
    lightbox();
  }

  window.addEventListener("load", (event => {
      init();
  }));

})();
















// old code
var slideIndex = 1;
//showSlide(slideIndex);

function openLightbox() {
  document.getElementById('Lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';
}

function changeSlide(n) {
	showSlide(slideIndex += n);
}

function toSlide(n) {
	showSlide(slideIndex = n);
}

function showSlide(n) {

  const slides = document.getElementsByClassName('slide');
  let modalPreviews = document.getElementsByClassName('modal-preview');

  if (n > slides.length) {
    slideIndex = 1;	
  }
  
  if (n < 1) {
  	slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (let i = 0; i < modalPreviews.length; i++) {
      modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  }
  
  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active';
}