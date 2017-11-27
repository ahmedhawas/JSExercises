const binarySearch = require('./index');

test('Capitalize is a function', () => {
  expect(typeof binarySearch).toEqual('function');
});

test('binarySearch if the value is not found', () => {
  expect(binarySearch([1, 4, 5, 10, 20, 21, 40, 500], 11)).toEqual(-1);
});

test('binarySearch for larger array', () => {
  expect(binarySearch([1, 4, 5, 10, 20, 21, 40, 500], 10)).toEqual(3);
});

test('binarySearch array of 1', () => {
  expect(binarySearch([1], 1)).toEqual(0);
});
