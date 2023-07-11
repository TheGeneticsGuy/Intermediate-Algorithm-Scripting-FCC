// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// PROJECTS
// Caesars Cipher

// My passing solution
function rot13(str) {
  let range = [ 65 , 90]; // A-Z 65-90 in ASCII
  let shift = 13;
  let result = "";

  // Shift the range to go back to 65 ("A") if at end of alphabet
  function addThirteen (num) {
    if ( num + shift > range[1] ) {
      return range[0] + ( shift - ( range[1] - num + 1 ) );
    } else {
      return num + shift;
    }
  }

  // Convert the code
  for ( let i=0;i<str.length;i++) {
    let codeValue = str.charCodeAt(i);

    if ( codeValue < range[0] || codeValue > range[1] ) {
      result += str.charAt(i);
    } else {
      result += String.fromCharCode( addThirteen (codeValue ) );
    }

  }

  return result;
}

rot13("SERR PBQR PNZC");

// NO HINTS OR ALTERNATE SOLUTIONS PROVIDED ON CERTS