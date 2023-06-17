// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// Intermediate Algorithm Scripting
// Missing Letters

// My passing solution
function fearNotLetter(str) {

    for ( let i=1;i<str.length;i++) {
      if ( str.charCodeAt(i) != ( str.charCodeAt(i - 1) + 1 ) ) {
  
        // Take the char index, then minus it by 1 as all chars have numerical byte code
        return String.fromCharCode(str.charCodeAt(i)-1);
        
      }
    }
    return;
  }
  
  fearNotLetter("abce");

///////////////////////////
/// FCC HINT SOLUTIONS ///
//////////////////////////

// Solution 1
function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
      /* code of current character */
      const charCode = str.charCodeAt(i);
  
      /* if code of current character is not equal to first character + no of iteration
          then a letter was skipped */
      if (charCode !== str.charCodeAt(0) + i) {
        /* if current character skipped past a character find previous character and return */
        return String.fromCharCode(charCode - 1);
      }
    }
    return undefined;
  }
  
  // test here
  fearNotLetter("abce");
  
  // Solution 2
  function fearNotLetter(str) {
    let currCharCode = str.charCodeAt(0);
    let missing = undefined;
  
    str
      .split("")
      .forEach(letter => {
        if (letter.charCodeAt(0) === currCharCode) {
          currCharCode++;
        } else {
          missing = String.fromCharCode(currCharCode);
        }
      });
  
    return missing;
  }
  
  // test here
  fearNotLetter("abce");