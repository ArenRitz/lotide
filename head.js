const assertEqual = require('./assertEqual');

//Get first element of array  
const head = function(args) {
  return (args[0]);
};

module.exports = head;
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

