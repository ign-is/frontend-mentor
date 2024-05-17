const navDrop = document.querySelectorAll('nav .left > ul:first-of-type > li');
const iconHamburger = document.querySelector('.icon-hamburger');

let boolean = true;
navDrop.forEach(item => {
    item.addEventListener('click', () => {
        if(boolean) {
            item.children[2].style.display = 'block';
            item.children[1].src = "images/icon-arrow-light.svg";
            item.children[1].style.transform = 'rotate(180deg)'
            boolean = false;
        } else {
            item.children[2].style.display = 'none';
            item.children[1].src = "images/icon-arrow-dark.svg";
            item.children[1].style.transform = 'rotate(360deg)'
            boolean = true;
        }
    });
})
