const repeatString = function(string, num) {
    let returnString = "";
    if(num < 0) {
        returnString += "ERROR";
    } else {
        for(let loopCounter = 1;loopCounter <= num; loopCounter++) {
            returnString += string;
        }
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
