const { Node, BinaryTree } = require('./maxTree.js')
// const Node = require('./maxTree.js')

describe('binary tree', () => {

  let sampleTree = new BinaryTree();

  afterEach(() => {
    sampleTree = new BinaryTree();
  });

  it('can find the maximum value on a binary tree', () => {

    sampleTree.root = new Node(2);
    sampleTree.root.left = new Node(7);
    sampleTree.root.right = new Node(5);
    sampleTree.root.left.left = new Node(2);
    sampleTree.root.left.right = new Node(11);
    sampleTree.root.right.right = new Node(9);

    // const result = findMaximumValue(sampleTree.root);
    expect(sampleTree.findMaximumValue()).toBe(11);
  })

  it('can return null for an empty tree', () => {

    // sampleTree.root = new Node();
    // Do not need the line above because it still set up a node
    expect(sampleTree.findMaximumValue()).toBe(null);
  })

  it('can return the root val for a binary tree with only root node', () => {

    sampleTree.root = new Node(50);
    expect(sampleTree.findMaximumValue()).toBe(50);
  })

  it('can find the maximum value on a binary tree with a negative node value', () => {

    sampleTree.root = new Node(2);
    sampleTree.root.left = new Node(7);
    sampleTree.root.right = new Node(5);
    sampleTree.root.left.left = new Node(-100);
    sampleTree.root.left.right = new Node(11);
    sampleTree.root.right.right = new Node(9);

    expect(sampleTree.findMaximumValue()).toBe(11);
  })
})
