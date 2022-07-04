const middle = function(arr) {

  let total = arr.length;
  let mid = [];
  let midPoint1 = 0;
  let midPoint2 = 0;
 
  if (total <= 2) {
    return mid;
 
  } else if (total > 2 && total % 2 === 0) { //if its even
    midPoint1 = total / 2;
    midPoint2 = midPoint1 + 1;
    mid.push(midPoint1);
    mid.push(midPoint2);
  
  } else if (total > 2 && total % 2 !== 0) {
    midPoint1 = (total + 1) / 2;
    mid.push(midPoint1);
  }

  return mid;
};

module.exports = middle;

// TESTS
