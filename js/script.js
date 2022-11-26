


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