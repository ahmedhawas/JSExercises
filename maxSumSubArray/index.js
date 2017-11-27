// [1,2,3] ---> 6
// [1,2,3, -1] ---> 6
// [1,-2,1,2] ---> 3
// [-1,-2,-3] ---> -1

function maxSumSubArray(array) {
  let globalMax = array[0];
  let currentMax = globalMax;

  for (let i=1; i < array.length; i++) {
    const currentElement = array[i];
    const temp = currentElement + currentMax;
    currentMax = Math.max(currentElement, temp);
    if (currentMax > globalMax) {
      globalMax = currentMax;
    }
  }

  return globalMax;
}

module.exports = maxSumSubArray;
