// var galleryTop = new Swiper('.gallery-top', {
//     slidesPerView: 1,  
//     loop: true,
//     loopedSlides: 50,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
//   var galleryThumbs = new Swiper('.gallery-thumbs', {
//     direction: 'horizontal',
//     slidesPerView: 3,
//     slideToClickedSlide: true,
//     // centeredSlides: true,
//     spaceBetween: 10,
//     loopedSlides: 50,
//     loop: true,
//     breakpoints: {
//       375: {
//         slidesPerView: 3,
//       },
//       768: {
//         slidesPerView: 3,
//       },
//       992: {
//         slidesPerView: 4,
//       },
//     },
//   });
//   galleryTop.controller.control = galleryThumbs;
//   galleryThumbs.controller.control = galleryTop;

  let swiper1 = new Swiper(".swiper-1", {
    spaceBetween: 5,
    loopedSlides: 50,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next[data-toggle="slider1"]',
      prevEl: '.swiper-button-prev[data-toggle="slider1"]',
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    //   renderBullet: function (index, className) {
    //     return '<span class="' + className + '">' + (index + 1) + "</span>";
    //   },
    // },
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

  let swiper2 = new Swiper(".swiper-2", {
    spaceBetween: 0,
    loopedSlides: 50,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next[data-toggle="slider2"]',
      prevEl: '.swiper-button-prev[data-toggle="slider2"]',
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

  let swiper3 = new Swiper(".swiper-3", {
    spaceBetween: 5,
    loopedSlides: 50,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next[data-toggle="slider3"]',
      prevEl: '.swiper-button-prev[data-toggle="slider3"]',
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

  let gallery__top = new Swiper(".gallery-top", {
    slidesPerView: 1,
    freeMode: false,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  let gallery__thumbs = new Swiper(".gallery-thumbs", {
    slidesPerView: "auto",
    centeredSlides: true,/* ver 11 MEGA BUG -  works only when centeredSlides is true */
    spaceBetween: 16,
    loop: false, /* loop & slidesPerView auto not working well with swiper 11 */
    slideToClickedSlide: true,  
    breakpoints: {
      375: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 5,
      },
    },
  });
  gallery__thumbs.on('click', function () {
    const { clickedIndex } = this;
    gallery__thumbs.slideTo(clickedIndex);
    gallery__top.slideTo(clickedIndex);
    console.log('slide click', clickedIndex);
  });
  gallery__top.controller.control = gallery__thumbs;
  gallery__thumbs.controller.control = gallery__top;
  gallery__thumbs.slideTo(0);

  let gallery_top = new Swiper(".gallery-top-2", {
    slidesPerView: 1,
    freeMode: false,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  let gallery_thumbs = new Swiper(".gallery-thumbs-2", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 16,
    loop: false,
    slideToClickedSlide: true,  
    breakpoints: {
      375: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 5,
      },
    },
  });
  gallery_thumbs.on('click', function () {
    const { clickedIndex } = this;
    gallery_thumbs.slideTo(clickedIndex);
    gallery_top.slideTo(clickedIndex);
    console.log('slide click', clickedIndex);
  });
  gallery_top.controller.control = gallery_thumbs;
  gallery_thumbs.controller.control = gallery_top;
  gallery_thumbs.slideTo(0);