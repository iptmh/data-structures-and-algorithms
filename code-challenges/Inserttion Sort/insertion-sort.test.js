const insertionSort = require('./insertion-sort.js');

describe('insertionSort', () => {
  it('should sort the values in the sample array', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    expect(insertionSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
