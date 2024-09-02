const fibonacci = function(userInput) {
    let sequenceNumber = parseInt(userInput);
    let sequenceResults = [1, 1];
    if(sequenceNumber < 1) {
        return "OOPS";
    }
    /* Doesn't activate unless userInput > 2, since sequence numbers 1 & 2 accounted for*/
    for(let loopCounter = 3; loopCounter <= sequenceNumber; loopCounter++) {
        sequenceResults.push(sequenceResults[loopCounter - 3] + sequenceResults[loopCounter - 2]);
    }
    return sequenceResults[sequenceNumber - 1];
};

// Do not edit below this line
module.exports = fibonacci;
