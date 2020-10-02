const { underline } = require("colors");

exports.min = function min (array) {
  return (!Array.isArray(array) || array.length == 0 || array === underline) ? 0 : array.sort((a,b) => a - b)[0];
}

exports.max = function max (array) {
  return (!Array.isArray(array) || array.length == 0 || array === underline) ? 0 : array.sort((a,b) => a - b)[array.length - 1];
}

exports.avg = function avg (array) {
  return (!Array.isArray(array) || array.length == 0 || array === underline) ? 0 : array.reduce((sum, current) => sum + current, 0) / array.length;
}
