const assert = require('chai').assert;
const _ = require('../index');



describe("#head", () => {
  it("should return [2] for [1, 2, 3]", () => {
    assert.deepEqual(_.middle([1, 2, 3]), [2]);
  });
  it("should return [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5]), [3]);
  });
  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4]), [2, 3]);
  });


  it("should NOT return [2, 3] for [1, 2, 3, 4, 5, 6]", () => {
    assert.notDeepEqual(_.middle([1, 2, 3, 4, 5, 6]), [2, 3]);
  });
  it("should NOT return [2] for [1, 2, 3, 4]", () => {
    assert.notDeepEqual(_.middle([1, 2, 3, 4]), [2]);
  });
  it("should NOT return [3] for [1, 2, 3, 4]", () => {
    assert.notDeepEqual(_.middle([1, 2, 3, 4]), [3]);
  });
});



