// Типы данных

// string (строка)
let nameUser = 'Mark' // любой текст внутри кавычек
console.log(nameUser)

// number (число)
let age = 30 // любое число без кавычек
console.log(age)

// boolean (логический)
let isMarried = true 
let devorced = false
console.log(isMarried)
console.log(devorced) // true/false - всего 2 значения

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

// BigInt
console.log(Number.MAX_SAFE_INTEGER) 
// выводит максимально большое число c которым может работать тип number
console.log(90071992547409919007199254740991n); // к числу дописывается символ n и число преобразуется в тип BigInt

// Symbol
// тип Symbol - это уникальное примитивное значение. 
// Оно позволяет добавлять уникальное свойство к объекту
// с увереностью, что он не перезапишет никакое другое свойство, 
// уже существующее у объекта

