const head                = require('./head');
const tail                = require('./tail');
const middle              = require('./middle');
const without             = require('./without');
const map                 = require('./assertArraysEqual');
const takeUntil           = require('./assertArraysEqual');

const assertEqual         = require('./assertEqual');

const eqArrays            = require('./eqArrays');
const assertArraysEqual   = require('./assertArraysEqual');

const eqObjects           = require('./eqObjects');
const assertObjectsEqual  = require('./assertObjectsEqual');

const findKey             = require('./findKey');
const findKeyByValue      = require('./findKeyByValue');


const countLetters         = require('./countLetters');
const countOnly           = require('./countOnly');
const letterPositions     = require('./letterPositions');



module.exports = {
  head:                 head,
  tail:                 tail,
  middle:               middle,
  without:              without,
  map:                  map,
  takeUntil:            takeUntil,
  assertEqual:          assertEqual,
  eqArrays:             eqArrays,
  assertArraysEqual:    assertArraysEqual,
  eqObjects:            eqObjects,
  assertObjectsEqual:   assertObjectsEqual,
  findKey:              findKey,
  findKeyByValue:       findKeyByValue,
  countLetters:          countLetters,
  countOnly:            countOnly,
  letterPositions:      letterPositions,
};