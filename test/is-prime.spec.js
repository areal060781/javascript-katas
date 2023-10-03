const {describe, it} = require('mocha');
const {expect} = require('chai');

const { isPrime } = require("../src/interview/prime-number.js")

describe("Is prime number", function(){
    const primeNumbers = [
        {args: 2, expected: true},
        {args: 3, expected: true},        
        {args: 5, expected: true},        
        {args: 7, expected: true}
      ];
    
      primeNumbers.forEach(({args, expected}) => {
        it(`Verify if ${args} is a prime number`, function () {
          const res = isPrime(args);
          expect(isPrime(args)).to.equal(expected);
          
        });
      });

      const nonPrimeNumbers = [
        {args: 4, expected: false},        
        {args: 6, expected: false},
        {args: 8, expected: false}
      ];
    
      nonPrimeNumbers.forEach(({args, expected}) => {
        it(`Verify if ${args} is not a prime number`, function () {
          const res = isPrime(args);
          expect(isPrime(args)).to.equal(expected);
          
        });
      });
})