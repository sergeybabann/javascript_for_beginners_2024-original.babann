//---------- return ----------//

/*
function summ(a, b) {
    const result = a + b;
    console.log(result)
}

summ(10, 15) // 10 идет на a, 15 идет на 15,то есть по порядку

console.log(typeof summ)
*/


// функция summ возвращает результат сложения двух параметров в константе result 
function summ(a, b) {
    const result = a + b;
    return result;
}

let res = summ(10, 15);
console.log(res);

