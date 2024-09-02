const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(toAdd) {
	let finalResult = 0;
  for(let loopCounter = 0; loopCounter < toAdd.length; loopCounter++) {
    finalResult += parseInt(toAdd[loopCounter]);
  }
  return finalResult;
};

const multiply = function(toMultiply) {
	let finalResult = 1;
  for(let loopCounter = 0; loopCounter < toMultiply.length; loopCounter++) {
    finalResult *= parseInt(toMultiply[loopCounter]);
  }
  return finalResult;
};

const power = function(originalNumber, powerOfNumber) {
  return originalNumber ** powerOfNumber;
};

const factorial = function(forFactorial) {
	let finalResult = 1;
  for(let loopCounter = forFactorial; loopCounter > 0; loopCounter --) {
    finalResult *= loopCounter;
  }
  return finalResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
