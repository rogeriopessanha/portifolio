


let navBar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
    navBar.classList.remove('active');
}




window.onscroll = () =>{
    navBar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

window.onload = () =>{
   
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}




var swiper = new Swiper(".projetos", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  });