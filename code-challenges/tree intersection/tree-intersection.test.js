const treeIntersection = require('../tree intersection/tree-intersection')
const { Node, BinaryTree, BinarySearchTree } = require('../tree intersection/tree')

describe('treeIntersection()', () => {
  let binaryTreeOne;
  let binaryTreeTwo;

  beforeEach(() => {
    binaryTreeOne = new BinarySearchTree();
    binaryTreeTwo = new BinarySearchTree();
  })

  it('returns undefined if the tree has no value', () => {
    expect(treeIntersection(binaryTreeOne, binaryTreeTwo)).toBeUndefined();
  })

  it('returns the value if both trees have one value that is the same', () => {
    binaryTreeOne.add(2);
    binaryTreeTwo.add(2);

    expect(treeIntersection(binaryTreeOne, binaryTreeTwo)).toEqual([2])
  })

  it('returns the intersecting values when there are multiples values in each tree', () => {
    binaryTreeOne.add(2);
    binaryTreeOne.add(3);
    binaryTreeOne.add(4);
    binaryTreeOne.add(5);
    binaryTreeTwo.add(2);
    binaryTreeTwo.add(5);
    binaryTreeOne.add(6);

    expect(treeIntersection(binaryTreeOne, binaryTreeTwo)).toEqual([2, 5])
  })
});
