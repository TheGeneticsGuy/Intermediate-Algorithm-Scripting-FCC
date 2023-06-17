// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// Intermediate Algorithm Scripting
// Steamroller

// My passing solution
function steamrollArray(arr) {
    let result = [];
  
    arr.forEach( (item) => {
      // Only need to flatten if item is an array
      if ( Array.isArray ( item ) ) {
        result.push(...steamrollArray ( item ) ); // Recursively flatten the nested
      } else {
        result.push( item );
      }
    });
  
    return result;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);

///////////////////////////
/// FCC HINT SOLUTIONS ///
//////////////////////////

// Solution 1
function steamrollArray(arr) {
    const flattenedArray = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // Recursively flatten entries that are arrays
        //  and push into the flattenedArray
        flattenedArray.push(...steamrollArray(arr[i]));
      } else {
        // Copy contents that are not arrays
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
  };
  
  // test here -- this is so clever...
  function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);