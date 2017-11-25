// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function createMap(string) {
  return string.split('').reduce((memo, char) => {
    memo[char] = memo[char] + 1 || 1;
    return memo;
  }, {});
}

function anagrams(stringA, stringB) {
  const stringAMap = createMap(stringA);

  const chars = stringB.split('');
  for (char of chars) {
    if (stringAMap[char] === null || stringAMap[char] === undefined || stringAMap[char] === 0) {
      return false;
    }
    stringAMap[char] = stringAMap[char] - 1
  }

  for (char in stringAMap) {
    if (stringAMap[char] !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
