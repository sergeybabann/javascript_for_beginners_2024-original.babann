// Типы данных

// string (строка)
let nameUser = 'Mark' // любой текст внутри кавычек
console.log(nameUser)

// number (число)
let age = 30 // любое число без кавычек
console.log(age)

// boolean (логический)
let isMarried = false // true/false - 2 значения
console.log(isMarried)

// dynamic type
let someVariable = 'Some value' // тип данных string
someVariable = 50 // тип данных number. поменялся тип данных у той же переменной
someVariable = true // boolean , тип данных опять поменялся и стал типом boolean 
console.log(someVariable)

// null
let height = null // тип данных null (ничего, не известно)
console.log(height)

// undefined 
let nameUser2; 
console.log(nameUser2) // переменная объявлена, но ее значение не определено

// typeof
const someName = 44
const someName2 = 'Bob'
console.log(typeof someName)
console.log(typeof someName2)
