const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  const sucessMsg = `🟢 🟢 🟢 Arguments match: ${arr1} === ${arr2} 🟢 🟢 🟢 `;
  const failMsg = `🔴 🔴 🔴 Arguments DO NOT match: ${arr1} !== ${arr2} 🔴 🔴 🔴 `;
  if (eqArrays(arr1, arr2)) {
    console.log(sucessMsg);
  } else {
    console.log(failMsg);
  }
};

module.exports = assertArraysEqual;



// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 0], [1, 2, 3]);
// assertArraysEqual([1, 0, 3], [1, 2, 3]);
// assertArraysEqual([0, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
// assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);