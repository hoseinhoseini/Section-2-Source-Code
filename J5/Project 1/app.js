// variables
const number = document.querySelector('#value')

const bealaveBtn = document.querySelector('.increase')
const resetBtn = document.querySelector('.reset')
const menhaBtn = document.querySelector('.decrease')

const title = document.querySelector('h1')
// eventlisteners

// add event listener for bealave Button
bealaveBtn.addEventListener('click', plusNumber)
menhaBtn.addEventListener('click', menhaNumber)
resetBtn.addEventListener('click', resetNumber)

// Functions
function plusNumber() {
    number.textContent++

    if (number.textContent > 0) {
        number.style.color = 'green'
        title.style.color = 'green'
        title.textContent = 'Hossein'
    }
    if (number.textContent < 0) {
        number.style.color = 'red'
        title.style.color = 'red'
        title.textContent = 'Hossein'
    }
    if (number == 0) {
        number.style.color = 'hsl(209, 61%, 16%)'
        title.style.color = 'hsl(209, 61%, 16%)'
        title.textContent = 'Counter'
    }
}
function menhaNumber() {
    number.textContent--
    if (number.textContent > 0) {
        number.style.color = 'green'
        title.style.color = 'green'
        title.textContent = 'Hossein'
    } else if (number.textContent < 0) {
        number.style.color = 'red'
        title.style.color = 'red'
        title.textContent = 'Hossein'
    } else {
        number.style.color = 'hsl(209, 61%, 16%)'
        title.style.color = 'hsl(209, 61%, 16%)'
        title.textContent = 'Counter'
    }
}
function resetNumber() {
    number.textContent = 0
    number.style.color = 'hsl(209, 61%, 16%)'
    title.style.color = 'hsl(209, 61%, 16%)'
    title.textContent = 'Counter'
}

console.log(number)
