const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 🟢 🟢 Assertion Passed: ${actual} === ${expected} 🟢 🟢 🟢 `);
  } else {
    console.log(`🔴 🔴 🔴 Assertion Failed: ${actual} !== ${expected} 🔴 🔴 🔴 `);
  }
};




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






const eqObjects = (obj1, obj2) => {
  let objKeys1 = Object.keys(obj1);
  let objKeys2 = Object.keys(obj2);
  let match = false;
  if (objKeys1.length === objKeys2.length) {  //checks if objects have the same amount of entries


    for (let key of objKeys1) {  // iterates through the the array of keys found in object

      if (typeof obj1[key] === 'string' || typeof obj1[key] === "number") {  // if value of the key = a string or number
        if (obj1[key] === obj2[key]) {

          match = true;
        } else {
          return false;
        }
      } else if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) { // if the value is an array
        match = eqArrays(obj1[key], obj2[key]);
      }
    }
  }

  return match
} 





const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false