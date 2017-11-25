// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const absN = Math.abs(n);
  const strReversed = absN.toString().split('').reverse().join('');

  return n < 0 ?  - Number(strReversed) : Number(strReversed);
}

module.exports = reverseInt;
