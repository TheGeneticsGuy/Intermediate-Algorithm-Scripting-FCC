// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// Intermediate Algorithm Scripting
// Wherefore art thou

// My passing solution
function whatIsInAName(collection, source) {
  let result = [];
  let match = false;

  for ( let i=0;i<collection.length;i++) {
    match = true;
    for ( let x in source ) {
      if ( !collection[i][x] || collection[i][x] !== source[x] ) {
        match = false;
        break;
      }
    }

    if ( match ) {
      result.push ( collection[i]);
    }
  }
  console.log(result)
  return result;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



///////////////////////////
/// FCC HINT SOLUTIONS ///
//////////////////////////

// Optional Solution
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  const souceKeys = Object.keys(source);

  // filter the collection
  return collection.filter(obj => {
    for (let i = 0; i < souceKeys.length; i++) {
      if (obj[souceKeys[i]] !== source[souceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

// Options Solution 2
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  const souceKeys = Object.keys(source);

  // filter the collection
  return collection.filter(obj => souceKeys
      .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
      .reduce((a, b) => a && b));
}