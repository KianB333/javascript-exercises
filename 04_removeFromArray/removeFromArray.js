function removeFromArray(originalArray, ...toRemove) {
    let newArray = [];
    for(let arrayLoopCounter = 0; arrayLoopCounter < originalArray.length; arrayLoopCounter++) {
      let isEqual = false;
      for(let removalLoopCounter = 0; removalLoopCounter < toRemove.length; removalLoopCounter++) {
        console.log(isEqual);
        if(originalArray[arrayLoopCounter] == toRemove[removalLoopCounter] && typeof(originalArray[arrayLoopCounter]) == typeof(toRemove[removalLoopCounter])) {
          isEqual = true;
        }
        if(isEqual == false && removalLoopCounter == toRemove.length - 1) {
          newArray.push(originalArray[arrayLoopCounter]);
        }
      }
    }
    return newArray;
  }

// Do not edit below this line
module.exports = removeFromArray;
