// eslint-disable-next-line no-unused-vars
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 🟢 🟢 Assertion Passed: ${actual} === ${expected} 🟢 🟢 🟢 `);
  } else {
    console.log(`🔴 🔴 🔴 Assertion Failed: ${actual} !== ${expected} 🔴 🔴 🔴 `);
  }
};

