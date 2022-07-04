# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @arenritz/lotide`

**Require it:**

`const _ = require('@arenritz/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: Returns the first element of an array.
* `tail(arr)`: Returns the array without the head(first element).
* `middle(arr)`: Returns the middle value of an array, if it's even the middle 2 numbers.
* `without(arr1, arr2)`: Returns a new array which equals the element of the first - the second.
* `takeUntil(arr, val)`: Iterates through each item of array and pushes them to a new array until it element of the array matches the value.
* `assertEqual(actual, expected)`: Checks strickt equality between two values and console logs the result.
* `eqArrays(arr1, arr2)`: Returns true or false if the arrays match.
* `assertArraysEqual(arr1, arr2)`: Uses eqArrays to log if the arrays match.
* `eqObjects(obj1, obj2)`: Returns true or false if the objects match.
* `assertObjectsEqual(arr)`: Uses eqObjects to log if the objects match.
* `findKey(obj, val)`: Scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `countOnly(arr, val)`: Returns how many times the value is found in the array.
* `findKeyByValue(obj, val)`: Returns the object key which contains the passed value.