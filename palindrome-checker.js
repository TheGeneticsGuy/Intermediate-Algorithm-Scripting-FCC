// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// PROJECTS
// Palindrome Checker

// My passing solution
function palindrome(str) {

  let normalize = function(text) {
    return text.replace(/[\W_]/g, '').toLowerCase();
  }

  let backwards = ( function() {
    let tex = normalize(str);
    let result = "";
    for ( let i=tex.length-1;i>=0;i--) {
      result += tex[i];
    }
    return result;
  })();

  let forwards = normalize(str);

  if ( backwards === forwards ) {
    return true;
  } else {
    return false;
  }

}

palindrome("eye");

// NO HINTS OR ALTERNATE SOLUTIONS PROVIDESD ON CERTS