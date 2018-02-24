/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b) => {
	if (a < 0) {
		return "";
	} else {
		return b.repeat(a);
	}
};

module.exports = {
  solution,
};
