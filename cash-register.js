// FreeCodeAcademy.org
// Curriculum
// JavaScript Algorithms and Data Structures
// PROJECTS
// Cash Register

// My passing solution
function checkCashRegister(price, cash, cid) {
  let statusOptions = [ "INSUFFICIENT_FUNDS" , "CLOSED" , "OPEN" ];
  let changeNeeded = (cash - price);
  let numCoins = {
    "PENNY": Math.round(cid[0][1] / 0.01),
    "NICKEL": Math.round(cid[1][1] / 0.05),
    "DIME": Math.round(cid[2][1] / 0.10),
    "QUARTER": Math.round(cid[3][1] / 0.25)
  }
  let numCash = {
    "ONE": Math.round(cid[4][1] / 1),
    "FIVE": Math.round(cid[5][1] / 5),
    "TEN": Math.round(cid[6][1] / 10),
    "TWENTY": Math.round(cid[7][1] / 20),
    "ONE HUNDRED": Math.round(cid[8][1] / 100)
  }
  
  let cashOrder = [ ["ONE HUNDRED" , 100 ] , ["TWENTY" , 20] , ["TEN" , 10] , ["FIVE" , 5] , ["ONE" , 1] , ["QUARTER" , 0.25] , ["DIME" , 0.10] , ["NICKEL" , 0.05] , ["PENNY" , 0.01] ];
  
  // Get total available funds in Cash Register
  function availableFunds(money) {
    let result = 0;

    for ( let i=0;i<money.length;i++) {
      result += money[i][1];
    }

    return Number( result.toFixed(2) ); // Ensures I am getting to 2 decimals
  }

  // Confirm enough coins to give change. You might have $5.50 in change, but
  // if they need $1.01 in change, and you don't have a penny, you only have 2 quarters, you don't have enough.
  function enoughCoinsAvailable( totalCoins ) {
    let result = false;

    // start at 5 for quarters
    for ( let i=5;i<cashOrder.length;i++ ) {
      
      while ( totalCoins >= cashOrder[i][1] && numCoins[cashOrder[i][0]] > 0 ) {
        totalCoins = Number ( (totalCoins - cashOrder[i][1]).toFixed(2) );
        numCoins[cashOrder[i][0]] -= 1;
      }

      if ( Number ( totalCoins.toFixed(2) ) === 0 ) {
        result = true;
        break;
      }
    }
    return result;  
  }

  // Enough funds, enough change, generate it now
  function generateChange( totalChange ) {
    let result = [];

    for ( let i = 0; i<cashOrder.length;i++) {

      if ( i < 5 ) {
        while ( totalChange >= cashOrder[i][1] && numCash[cashOrder[i][0]] > 0 ) {
          totalChange -= cashOrder[i][1];
          numCash[cashOrder[i][0]] -= 1;

          if ( result.length === 0 || result[result.length-1][0] !== cashOrder[i][0] ) {
            result.push ( [cashOrder[i][0] , cashOrder[i][1] ] );
          } else {
            result[result.length-1][1] += cashOrder[i][1];
          }
        }
      } else {
        while ( totalChange >= cashOrder[i][1] && numCoins[cashOrder[i][0]] > 0 ) {
          totalChange = Number ( (totalChange - cashOrder[i][1]).toFixed(2) );
          numCoins[cashOrder[i][0]] -= 1;

          if ( result.length === 0 || result[result.length-1][0] !== cashOrder[i][0] ) {
            result.push ( [cashOrder[i][0] , cashOrder[i][1] ] );
          } else {
            result[result.length-1][1] += cashOrder[i][1];
          }
        }
      }

      if (Number ( totalChange.toFixed(2) ) === 0 ) {
        break;
      }
    }
    return result;
  }

  // Using all functions for final result;
  if ( availableFunds(cid) === changeNeeded ) {
    // EXACT FUNDS AND IS CLOSED
    return {status: statusOptions[1], change: cid};

  } else if ( availableFunds(cid) < changeNeeded || !enoughCoinsAvailable ( Number ( (changeNeeded % 1).toFixed( 2 ) ) ) ) {
    // INSUFFICIENT FUNDS
    
    return {status: statusOptions[0], change: []};

  } else {

    // ENOUGH CHANGE
    let arr1 = generateChange (changeNeeded )
    return {status: statusOptions[2], change: arr1 };

  }
  
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
// NO HINTS OR ALTERNATE SOLUTIONS PROVIDED ON CERTS