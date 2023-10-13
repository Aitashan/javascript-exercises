const convertToCelsius = function(temp) {
  let C = (temp - 32) * (5/9)
  return C === parseInt(C) ? +C : +C.toFixed(1)
};

const convertToFahrenheit = function(temp) {
  let F = ((9/5)* temp) + 32
  return F === parseInt(F) ? +F : +F.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
