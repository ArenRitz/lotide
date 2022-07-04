const _ = require('../index');

_.assertArraysEqual([1, 2, 3], [1, 2, 3]);
_.assertArraysEqual([1, 2, 0], [1, 2, 3]);
_.assertArraysEqual([1, 0, 3], [1, 2, 3]);
_.assertArraysEqual([0, 2, 3], [1, 2, 3]);
_.assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
_.assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
_.assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);