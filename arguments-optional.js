// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// Intermediate Algorithm Scripting
// Arguments Optional

// My passing solution
function addTogether(a,b) {

    //return undefined if any arguments are not numbers.
    for ( let i=0;i<arguments.length;i++) {
      if ( typeof arguments[i] != "number" ) {
        return;
      }
    }
  
    if (a && b) {
      if (typeof a != "number" || typeof b != "number" ) {
        return;
      } else {
        return a + b;
      }
    } else {
      return function(c) {
        if ( typeof c != "number" ) {
          return;
        }
        return a + c;
      };
  
    }
  
  }
  
  addTogether(2,3);

///////////////////////////
/// FCC HINT SOLUTIONS ///
//////////////////////////

// Solution 1
function addTogether() {
    const [first, second] = arguments;
  
    if (typeof (first) === "number") {
      if (typeof (second) === "number") return first + second;
      if (arguments.length === 1) return (second) => addTogether(first, second);
    }
  }

  // Solution 2
  function addTogether() {
    const [first, second] = arguments;
  
    function addSecond(second) {
      if (typeof (second) === "number") return first + second;
    }
  
    if (typeof (first) === "number") {
      if (arguments.length === 1) return addSecond;
      if (arguments.length === 2) return addSecond(second);
    }
  }