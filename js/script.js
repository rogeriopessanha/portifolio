

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




const modalFoto = document.querySelectorAll('.image-modal')

modalFoto.forEach(function(foto){

    foto.onclick = function(){

        const modal = foto.getAttribute('data-modal')

        document.getElementById(modal).style.display = 'flex'
    }
})

const fotoFechar = document.querySelectorAll('.modal-fechar')

fotoFechar.forEach(function(foto){
    foto.onclick = function(){
        const modal = (foto.closest('.modal').style.display = 'none')
    }
})


window.onclick = function(e){
    if (e.target.className === 'modal') {
        e.target.style.display = 'none'
    }
}






  





// var swiper = new Swiper(".modal-principal-slider", {

//     loop:true,
//       spaceBetween: 20,
//       autoplay: {
//         delay: 6500,
//         disableOnInteraction: false,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//   },   
//       breakpoints: {
//           0: {
//             slidesPerView: 1,
//           },
//           768: {
//             slidesPerView: 2,
//           },
//           991: {
//             slidesPerView: 3,
//           },
//           1440: {
//               slidesPerView: 4,
//             },
//         },
//   });

//   loop:true,
  //     spaceBetween: 20,
  //     autoplay: {
  //       delay: 6500,
  //       disableOnInteraction: false,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  // },   
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
  //         1440: {
  //             slidesPerView: 4,
  //           },
  //       },





// var swiper = new Swiper(".projetos-slider", {
//     loop:true,
//     effect: "cube",
//     autoplay: {
//         delay: 2500,
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





// var swiper = new Swiper(".projetos-slider", {
//     loop:true,
//     effect: "flip",
//     // grabCursor: true,
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     autoplay: {
//         delay: 6500,
//         disableOnInteraction: false,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });


