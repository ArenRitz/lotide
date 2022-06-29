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





const middle = function(arr) {

  let total = arr.length;
  let mid = [];
  let midPoint1 = 0;
  let midPoint2 = 0;
 
  if (total <= 2) {
    return mid;
 
  } else if (total > 2 && total % 2 === 0) { //if its even
    midPoint1 = total / 2;
    midPoint2 = midPoint1 + 1;
    mid.push(midPoint1);
    mid.push(midPoint2);
  
  } else if (total > 2 && total % 2 !== 0) {
    midPoint1 = (total + 1) / 2;
    mid.push(midPoint1);
  }

  return mid;
};


// TESTS

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

