const tail = require('../tail');
const assert = require('chai').assert;





describe("#tail", () => {
  it('should return 2 elements for ["Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
   
  });
  it("should return 'Lighthouse' as first element", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("should return 'Labs' as second element", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs");
  });
  it("should return 'Labs' as second element", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs");
  });
  it("should not modify the initial array", () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Hello", "Lighthouse", "Labs"]);
  });
});






// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"





// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!