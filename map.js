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

// end of library





// Main

const map = (array, callback) => {
  const results = [];
  array.forEach(item => {
    results.push(callback(item));
  });
  return results;
};





//test1
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
//test2
const words2 = ["real", "copycat", "turquoise", "beard", "crane"];
const results2 = map(words2, word => word[0]);
console.log(results2);
assertArraysEqual(results2, [ 'r', 'c', 't', 'b', 'c' ]);
//test2
const words3 = ["exorcist", "finger", "nail", "rabbit", "cute"];
const results3 = map(words3, word => word[0]);
console.log(results3);
assertArraysEqual(results3, [ 'e', 'f', 'n', 'r', 'c' ]);



module.exports = map;