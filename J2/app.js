// function jamZarb(a, b, c, d, e) {
//     let jam = a + b + c + d + e
//     let zarb = a * b * c * d * e

//     let result = zarb - jam

//     return result
// }

// console.log(jamZarb(1, 2, 3, 4, 5))

// let a = jamZarb(5, 6, 7, 8, 9, 10)
// console.log(a)

// console.log(jamZarb(10, 11, 12, 13, 14, 15))

// let b = prompt('salam')
// console.log(b)

// loops
// for each - while
// for

// let number = 1

// while (number <= 10) {
//     console.log(number)
//     number += 1 | number++ | number--
// }

// let fruits = ['apple', 'oragne', 'banana', 'narengi']

// let newFruits = []
// apple => apple khoobe => ['apple khoobe']
// orange => orange khoobe => ['apple khoobe', 'orange khoobe']

// fruits.forEach(function (mive) {
//     mive += ' ' + 'khoobe'
//     newFruits.push(mive)
//     console.log(newFruits)
// })

let fruits = ['apple', 'oragne', 'banana', 'narengi', 'khiar']
let newFruits = []

for (let i = 0; i <= 4; i++) {
    let result = fruits[i] + ' ' + 'khoobe'
    newFruits.push(result)
}

console.log(newFruits)
