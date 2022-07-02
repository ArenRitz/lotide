// eslint-disable-next-line no-unused-vars
const assertArraysEqual = function(arr1, arr2) {
  const sucessMsg = `🟢 🟢 🟢 Arguments match: ${arr1} === ${arr2} 🟢 🟢 🟢 `;
  const failMsg = `🔴 🔴 🔴 Arguments DO NOT match: ${arr1} === ${arr2} 🔴 🔴 🔴 `;
  let isEqual = false;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        isEqual = true;
      } else if (arr1[i] !== arr2[i]) {
        console.log(failMsg);
        return;
      }
    }
  }
  if (isEqual) {
    console.log(sucessMsg);
  } else {
    console.log(failMsg);
  }
};

// eslint-disable-next-line no-unused-vars
const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArr.push(source[i]);
    }
  }
  //console.log(source) --chekc if original array is modified
  return newArr;
};

/*
const array1 = ["apple", "candy", "chocolate", "bugs", "dog"];
const array2 = ["apple", "bugs"];


assertArraysEqual(without(array1, array2), ["candy", "chocolate", "dog"]);
assertArraysEqual(without(array1, array2), ["candy", "chocolate", "bat"]);
*/