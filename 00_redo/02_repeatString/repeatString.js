const repeatString = function(string, repeats) {
    let repeatedString = "";
    if(repeats < 0) {
        return "ERROR";
    }
    for(let loopCounter = repeats; loopCounter > 0; loopCounter --) {
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
