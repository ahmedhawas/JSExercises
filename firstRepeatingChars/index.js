// --- Directions
// Write a function that returns the first recurring characters in a string
// eg "ABCA" ---> 'A'
// eg "ABCAB" ---> 'B'
// eg "ABCD"  ---> null

function firstRepeatingChars(string) {
  const charMap = {};
  for (char of string) {
    if (charMap[char] === 1) {
      return char;
    }
    charMap[char] = 1;
  }

  return null;
}

module.exports = firstRepeatingChars;
