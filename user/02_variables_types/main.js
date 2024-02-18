// Объявление переменной userName и присвоение ей значения Марк.
// Затем присвоение ей других значений:

let userName = 'Марк'
console.log(userName)
userName = 'Егор'
console.log(userName)
userName = 'Анжела'
console.log(userName)

// Попытка присвоения нового значения перемнной типа const.
// Консоль выдаст ошибку с текстом: Uncaught TypeError: Assignment to constant variable
const yearOfBirth = 1990
yearOfBirth = 2000;

// Переменная типа let может объявляться без присвоения значений,
// эти значения могут быть присвоены ей позже.
let name, age
name = 'Юрий'
age = '29'
console.log(name)
console.log(age)

// Переменной типа const после ее объявления сразу нужно присвоить значение.
const height = 180; 
console,log(height);




