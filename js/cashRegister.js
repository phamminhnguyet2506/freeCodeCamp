function checkCashRegister(price, cash, cid) {
    const rate = [ 
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100],
    ];
    let changeArr = []; // an array with all the change we are to return
    let coin = []; //array with the exact amount of different banknotes/coins in the register
    let change = cash - price;
    let total = cid.reduce((sum, category) => sum + category[1], 0).toFixed(2);
    let sum = 0; //sum of change for an each specific banknote/coin
    let midArr = [];
  
    for (let i = 0; i < Object.keys(rate).length; i++) {
      coin.push(Math.round(cid[i][1] / rate[i][1]));
    } // to figure out how many banknotes/coins of each denomination there are in the regester
  
    rate.reverse(); // I thought it was easier to reverse these two rather than rewrite loops below
    coin.reverse();
    // loop through each type of money in the register (start with the hundreds)
    for (let i = 0; i <= coin.length; i++) {
      for (let j = 0; j < coin[i]; j++) {
        //loop through amount of the said type of money...
        if (change >= rate[i][1]) {
          //...and substract it coin by coin from the change variable
          change -= rate[i][1];
          change = change.toFixed(2); // (numbers act funny without this...
          total -= rate[i][1];
          total = total.toFixed(2); // ...and this. Is there a better solution?..)
          sum += rate[i][1];
  
          if (sum > 0) {
            //if sum for the coin of this denomination is there, push it to changeArr
            midArr = [rate[i][0], Number(sum.toFixed(2))];
            changeArr.push(midArr);
            midArr = [];
          }
          // however if there are two or more coins of the same denomination
          // the changeArr will have them all ([DIME, 0.1], [DIME, 0.2] etc),
          // the sum will increase though, so I deleted all the repeating coins from the changeArr
          // except for the one with the largest sum
          if (change == 0 && total > 0) {
            for (let i = 0; i < changeArr.length; i++) {
              if (!changeArr[i + 1]) {
                break;
              } else if (changeArr[i + 1][0] == changeArr[i][0]) {
                changeArr[i][1] = changeArr[i + 1][1];
                delete changeArr[i];
              }
            }
            // remove empty arrays from changeArr
            changeArr = changeArr.filter(function (el) {
              return el != null;
            });
            return { status: "OPEN", change: changeArr };
          } else if (change == 0 && total == 0) {
            return { status: "CLOSED", change: cid };
          }
        }
      }
      sum = 0;
    }
    //if after all of that there's still change to give away, means there's not enough money
    // or no sutable coins/banknotes
    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  }