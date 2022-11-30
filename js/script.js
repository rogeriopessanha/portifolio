


let navBar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () => {
    navBar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () => {
    navBar.classList.remove('active');
}




window.onscroll = () => {
    navBar.classList.remove('active');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}

window.onload = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}




// var swiper = new Swiper(".projetos-slider", {
//     loop:true,
//     grabCursor:true,
//     spaceBetween: 20,
//     autoplay: {
//       delay: 6500,
//       disableOnInteraction: false,
//   },
//   navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//   },
//     breakpoints: {
//         0: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         991: {
//           slidesPerView: 3,
//         },
//       },
//   });





// var swiper = new Swiper(".projetos-slider", {
//     effect: "cube",
//     autoplay: {
//         delay: 6500,
//         disableOnInteraction: false,
//     },
//     cubeEffect: {
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 1,
//         shadowScale: 0.64,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });







// var swiper = new Swiper(".projetos-slider", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//   });





var swiper = new Swiper(".projetos-slider", {
    loop:true,
    effect: "flip",
    // grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


