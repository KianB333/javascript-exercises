const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  return nums.reduce((total, num) => total += num, 0);
};
const multiply = function(nums) {
  return nums.reduce((total, num) => total *= num, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
	let factorial = 1;
  for(let loopCounter = 1; loopCounter <= num; loopCounter++) {
    factorial *= loopCounter;
  };
  return factorial;
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
