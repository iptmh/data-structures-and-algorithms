const { insertShiftArray } = require('./array-shift.js');

describe('shiftArray', () => {
  it('should add an value to middle of the array', () => {
    let arr = [2, 4, 6, 8];
    let value = 5
    expect(insertShiftArray(arr, value)).toStrictEqual([2, 4, 5, 6, 8]);
  });
});