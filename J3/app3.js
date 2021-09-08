const redTitle = document.querySelector('#red-title')
const blueTitle = document.querySelector('#blue-title')
const greenTitle = document.querySelector('#green-title')

const redBtn = document.querySelector('#red-btn')
const blueBtn = document.querySelector('#blue-btn')
const greenBtn = document.querySelector('#green-btn')

redBtn.addEventListener('click', ChangeColorToRed)
blueBtn.addEventListener('click', ChangeColorToBlue)
greenBtn.addEventListener('click', ChangeColorToGreen)

function ChangeColorToRed() {
    redTitle.classList.toggle('red')
    redBtn.classList.toggle('red-btn')
}

function ChangeColorToBlue() {
    blueTitle.classList.toggle('blue')
    blueBtn.classList.toggle('blue-btn')
}

function ChangeColorToGreen() {
    greenTitle.classList.toggle('green')
    greenBtn.classList.toggle('green-btn')
}
