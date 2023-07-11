// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// PROJECTS
// Roman Numeral Converter

// My passing solution
function convertToRoman(num) {

    let result = "";
    let numerals = {
      1000: "M",
      900: "CM",
      500: "D",
      400: "CD",
      100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
      9: "IX",
      5: "V",
      4: "IV",
      1: "I"
     }
  
    // I needed to create an ordered list because the numerals table was always going 1 to 1000
     let sortedNumerals = [ 1000 , 900 , 500 , 400 , 100 , 90 , 50 , 40 , 10 , 9 , 5 , 4 , 1];
  
    for ( let i=0; i<sortedNumerals.length;i++ ) {
      for ( let j=0;j< ( Math.floor( num/sortedNumerals[i] ) );j++) {
        result += numerals[sortedNumerals[i]];
        console.log(result)
      }
  
      num = ( num % sortedNumerals[i] );
    }
  
   return result;
  }
  
  convertToRoman(36);

// NO HINTS OR ALTERNATE SOLUTIONS PROVIDED ON CERTS