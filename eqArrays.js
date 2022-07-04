const eqArrays = function(arr1, arr2) {
  let isEqual = false;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        isEqual = true;
      } else if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return isEqual;
};


module.exports = eqArrays;


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
// assertEqual(eqArrays([1, 2, 0], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 0, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([0, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true);