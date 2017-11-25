// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  str.split('').forEach((char) => {
    charMap[char] = charMap[char] + 1  || 1;
  });

  let maxCount = 0;
  let maxChar;

  for (let char in charMap) {
    if (charMap[char] > maxCount) {
      maxCount = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
