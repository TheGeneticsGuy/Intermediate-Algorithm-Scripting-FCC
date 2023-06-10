// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// Intermediate Algorithm Scripting
// Seek and Destroy

// My passing solution
function destroyer(arr) {
  let index = 0;
  
  for (let i=1;i <arguments.length;i++) {
    index = arr.indexOf(arguments[i]);
    if ( index > -1 ) {
      arr.splice ( index , 1);
      i--;
    }
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);




///////////////////////////
/// FCC HINT SOLUTIONS ///
//////////////////////////

// Optional Solution
function destroyer(arr) {
  const valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}

// Options Solution 2
function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}