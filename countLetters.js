const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 🟢 🟢 Assertion Passed: ${actual} === ${expected} 🟢 🟢 🟢 `);
  } else {
    console.log(`🔴 🔴 🔴 Assertion Failed: ${actual} !== ${expected} 🔴 🔴 🔴 `);
  }
};




const countLetters = function(str) {
  const lettersObj = {};
  for (let i of str.split(" ").join("")) {
    if (lettersObj[i]) {
      lettersObj[i] += 1;
    } else {
      lettersObj[i] = 1;
    }
  }
  return lettersObj;
}

console.log(countLetters("lighthouse in the house"))