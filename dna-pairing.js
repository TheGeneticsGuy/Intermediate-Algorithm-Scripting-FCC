// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// Intermediate Algorithm Scripting
// DNA Pairing

// My passing solution
function pairElement(str) {
    let dna = {
      "A": "T",
      "T": "A",
      "C": "G",
      "G": "C" 
    }
  
    let result = [];
  
    for ( let i=0;i<str.length;i++) {
      result.push ( [str.charAt(i),dna[str.charAt(i)] ])
    }
  
    return result;
  }
  
  pairElement("GCG");


///////////////////////////
/// FCC HINT SOLUTIONS ///
//////////////////////////

function pairElement(str) {
    // create object for pair lookup
    const pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
  
    // map character to array of character and matching pair
    return str
      .split("")
      .map(x => [x, pairs[x]]);
  }
  
  // test here
// N/A
