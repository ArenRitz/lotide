
// const assertEqual = require('../assertEqual');

// // assertEqual(head([5,6,7]), 5);
// // assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


const assert = require('chai').assert;
const _ = require('../index');

describe("#head", () => {
  it("should return 1 for [1, 2, 3]", () => {
    assert.strictEqual(_.head([1, 2, 3]), 1);
  });
  it("should return '5' for ['5']", () => {
    assert.strictEqual(_.head(['5']), '5'); 
  });
  it("should return '5' for ['5']", () => {
    assert.strictEqual(_.head(["Hello", "Lighthouse", "Labs"]), 'Hello'); 
  });
});