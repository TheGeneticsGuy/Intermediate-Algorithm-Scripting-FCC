// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// Intermediate Algorithm Scripting
// Diff Two Arrays

// My passing solution
function diffArray(arr1, arr2) {

  function addUnique (array1 , array2) {
    let tempArr = [];
    for ( let i = 0; i<array1.length;i++) {

      if ( !array2.includes( array1[i] ) ) {
        tempArr.push ( array1[i]);
      }
    }
    return tempArr;
  }

  return addUnique(arr1,arr2).concat(addUnique(arr2,arr1));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);




///////////////////////////
/// FCC HINT SOLUTIONS ///
//////////////////////////

// Optional Solution
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Options Solution 2
function diffArray(arr1, arr2) {
  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }

  return [...diff(arr1, arr2), ...diff(arr2, arr1)];
}