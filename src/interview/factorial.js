/**
El factorial de un entero positivo n, el factorial de n o n factorial se define en principio como el producto de todos 
los números enteros positivos desde 1 (es decir, los números naturales) hasta n. Por ejemplo:
5!=1×2×3×4×5=120.
 */
function getFactorial(number){
    let factorial = 1;

    for(let i = 1; i<= number; i++){        
        factorial *= i;
    }

    return factorial
}

module.exports = getFactorial