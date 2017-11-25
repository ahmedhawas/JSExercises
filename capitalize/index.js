// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  words = str.split(' ');
  const newWords = words.map((word) => {
    const firstPart = word[0].toUpperCase();
    const secondPart = word.slice(1);
    return firstPart + secondPart;
  });
  return newWords.join(' ');
}

module.exports = capitalize;
