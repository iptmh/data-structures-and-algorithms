'use strict';

// shift all elements one place to the back until index 
function insertShiftArray(arr, value) {
  let index = Math.round(arr.length / 2);
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  // insert the element at the index 
  arr[index] = value;
  return arr;
};

module.exports = { insertShiftArray };


