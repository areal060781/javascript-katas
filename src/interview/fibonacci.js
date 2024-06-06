/* En matemáticas, la sucesión de Fibonacci es una sucesión infinita de números naturales como la siguiente:
0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597…
La sucesión comienza con dos números naturales (dependiendo de la referencia, con 0 y 1 en ciertos casos, 
    otras inician con 1 y 1) y a partir de estos, «cada término es la suma de los dos anteriores», 
    es la relación de recurrencia que la define.
*/
const isPerfectSquare = require('./perfect-square');

function isFibonacci(n){
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

/**
 * Recurrence relation formula:
 * F0 = 0
 * F1 = 1
 * Fn = F(n-1) + F(n-2)
 * @param {*} number 
 * @returns 
 */
function listFibonacciNumbers(number){
    let fibo = [0,1,1]
    for(let n = 2; i < number; n++){
        fibo[n] = fibo[n - 1] + fibo[n - 2];
    }

    return fibo.join(',')
}


module.exports = {isFibonacci, listFibonacciNumbers}