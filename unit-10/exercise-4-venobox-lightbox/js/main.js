// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
    // globals
  
    function venoLightbox() {
      // create veno lightbox and initialise
      new VenoBox({
        selector: '.image-box-link',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane',
        fitView: true,
        overlayColor: 'white',
        shareStyle: 'pill',
        spinner: 'pulse',
        transitionSpeed: 250

      });
  
    }
  
    function init() {
      venoLightbox();
    }
  
    window.addEventListener("load", (event => {
        init();
    }));
  
  })();