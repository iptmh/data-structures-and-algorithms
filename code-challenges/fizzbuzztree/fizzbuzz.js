'use strict';

const fizzBuzzTree = tree => {

  const result = [];

  const inOrder = root => {
    if (root === null) {
      return null;
    }

    if (root.val % 3 === 0 && root.val % 5 === 0) {
      root.val = 'FizzBuzz';
    } else if (root.val % 3 === 0) {
      root.val = 'Fizz';
    } else if (root.val % 5 === 0) {
      root.val = 'Buzz';
    } else {
      root.val = root.val.toString();
    }
    if (root.left) {
      inOrder(root.left);
    }
    result.push(root.val);

    if (root.right) {
      inOrder(root.right);
    }
    return result;
  }
  const fizzBuzzed = inOrder(tree.root)
  // console.log('result', result);
  return fizzBuzzed;
}

module.exports = fizzBuzzTree
