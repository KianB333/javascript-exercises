const palindromes = function (toCheck) {
    let reversed = "";
    for(let loopCounter = toCheck.length - 1; loopCounter >= 0; loopCounter --) {
        reversed += toCheck.charAt(loopCounter);
    }
    if(reversed.replace(/\W/g, "").toLowerCase() == toCheck.replace(/\W/g, "").toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
