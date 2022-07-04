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

const assertArraysEqual = function(arr1, arr2) {
  const sucessMsg = `🟢 🟢 🟢 Arguments match: ${arr1} === ${arr2} 🟢 🟢 🟢 `;
  const failMsg = `🔴 🔴 🔴 Arguments DO NOT match: ${arr1} !== ${arr2} 🔴 🔴 🔴 `;
  if (eqArrays(arr1, arr2)) {
    console.log(sucessMsg);
  } else {
    console.log(failMsg);
  }
};



const letterPositions = function(str) {
  const result = {};

  const sanitizedStr = str.replace(/[^A-Z0-9]/ig, "");
  let currentIndex = 0;
  for (let i of sanitizedStr) {
    let posArr = [currentIndex];
    if (result[i]) {
      result[i].push(currentIndex);
      currentIndex += 1;
    } else {
      result[i] = posArr;
      currentIndex += 1;
    }
  }
  return result;
};




assertArraysEqual(letterPositions("hello").e, [1]);


module.exports = letterPositions;