'use strict';

let brackets = {
  '(': ')',
  '{': '}',
  '[': ']'
};

const multiBracketValidation = string => {
  var stack = [];

  for (var i = 0; i < string.length; i++) {
    if (brackets[stack[stack.length - 1]] === string[i]) {
      stack.pop();
    } else {
      stack.push(string[i]);
    }
  }

  return !stack.length;
};

module.exports = multiBracketValidation;
