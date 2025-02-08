// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
  // globals
  function initCarousel() {
    // Initialize Swiper
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      speed: 400,
      spaceBetween: 100,
      effect: "slide",

      // Pagination
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: "true",
        dynamicBullets: false,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  window.addEventListener("load", (event) => {
    initCarousel();
  });
})();
