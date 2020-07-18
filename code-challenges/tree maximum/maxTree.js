'use strict';

class Node {
  constructor(value) {
    this.val = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  findMaximumValue(root = this.root) {

    //if root is null (root === null), return;
    if (!root) {
      return null;
    }
    //if root has no children

    let rootMax = root.val;
    let leftMax, rightMax;

    if (root.left)
      leftMax = this.findMaximumValue(root.left);

    if (root.right)
      rightMax = this.findMaximumValue(root.right);

    //compare rootMax, leftMax and rightMax, return true max

    let max = rootMax;

    if (leftMax > max)
      max = leftMax;

    if (rightMax > max)
      max = rightMax;

    return max;

  }
}

module.exports = { Node, BinaryTree };


