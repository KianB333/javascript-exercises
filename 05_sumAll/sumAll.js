const sumAll = function(number1, number2) {
    if(number1 < 0 || number2 < 0 || typeof(number1) != "number" || typeof(number2) != "number") {
        return "ERROR";
    }
    let totalSum = 0;
    for(let loopCounter = Math.min(number1, number2); loopCounter <= Math.max(number1, number2); loopCounter++) {
        totalSum += loopCounter;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
