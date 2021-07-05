const breadthFirstTraversal = require('./breadthFirst.js')
const trees = require('./tree.js')
const BST = trees.BinarySearchTree;

describe('breath-first search', () => {

  it('can perfrom breath-first traversal on a binary tree', () => {
    const binaryTree = new BST();
    binaryTree.add(2);
    binaryTree.add(1);
    binaryTree.add(4);
    binaryTree.add(10);
    binaryTree.add(6);
    binaryTree.add(7);
    binaryTree.add(8);

    const breadth = breadthFirstTraversal(binaryTree.root);
    expect(breadth).toEqual([2, 1, 4, 10, 6, 7, 8]);
  })

  it('can return an array if the tree only has one node', () => {
    const binaryTree = new BST();
    binaryTree.add(2);

    const breadth = breadthFirstTraversal(binaryTree.root);
    expect(breadth).toEqual([2]);
  })

  it('can return an empty array if it is an empty tree', () => {
    const binaryTree = new BST();
    const breadth = breadthFirstTraversal(binaryTree.root);
    expect(breadth).toEqual([]);
  })
})
