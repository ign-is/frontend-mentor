const navDrop = document.querySelectorAll('nav .left > ul:first-of-type > li');
const iconHamburger = document.querySelector('.icon-hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLi = document.querySelectorAll('.mobile-menu > ul:first-of-type > li');

let booleanDrop = true;
navDrop.forEach(item => {
    item.addEventListener('click', () => {
        if(booleanDrop) {
            item.children[2].style.display = 'block';
            item.children[1].src = "images/icon-arrow-light.svg";
            item.children[1].style.transform = 'rotate(180deg)'
            booleanDrop = false;
        } else {
            item.children[2].style.display = 'none';
            item.children[1].src = "images/icon-arrow-dark.svg";
            item.children[1].style.transform = 'rotate(360deg)'
            booleanDrop = true;
        }
    });
})


let booleanDropMobile = true;
mobileMenuLi.forEach(item => {
    item.addEventListener('click', () => {
        if(booleanDropMobile) {
            item.children[2].style.display = 'block';
            item.children[1].style.transform = 'rotate(180deg)'
            booleanDropMobile = false;
        } else {
            item.children[2].style.display = 'none';
            item.children[1].style.transform = 'rotate(360deg)'
            booleanDropMobile = true;
        }
    });
})


let booleanHamClose = true;
iconHamburger.addEventListener('click', () => {
    console.log('click')
    if (booleanHamClose) {
        iconHamburger.src = "images/icon-close.svg";
        mobileMenu.style.top = '150px';
        booleanHamClose = false;
    } else {
        iconHamburger.src = "images/icon-hamburger.svg";
        mobileMenu.style.top = '-350px';
        booleanHamClose = true;
    }
})
