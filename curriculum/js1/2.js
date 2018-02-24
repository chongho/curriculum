/**
 * Max 3 - takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */

const solution = (a, b, c) => {
  if (a < c && b < c) { 
	return c;
  } else if (a < b) {
	return b;
  } else {
  	return a;
  }
};

module.exports = {
  solution,
};
