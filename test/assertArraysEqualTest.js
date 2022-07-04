const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 0], [1, 2, 3]);
assertArraysEqual([1, 0, 3], [1, 2, 3]);
assertArraysEqual([0, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);