import data from './data.json' with { type: 'json' };

const resultNum = document.querySelector('.result-number');
const ul = document.querySelector('ul');

const sum = data.reduce((acc, obj) => acc + obj.score, 0)
resultNum.innerText = `${Math.floor(sum / data.length)}`;

const template = data.map(item => {
    let lowerCaseCategory = item.category.toLocaleLowerCase();
    return `<li class="${lowerCaseCategory}">
    <div>
        <img src="${item.icon}" alt="${lowerCaseCategory}">
        <p>${item.category}</p>
    </div>
    <div class="number">
        <span class="${lowerCaseCategory}-num bold">${item.score}</span>
        <span>/ 100</span>
    </div>
</li>`;
});

ul.innerHTML = template.join('');