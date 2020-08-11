const quickSort = require('./quick-sort.js');

describe('quickSort', () => {
  it('should sort the values in the sample array', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    expect(quickSort(arr, 0, arr.length - 1)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
