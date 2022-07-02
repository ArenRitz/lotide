const eqObjects = (obj1, obj2) => {
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

  return match;
};



const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  const sucessMsg = `🟢 🟢 🟢 Arguments match: ${inspect(actual)} === ${inspect(expected)} 🟢 🟢 🟢 `;
  const failMsg = `🔴 🔴 🔴 Arguments DO NOT match: ${inspect(actual)} !== ${inspect(expected)} 🔴 🔴 🔴 `;
  if (eqObjects(actual, expected)) {
    console.log(sucessMsg);
  } else {
    console.log(failMsg);
  }

};

const a = { a: '1', b: 2 };

const b = { b: 2, a: '1' };

const c = { c: 3, a: 2};
assertObjectsEqual(a, b);
assertObjectsEqual(a, c);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false