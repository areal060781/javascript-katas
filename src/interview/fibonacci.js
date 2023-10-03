function isPerfectSquare(n){
    let s = parseInt(Math.sqrt(n));
    return (s * s == x);
}

function isFibonacci(n){
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

function listFibonacciNumbers(number){

}

module.exports = {isFibonacci, listFibonacciNumbers}