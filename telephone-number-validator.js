// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// PROJECTS
// Telephone Number Validator

// My passing solution
function telephoneCheck(str) {
  
    let tempStr = str.replace ( /\s/g , '');
    let finalRegEx = /^(1\(\d{3}\)\d{7}|\(\d{3}\)\d{7}|1\d{10}|\d{10})$/;
  
    // Check if any out of place hyphens
    // Check the first, and then check the last 7 numbers to ensure they are not improper
    if ( tempStr.charAt(0) === "-" || !tempStr.match ( /\d{3}\-\d{4}$|\d{7}$/ )) {
      return false;
    }
    // Ok, let's remove the hyphens now
    tempStr = tempStr.replace ( /\-/g , '' );
  
    // Check if any character other than parenthesis or number
    if ( tempStr.match ( /[^0-9()]/g ) ) {
      return false;
    }
    
    // Now we can verify it is all in the final correct format
    if ( !tempStr.match ( finalRegEx ) ) {
      return false;
    }
    return true;
  }
  
  telephoneCheck("555-555-5555");
  
// NO HINTS OR ALTERNATE SOLUTIONS PROVIDED ON CERTS