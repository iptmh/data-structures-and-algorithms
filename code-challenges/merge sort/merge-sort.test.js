const mergeSort = require('./merge-sort.js');

describe('mergeSort', () => {
  it('should sort the values in the sample array', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    expect(mergeSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
