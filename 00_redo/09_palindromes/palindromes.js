const palindromes = function (word) {
    let forward = word.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g, '').toLowerCase();
    //Removes punctuation, whitespaces, and capitalization
    let backward = "";
    for(let loopCounter = -1; loopCounter >= -forward.length; loopCounter--) {
        backward += forward.substr(loopCounter, 1);
    }
    //reverses word
    if (forward == backward) {
        return true;
    } else {
        return false;
    };
    //compares forward and backward
};

// Do not edit below this line
module.exports = palindromes;
