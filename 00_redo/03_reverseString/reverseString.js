const reverseString = function(word) {
    let newWord = "";
    for(let loopCounter = 1; loopCounter <= word.length; loopCounter++) {
        newWord += word.substr(-loopCounter, 1);
    }
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
