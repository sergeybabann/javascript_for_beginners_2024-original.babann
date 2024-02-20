//---------- Функция как аргумент ----------//

/*
// функция как аргумент
function summ(a, b) {
    return a + b
}

console.log(summ(15, 15)) // выводится функция с аргументами 10, 15
*/

/*
function summ(a,b) {
    return a + b
}

const result = summ(summ(15, 15), summ(20, 20))
console.log(result)
*/

function summ(a,b) {
    return a + b
}

function diff(a, b) {
    return a - b
}

function doSomething(func) {
    let x = 10
    let y = 15
    let result = func(x, y) 
    console.log(result)
}

doSomething(summ) // 25
doSomething(diff) // -5