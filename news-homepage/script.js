const hamburger = document.querySelector('.menu-icon');
const container = document.querySelector('.container');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu ');

let boolean = false;

hamburger.addEventListener('click', () => {
    if (!boolean) {
        hamburger.src = "assets/images/icon-menu-close.svg";
        hamburger.style.width = "30px";
        hamburger.style.height = "30px";
        overlay.style.display = 'block';
        mobileMenu.style.right = '0px';
        mobileMenu.style.opacity = '1';
        boolean = true;
    } else {
        hamburger.src = "assets/images/icon-menu.svg";
        hamburger.style.width = "42px";
        hamburger.style.height = "18px";
        overlay.style.display = 'none';
        mobileMenu.style.right = '-257px';
        mobileMenu.style.opacity = '0';
        boolean = false;
    }
})