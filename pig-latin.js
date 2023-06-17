// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// Intermediate Algorithm Scripting
// Pig Latin

// My passing solution
// Needs RegEx next time
function translatePigLatin(str) {
  
  let vowels = [ 'a' , 'e' , 'i' , 'o' , 'u' ];

  if ( vowels.includes ( str.charAt(0).toLowerCase() ) ) {
    str += "way";
  } else {
    let ind = -1;
    for ( let i = 1; i < str.length; i++ ) {
      if ( vowels.includes ( str.charAt ( i ) ) ) {
        ind = i;
        break;
      }
    }
    
    if ( ind != -1 ) {
      str = str.substring( ind ) + str.substring(0 , ind ).toLowerCase() + "ay";
    } else {
      str += "ay";
    }
    
  }
  return str;
}

translatePigLatin("consonant");


///////////////////////////
/// FCC HINT SOLUTIONS ///
//////////////////////////

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");

// test here
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = "";
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + "ay";
  } else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }