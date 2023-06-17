// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// Intermediate Algorithm Scripting
// Spinal tap case

// My passing solution
function spinalCase(str) {
  let result = str + "";

  if ( result.indexOf ( /[a-z][A-Z]/ ) ) {
    result = result.replace ( /([a-z])([A-Z])/g , "$1-$2" );
  }

  if ( result.includes ("_") ) {
      result = result.replace ( /_/g , "-" );
    }

  if ( result.indexOf(/\s/) ) {
    result = result.replace(/\s/g, "-").toLowerCase();
  }

  return result.toLowerCase();
}

spinalCase('This Is Spinal Tap');


///////////////////////////
/// FCC HINT SOLUTIONS ///
//////////////////////////

// Optional Solution
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

// test here
spinalCase("This Is Spinal Tap");

// Options Solution 2
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}

// test here
spinalCase("This Is Spinal Tap");