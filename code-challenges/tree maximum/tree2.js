'use strict';

const findMaximumValue = tree => {

  const result = inOrder(tree);

  return result.max();
}

module.exports = findMaximumValue
