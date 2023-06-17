// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// Intermediate Algorithm Scripting
// Sum All Primes

// My passing solution
function sumPrimes(num) {
    let result = 0;
  
    function isPrime(number) {
      if (number <= 1) {
        return false;
      }
      // Check if divisible from 2 to the square root of the number
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    for ( let i=0;i<=num;i++) {
      if ( isPrime(i)) {
        result += i;
      }
    }
  
    return result;
  }
  
  sumPrimes(10);

///////////////////////////
/// FCC HINT SOLUTIONS ///
//////////////////////////

// Solution 1
function sumPrimes(num) {
    // Check all numbers for primality
    let primes = [];
    for (let i = 2; i <= num; i++) {
      if (primes.every((prime) => i % prime !== 0))
        primes.push(i);
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
  }
  // test here
  sumFibs(4);
  
  // Solution 2
  function sumPrimes(num) {
    // Prime number sieve
    let isPrime = Array(num + 1).fill(true);
    // 0 and 1 are not prime
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (isPrime[i]) {
        // i has not been marked false -- it is prime
        for (let j = i * i; j <= num; j += i)
          isPrime[j] = false;
      }
    }
  
    // Sum all values still marked prime
    return isPrime.reduce(
      (sum, prime, index) => prime ? sum + index : sum, 0
    );
  }