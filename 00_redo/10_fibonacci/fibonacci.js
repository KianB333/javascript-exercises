const fibonacci = function(pos) {
    if(pos < 0) {
        return "OOPS";
    };
    //checks for negatives
    let result = 0;
    let resultStorage;
    let prevResult = 1;
    //prevResult being 1 and result being 0 gives a starting point for sequence addition. Position 0 is "0".
    for(let loopCounter = 0; loopCounter < pos; loopCounter++) {
        resultStorage = result;
        result += prevResult;
        prevResult = resultStorage;
    };
    //Fibonacci calculations
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
