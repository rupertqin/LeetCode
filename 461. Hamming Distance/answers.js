/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

// 115 ms 61.85%
var hammingDistance = function (x, y) {
  var count = 0
  x = Number(x).toString(2)
  y = Number(y).toString(2)
  if (x.length < y.length) {
    [x, y] = [y, x]
  }
  var xlen = x.length
  var ylen = y.length
  for (var i = 0; i < xlen; i++) {
    if (y[ylen - 1 - i] === undefined) {
      if (x[xlen - 1 - i] === "1") {
        count++
      }
    } else {
      if (x[xlen - 1 - i] !== y[ylen - 1 - i]) {
        count++
      }
    }
  }
  return count
};

// 108ms 87.08%
var hammingDistance = function (x, y) {
  return (x ^ y) .toString(2) .replace(/0/g, '') .length;
};