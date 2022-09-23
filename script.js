// selection 
let nav = document.querySelector('nav');
let navOnPhone = document.getElementById('Display-on-mobile');
let first = document.getElementById('first');
let second = document.getElementById('second');
let navUl = document.getElementById('navUl');
let overAllSec = document.getElementById('overAll');


// nav
window.onscroll = () =>{
    if(window.scrollY > 10){
        nav.style.background = '#1c59ba57'
    }else{
        nav.style.background = 'var(--backGround)'
    }
}
// on phone
let count = 0;
navOnPhone.onclick = () =>{
    if(count === 0){
        count = 1 ;
        second.style.marginTop = '-13px'
        first.style.transform = 'rotate(45deg)'
        second.style.transform = 'rotate(-45deg)'
        navUl.style.display = 'flex';
        setTimeout(() => {
            navUl.style.opacity = '1';
            navUl.style.marginTop = '0px';
            navUl.style.zIndex = '1'
        }, 350);
    }else{
        count = 0;
        second.style.marginTop = '0px'
        first.style.transform = 'none'
        second.style.transform = 'none'
        navUl.style.opacity = '0';
        navUl.style.marginTop = '20px';
        navUl.style.zIndex = '-1'
        setTimeout(() => {
            navUl.style.display = 'none';
        }, 1000);
    }
}
// handel overAll Section 
window.onscroll = () =>{
    if (window.scrollY > 400 && window.scrollY < 1000) {
        overAllSec.style.transform = 'translateY(0)'
        overAllSec.style.opacity = '1'
    }else{
        overAllSec.style.transform = 'translateY(55px)'
        overAllSec.style.opacity = '-1'
    }
}