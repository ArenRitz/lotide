//Library

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 🟢 🟢 Assertion Passed: ${actual} === ${expected} 🟢 🟢 🟢 `);
  } else {
    console.log(`🔴 🔴 🔴 Assertion Failed: ${actual} !== ${expected} 🔴 🔴 🔴 `);
  }
};

//Main

const head = function(args) {
  console.log(args[0]);
  return (args[0]);
};


assertEqual(head([5,6,7]), 3);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


