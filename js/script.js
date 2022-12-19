

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

modalFoto.forEach(function (foto) {

    foto.onclick = function () {

        const modal = foto.getAttribute('data-modal')

        document.getElementById(modal).style.display = 'flex'
    }
})

const fotoFechar = document.querySelectorAll('.modal-fechar')

fotoFechar.forEach(function (foto) {
    foto.onclick = function () {
        const modal = (foto.closest('.modal').style.display = 'none')
    }
})

window.onclick = function (e) {
    if (e.target.className === 'modal') {
        e.target.style.display = 'none'
    }
}


fadeOut();
function loader(){
    document.querySelector('.loader-container').classList.add('active');
}
function fadeOut(){
    setTimeout(loader, 4500);
}



var swiper = new Swiper(".habilidades-slider", {
    spaceBetween: 15,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
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

        521: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 5,
        },
    },
});























