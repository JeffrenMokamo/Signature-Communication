const btnBurger = document.querySelector('.btnBurger');
const navBar = document.querySelector('.bar-nav');

function barNav(){
    navBar.classList.toggle('translate');

    if(navBar.classList.contains('translate')){
        btnBurger.classList.remove('bi-list');
        btnBurger.classList.add('bi-x-lg');
        document.querySelector('.over').classList.add('overlay');
    }
    else{
        btnBurger.classList.add('bi-list');
        btnBurger.classList.remove('bi-x-lg');
        document.querySelector('.over').classList.remove('overlay');
    }
}

window.onscroll = () =>{

    if(window.scrollY >= 40){
        document.querySelector('.menu').classList.add('scrol');
    }
    else{
        document.querySelector('.menu').classList.remove('scrol');
    }

}