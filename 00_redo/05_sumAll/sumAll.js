const sumAll = function(num1, num2) {
    let smallNum;
    let bigNum;
    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    } else if(num1 < num2) {
        smallNum = num1;
        bigNum = num2;
    } else {
        smallNum = num2;
        bigNum = num1;
    };
    let totalSum = 0;
    for(let loopCounter = smallNum; loopCounter <= bigNum; loopCounter++) {
        totalSum += loopCounter;
    };
    return totalSum;
};
//Adds together all whole numbers between and including two points.

// Do not edit below this line
module.exports = sumAll;
