const eqArrays = function (arr1, arr2) {
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

const assertArraysEqual = function (arr1, arr2) {
  const sucessMsg = `🟢 🟢 🟢 Arguments match: ${arr1} === ${arr2} 🟢 🟢 🟢 `;
  const failMsg = `🔴 🔴 🔴 Arguments DO NOT match: ${arr1} !== ${arr2} 🔴 🔴 🔴 `;
  if (eqArrays(arr1, arr2)) {
    console.log(sucessMsg);
  } else {
    console.log(failMsg);
  }
}





assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 0], [1, 2, 3]);
assertArraysEqual([1, 0, 3], [1, 2, 3]);
assertArraysEqual([0, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3])
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);