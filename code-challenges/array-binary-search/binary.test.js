const { binarySearch } = require('./array-binary-search.js');

describe('binarySearchFound', () => {
  it('return the index of array element that equals to searh key', () => {
    let arr = [4, 8, 15, 16, 23, 42];
    let key = 15
    expect(binarySearch(arr, key)).toStrictEqual(2);
  });
});

describe('binarySearchNotFound', () => {
  it('return -1 if element does not exist', () => {
    let arr = [11, 22, 33, 44, 55];
    let key = 15
    expect(binarySearch(arr, key)).toStrictEqual(-1);
  });
});
