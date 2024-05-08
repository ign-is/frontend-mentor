const checkbox = document.querySelector('.input-checkbox');
const body = document.querySelector('body');
const header = document.querySelector('header');
const subTitle = document.querySelector('.title-total h4');
const overview = document.querySelector('.container > h2');
const darkModeText = document.querySelector('header .dark-toggle h4');
const innerBox = document.querySelectorAll('.inner-box');
const bottomBox = document.querySelectorAll('.bottom-grid .box');
const viewLikes = document.querySelectorAll('.bottom-grid .box .top p');
const user = document.querySelectorAll('.inner-box .user p');
const followSubs = document.querySelectorAll('.inner-box > p');
const switchHover = document.querySelector('.switch');

switchHover.addEventListener('mouseover', () => {
    if(checkbox.checked) {
        darkModeText.style.color = 'white';
    }
})

switchHover.addEventListener('mouseout', () => {
    if (checkbox.checked) {
        darkModeText.style.color = 'var(--desaturated-blue-text)';
    }
})

const mouseOverTop = (num) => {
    
    if (checkbox.checked) {
        innerBox[num].style.backgroundColor = 'rgb(51, 58, 86)';
    } else {
        innerBox[num].style.backgroundColor = 'rgb(225, 227, 240)';
    }
}

const mouseOutTop = (num) => {

    if (checkbox.checked) {
        innerBox[num].style.backgroundColor = 'var(--dark-desaturated-blue-card-bg)';
    } else {
        innerBox[num].style.backgroundColor = 'var(--light-grayish-blue-card-bg)';
    }
}

const mouseOverBottom = (num) => {
    if (checkbox.checked) {
        bottomBox[num].style.backgroundColor = 'rgb(51, 58, 86)';
    } else {
        bottomBox[num].style.backgroundColor = 'rgb(225, 227, 240)';
    }
}

const mouseOutBottom = (num) => {
    if (checkbox.checked) {
        bottomBox[num].style.backgroundColor = 'var(--dark-desaturated-blue-card-bg)';
    } else {
        bottomBox[num].style.backgroundColor = 'var(--light-grayish-blue-card-bg)';
    }
}


bottomBox.forEach((box, i) => {
    box.addEventListener('mouseover', () => mouseOverBottom(i));
    box.addEventListener('mouseout', () => mouseOutBottom(i));
})

innerBox.forEach((box, i) => {
    box.addEventListener('mouseover', () => mouseOverTop(i));
    box.addEventListener('mouseout', () => mouseOutTop(i));
})


checkbox.addEventListener('click', () => {

    if (checkbox.checked) {
        header.style.backgroundColor = 'var(--very-dark-blue-top-bg-pattern)';
        body.style.backgroundColor = 'var(--very-dark-blue-bg)';
        body.style.color = 'var(--white-text)';
        subTitle.style.color = 'var(--desaturated-blue-text)';
        darkModeText.style.color = 'var(--desaturated-blue-text)';
        overview.style.color = 'var(--white-text)';   

        for (let i = 0; i < innerBox.length; i++) {
            innerBox[i].style.backgroundColor = 'var(--dark-desaturated-blue-card-bg)';
            user[i].style.color = 'var(--desaturated-blue-text)';
            followSubs[i].style.color = 'var(--desaturated-blue-text)';
        }

        for (let i = 0; i < bottomBox.length; i++) {
            bottomBox[i].style.backgroundColor = 'var(--dark-desaturated-blue-card-bg)';
            viewLikes[i].style.color = 'var(--desaturated-blue-text)';
        }

    } else {
        header.style.backgroundColor = 'var(--very-pale-blue-top-bg-pattern)';
        body.style.backgroundColor = 'var(--white-bg)';
        body.style.color = 'var(--very-dark-blue-text)';
        subTitle.style.color = 'var(--dark-grayish-blue-text)';
        darkModeText.style.color = 'var(--desaturated-blue-text)';
        overview.style.color = 'var(--dark-grayish-blue-text)';

        for (let i = 0; i < innerBox.length; i++) {
            innerBox[i].style.backgroundColor = 'var(--light-grayish-blue-card-bg)';
            user[i].style.color = 'var(--dark-grayish-blue-text)';
            followSubs[i].style.color = 'var(--dark-grayish-blue-text)';
        }

        for (let i = 0; i < bottomBox.length; i++) {
            bottomBox[i].style.backgroundColor = 'var(--light-grayish-blue-card-bg)';
            viewLikes[i].style.color = 'var(--dark-grayish-blue-text)';
        }

    }
})


