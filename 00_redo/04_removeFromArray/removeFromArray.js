const removeFromArray = function(array, ...badElem) {
    let newArray = [];
    for(let loopCounter = 0; loopCounter < array.length; loopCounter++) {
        let forbidden = false;
        badElem.forEach(function(elem) {
            if(array[loopCounter] === elem) {
                forbidden = true;
            }
        });
        if(forbidden == false) {
            newArray.push(array[loopCounter]);
        };
    };
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
