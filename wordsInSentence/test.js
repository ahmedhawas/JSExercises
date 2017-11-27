const wordsInSentence = require('./index');

test('wordsInSentence function exists', () => {
  expect(typeof wordsInSentence).toEqual('function');
});

test('test 1', () => {
  expect(wordsInSentence(['hi', 'ahmed', 'name', 'my', 'is'], 'hi my name is ahmed')).toEqual(true);
});

test('test 2', () => {
  expect(wordsInSentence(['hi', 'name', 'my', 'is', 'andy'], 'hi my name is ahmed')).toEqual(false);
});

test('test 3', () => {
  expect(wordsInSentence([], 'hi my name is ahmed')).toEqual(false);
});

test('test 4', () => {
  expect(wordsInSentence(['hi', 'ahmed', 'name', 'my', 'is'], 'hi, my name is ahmed')).toEqual(true);
});

test('test 4', () => {
  expect(wordsInSentence(['hi', 'ahmed', 'name', 'my', 'is'], 'hi. My name is ahmed')).toEqual(true);
});
