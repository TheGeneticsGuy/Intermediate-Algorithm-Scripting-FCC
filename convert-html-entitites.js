// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// Intermediate Algorithm Scripting
// Convert HTML Entities

// My passing solution
function convertHTML(str) {
    let html = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\'": "&apos;",
      "\"": "&quot;"
    }
  
    for ( let key in html ) {
      // Using a dynamic key for a regular expression it needs to be declared each time
      str = str.replace ( new RegExp(key, "g") , html[key] );
    }
  
    return str;
  }
  
  convertHTML("Dolce & Gabbana");

///////////////////////////
/// FCC HINT SOLUTIONS ///
//////////////////////////

// Solution 1
function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }
  
  // test here
  convertHTML("Dolce & Gabbana");
  
  // Solution 2
  function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str
      .split("")
      .map(entity => htmlEntities[entity] || entity)
      .join("");
  }
  
  // test here
  convertHTML("Dolce & Gabbana");