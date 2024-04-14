var galleryTop = new Swiper('.gallery-top', {
    slidesPerView: 1,  
    loop: true,
    loopedSlides: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    direction: 'horizontal',
    slidesPerView: 3,
    slideToClickedSlide: true,
    // centeredSlides: true,
    spaceBetween: 10,
    loopedSlides: 50,
    loop: true,
    breakpoints: {
      375: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;

  var swiper1 = new Swiper(".swiper-1", {
    spaceBetween: 5,
    loopedSlides: 50,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next[data-toggle="slider1"]',
      prevEl: '.swiper-button-prev[data-toggle="slider1"]',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    breakpoints: {
      375: {
        slidesPerView: 1.8,
        spaceBetween: 8,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  var swiper2 = new Swiper(".swiper-2", {
    spaceBetween: 0,
    loopedSlides: 50,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next[data-toggle="slider2"]',
      prevEl: '.swiper-button-prev[data-toggle="slider2"]',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  var swiper3 = new Swiper(".swiper-3", {
    spaceBetween: 5,
    loopedSlides: 50,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next[data-toggle="slider3"]',
      prevEl: '.swiper-button-prev[data-toggle="slider3"]',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    breakpoints: {
      375: {
        slidesPerView: 1.8,
        spaceBetween: 8,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });