// --- Directions
// ['hi', 'ahmed', 'name', 'my', 'is'] | hi my name is ahmed ---> true
// ['hi', 'name', 'my', 'is', 'andy'] | hi my name is ahmed ---> false
// [] | hi my name is ahmed ---> false


function wordsInSentence(words, sentence) {
  const wordsMap = words.reduce((memo, word) => {
    memo[word] = memo[word] + 1 || 1;
    return memo;
  }, {});

  const sentenceList =
    sentence
    .toLowerCase()
    .replace(/[,.]/g, '')
    .split(' ');
  for (let sentenceWord of sentenceList) {
    if (!wordsMap[sentenceWord]) {
      return false;
    }
    wordsMap[sentenceWord] = wordsMap[sentenceWord] - 1;
  }

  for (let member in wordsMap) {
    if (wordsMap[member] > 0) {
      return false;
    }
  }

  return true;
}

module.exports = wordsInSentence;
