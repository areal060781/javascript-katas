/**
 * prime number is a positive integer exactly divisible by 1 and itself. In other words, 
 * a prime number will have only 2 factors. The first ten prime numbers are.
 * 2, 3, 5, 7, 11, 13, 17, 19, 23
 * https://medium.com/logic-gates/how-to-determine-a-prime-number-efficiently-bca843c4d377
 */

function isPrime(number){
    let accumulator = 0;
    for (let i = number; i > 0; i--){
        let remainder = number % i;
        if (remainder == 0){
            accumulator += i;
        }
    }
    return (accumulator == (number + 1)) ? true : false;
}

module.exports = { isPrime }