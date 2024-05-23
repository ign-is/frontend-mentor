const mainContainer = document.querySelector('.container');
const success = document.querySelector('.success-container');
const error = document.querySelector('.error');
const emailAdress = document.querySelector('.bold-email');
const btnDismiss = document.querySelector('.btn-dismiss');
const input = document.getElementById('email');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (regex.test(input.value)) {
        mainContainer.style.display = 'none';
        success.style.display = 'block';
        emailAdress.innerText = input.value;
    } else {
        error.style.display = 'inline';
        input.style.backgroundColor = 'var(--tomato-opacity)';
        input.style.borderColor = 'var(--tomato)';
        input.style.outlineColor = 'var(--tomato)';
        input.style.color = 'var(--tomato)';
    }
})

btnDismiss.addEventListener('click', () => {
    success.style.marginTop = '-2000px';
})