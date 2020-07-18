const fizzBuzzTree = require('./fizzbuzz.js')
const trees = require('./tree.js')
const BST = trees.BinarySearchTree;


describe('fizzBuzzTree()', () => {

  it('changes the value to "Fizz" when the value is divisble by 3', () => {
    const binaryTree = new BST();
    binaryTree.add(3);
    binaryTree.add(6);
    binaryTree.add(9);
    binaryTree.add(12);

    const fizzBuzz = fizzBuzzTree(binaryTree);
    expect(fizzBuzz).toEqual(['Fizz', 'Fizz', 'Fizz', 'Fizz']);
  })


  it('changes the value to "Buzz" when the value is divisble by 5', () => {
    const binaryTree = new BST();
    binaryTree.add(3);
    binaryTree.add(5);
    binaryTree.add(10);
    binaryTree.add(25);

    const fizzBuzz = fizzBuzzTree(binaryTree);
    expect(fizzBuzz).toEqual(['Fizz', 'Buzz', 'Buzz', 'Buzz']);
  })

  it('changes the value to "FizzBuzz" when the value is divisble by 5 and 3', () => {
    const binaryTree = new BST();
    binaryTree.add(3);
    binaryTree.add(5);
    binaryTree.add(10);
    binaryTree.add(15);
    binaryTree.add(30);

    const fizzBuzz = fizzBuzzTree(binaryTree);
    expect(fizzBuzz).toEqual(['Fizz', 'Buzz', 'Buzz', 'FizzBuzz', 'FizzBuzz']);
  })

  it('turns the number into a string if the number is neither divisible by 3 or 5', () => {
    const binaryTree = new BST();
    binaryTree.add(1);
    binaryTree.add(5);
    binaryTree.add(7);
    binaryTree.add(13);
    binaryTree.add(30);

    const fizzBuzz = fizzBuzzTree(binaryTree);
    expect(fizzBuzz).toEqual(['1', 'Buzz', '7', '13', 'FizzBuzz']);
  })
})
