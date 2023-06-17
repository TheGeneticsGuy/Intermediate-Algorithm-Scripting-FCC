// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// Intermediate Algorithm Scripting
// Sum All Odd Fibonacci Numbers

// My passing solution
function sumFibs(num) {
    let sum = 1;
    let i = 1;
    let result = 0;
  
    while ( i <= num ) {
      i = sum - i;
      sum += i;
  
      if ( i <= num && i%2 !== 0 ) {
        result += i;
        console.log(result)
      }
    }
    return result;
  }
  
  sumFibs(4);

///////////////////////////
/// FCC HINT SOLUTIONS ///
//////////////////////////

// Solution 1
function sumFibs(num) {
    // Perform checks for the validity of the input
    if (num <= 0) return 0;
  
    // Create an array of fib numbers till num
    const arrFib = [1, 1];
    let nextFib = 0;
  
    // We put the new Fibonacci numbers to the front so we
    // don't need to calculate the length of the array on each
    // iteration
    while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
      arrFib.unshift(nextFib);
    }
  
    // We filter the array to get the odd numbers and reduce them to get their sum.
    return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
  }
  
  // test here
  sumFibs(4);
  
  // Solution 2
  function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }
  
  // test here
  sumFibs(4);