const maxSumSubArray = require('./index');

test('Capitalize is a function', () => {
  expect(typeof maxSumSubArray).toEqual('function');
});

test('maxSumSubArray if the value is not found', () => {
  expect(maxSumSubArray([1,2,3])).toEqual(6);
});

test('case 2', () => {
  expect(maxSumSubArray([1,2,3, -1])).toEqual(6);
});

test('case 3', () => {
  expect(maxSumSubArray([1,-2,1,2])).toEqual(3);
});

test('case 4', () => {
  expect(maxSumSubArray([-1,-2,-3])).toEqual(-1);
});