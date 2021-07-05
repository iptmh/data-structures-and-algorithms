'use strict';

const binarySearch = (arr, key) => {

  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.round((start + end) / 2);

    if (arr[mid] === key) {
      return mid;
    }

    if (arr[mid] < key) {
      start = mid + 1;
    }

    if (arr[mid] > key) {
      end = mid - 1;
    }
  }
  return -1;
};

module.exports = { binarySearch };