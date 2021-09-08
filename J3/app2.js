const h1Tag = document.querySelectorAll('h1')
console.log(h1Tag)

const h2Class = document.querySelector('.heading')

const h3Id = document.querySelector('#heading')

h2Class.style.color = 'green'
h3Id.style.color = 'blue'

console.log(h2Class)
console.log(h3Id)

h1Tag.forEach(function (h1) {
    h1.style.color = 'red'
})
