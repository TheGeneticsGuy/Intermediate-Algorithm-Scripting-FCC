// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// Intermediate Algorithm Scripting
// Drop It

// My passing solution
function dropElements(arr, func) {

    for ( let i=0;i< arr.length;i++) {
      if (func(arr[i])) {
        return arr.slice (i);
      }
  
    }
    // Never found a true just return an empty array
    return [];
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });

///////////////////////////
/// FCC HINT SOLUTIONS ///
//////////////////////////

// Solution 1
function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
  }
  
  // test here
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  });
  
  // Solution 2
  function dropElements(arr, func) {
    let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
  }
  
  // test here
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  });