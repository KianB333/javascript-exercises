const reverseString = function(string) {
    let originalLength = string.length; 
    let reversedString = "";
    for(let loopCounter = 0;loopCounter < originalLength; loopCounter++) {
        reversedString += string.slice(string.length - 1);
        string = string.slice(0, string.length - 1);
    }
    return reversedString;
};
console.log(reverseString("Never"));
// Do not edit below this line
module.exports = reverseString;
