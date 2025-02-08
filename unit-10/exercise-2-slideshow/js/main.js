const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
  spaceBetween: 100,
//   slidesPerView: 'auto',
  effect: 'slide',

  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
        clickable: 'true',
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });