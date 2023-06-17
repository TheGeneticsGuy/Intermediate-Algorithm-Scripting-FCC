// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// Intermediate Algorithm Scripting
// Map the Debris

// My passing solution
function orbitalPeriod(arr) {
    const gm = 398600.4418;
    const earthRadius = 6367.4447;
  
    const OrbitalCalc = (avgAlt) => {
      const semiMajorAxis = earthRadius + avgAlt; // Calculate semi-major axis(a)
      const orbitalPeriodInSeconds = 2 * Math.PI * Math.sqrt(Math.pow(semiMajorAxis, 3) / gm);
      return Math.round(orbitalPeriodInSeconds); // Round to the nearest whole number
    };
  
  // Returning new array transformed. No more avgAlt, replaced by OrbitalPeriod
    return arr.map( ( { name, avgAlt } ) => ({
      name,
      orbitalPeriod: OrbitalCalc(avgAlt)
    }));
  
  }
  
  console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));

///////////////////////////
/// FCC HINT SOLUTIONS ///
//////////////////////////

// Solution 1
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArr = [];
  
    const getOrbPeriod = function(obj) {
      const c = Math.pow(earthRadius + obj.avgAlt, 3);
      const b = Math.sqrt(c / GM);
      const orbPeriod = Math.round(a * b);
      // create new object
      return {name: obj.name, orbitalPeriod: orbPeriod};
    };
  
    for (let elem in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
    }
  
    return newArr;
  }

// Solution 2
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = [];

  //Looping through each key in arr object
  for (let elem in arr) {
    //Rounding off the orbital period value
    const orbitalPer = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
    );
    //Adding new object with orbitalPeriod property
    newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
  }

  return newArr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);