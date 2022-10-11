const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

// btn.addEventListener('click', btnOnClick);
form.addEventListener('submit', btnOnClick);

function btnOnClick(event) {
    event.preventDefault();
    const a = Number(input1.value);
    const b = Number(input2.value);
    const sumaInputs = a + b;
    pResult.innerText = "Resultado: " + sumaInputs;
}

