'use strict';

// class BinaryTree {
//   constructor() {
//     this.root = null;
//   }

const breadthFirstTraversal = (root) => {

  let result = [];
  let queue = [];

  if (root === null) {
    return queue;
  }

  //push root node to the queue
  queue.push(root);

  //while the queue is not empty
  while (queue.length) {

    //take the first item out of the queue
    let currentNode = queue.shift()

    // and push it to the array
    result.push(currentNode.val)

    //if currentNode has left child, push the left child node to the queue
    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right)
    }
  }
  return result;
}

module.exports = breadthFirstTraversal;
