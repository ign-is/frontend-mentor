const amounts = document.querySelectorAll('.amount');
const days = document.querySelectorAll('.day')

function render(data) {

    for (let i = 0; i < data.length; i++) {
        amounts[i].innerText = `$${data[i].amount}`;
        days[i].innerText = `${data[i].day}`;
    }

}

async function fetchData() {

    try {
      const response = await fetch('data.json');
      const jsonData = await response.json();
      render(jsonData);
    } catch (error) {
      console.error(error);
    }

  }


fetchData();

document.querySelectorAll('.bar').forEach(bar => {

    bar.addEventListener('mouseover', () => {
      bar.previousElementSibling.style.visibility = 'visible';
    });

    bar.addEventListener('mouseout', () => {
        bar.previousElementSibling.style.visibility = 'hidden';
    });

});