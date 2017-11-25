const firtRepeatingChars = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('firtRepeatingChars is a function', () => {
  expect(typeof firtRepeatingChars).toEqual('function');
});

test('firtRepeatingChars called with no repeats', () => {
  result = firtRepeatingChars("ABCD");
  expect(result).toEqual(null);
});

test('firtRepeatingChars called with n = 2', () => {
  result = firtRepeatingChars("ABCA");
  expect(result).toEqual("A");
});

test('firtRepeatingChars called with n = 3', () => {
  result = firtRepeatingChars("BCABA");
  expect(result).toEqual("B");
});
