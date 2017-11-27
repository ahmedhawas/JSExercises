// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function generateHashString(i, n) {
  let result = "";
  for (let j = 1; j <= i; j++) {
    result = result + "#";
  }
  for (let k = 1; k <= n-i; k++) {
    result = result + " ";
  }
  return result;
}

function steps(n) {
  for (let i = 1; i <= n; i++) {
    console.log(generateHashString(i, n));
  }
}

module.exports = steps;
