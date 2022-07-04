const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 🟢 🟢 Assertion Passed: ${actual} === ${expected} 🟢 🟢 🟢 `);
  } else {
    console.log(`🔴 🔴 🔴 Assertion Failed: ${actual} !== ${expected} 🔴 🔴 🔴 `);
  }
};


const findKeyByValue = function(obj, value) {
  let keys = Object.keys(obj);
  for (let i of keys) {
    if (obj[i] === value) {
      return i;
    }
  }
};







const bestTVShowsByGenre = {
  // eslint-disable-next-line camelcase
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);



module.exports = findKeyByValue;