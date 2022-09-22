let widthWindow = document.documentElement.clientWidth;
let toogleMenu = document.querySelector('.toogleMenu');
let nav = document.querySelector('.nav');
let burger = document.querySelector('.title_burger');

if (widthWindow < 620) {
    nav.classList.add('is-hidden_nav');
}

let isHiddenToogle = true;

burger.addEventListener('click', checkIsHiddenToogleMenu);

function checkIsHiddenToogleMenu () {
    if (isHiddenToogle) {
        showToogle();
    } else {
        hiddenToogle()
    }
    isHiddenToogle = !isHiddenToogle;
}

function showToogle () {
    toogleMenu.classList.remove('is-hidden_toogleMenu');
    toogleMenu.classList.add('is-active_toogleMenu');

    nav.classList.remove('is-hidden_nav');
    nav.classList.add('is-active_nav');
}

function hiddenToogle () {
    toogleMenu.classList.remove('is-active_toogleMenu');
    toogleMenu.classList.add('is-hidden_toogleMenu');

    nav.classList.remove('is-active_nav');
    nav.classList.add('is-hidden_nav');
}