const firstRepeatingChars = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('firstRepeatingChars is a function', () => {
  expect(typeof firstRepeatingChars).toEqual('function');
});

test('firstRepeatingChars called with no repeats', () => {
  result = firstRepeatingChars("ABCD");
  expect(result).toEqual(null);
});

test('firstRepeatingChars called with one recurring char', () => {
  result = firstRepeatingChars("ABCA");
  expect(result).toEqual("A");
});

test('firstRepeatingChars called with multiple recurring chars', () => {
  result = firstRepeatingChars("BCABA");
  expect(result).toEqual("B");
});
