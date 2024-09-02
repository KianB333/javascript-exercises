const convertToCelsius = function(deg) {
  return Math.round(((deg - 32) * (5/9)) * 10) / 10;
};

const convertToFahrenheit = function(deg) {
  return Math.round((deg * (9/5) + 32) * 10) / 10;
};


/* deg°F = ((deg − 32) × 5/9)°C 
*/

/* deg°C = (deg * 9/5 + 32)°F
*/

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
