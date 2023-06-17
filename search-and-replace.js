// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// Intermediate Algorithm Scripting
// Search and Replace

// My passing solution
function myReplace(str, before, after) {
    let capitalMatch = /[A-Z]/g;
    let ind = str.indexOf ( before );
  
    if ( str.charAt ( ind ).match ( capitalMatch) ) {
      
      after = after.charAt(0).toUpperCase() + after.substring(1);
  
    } else if ( after.charAt(0).match (capitalMatch) ) {
  
      after = after.charAt(0).toLowerCase() + after.substring(1);
  
    }
  
    str = str.substring(0,ind) + after + str.substring ( ind + before.length );
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


///////////////////////////
/// FCC HINT SOLUTIONS ///
//////////////////////////

function myReplace(str, before, after) {
    // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
    if (/^[A-Z]/.test(before)) {
      after = after[0].toUpperCase() + after.substring(1)
    } else {
      after = after[0].toLowerCase() + after.substring(1)
    }
  
    // return string with argument "before" replaced by argument "after" (with correct case)
    return str.replace(before, after);
  }
  
  // test here
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// test here
function myReplace(str, before, after) {
    const strArr = str.split(" ");
    const [wordToReplace] = strArr.filter(item => item === before);
    const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
      ? after[0].toUpperCase() + after.slice(1)
      : after[0].toLowerCase() + after.slice(1);
    return strArr.map(item => (item === before ? replacement : item)).join(" ");
  }
  
  // test:
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");