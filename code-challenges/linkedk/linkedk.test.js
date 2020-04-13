'use strict';

// Where k is greater than the length of the linked list
// Where k and the length of the list are the same
// Where k is not a positive integer
// Where the linked list is of a size 1
// “Happy Path” where k is not at the end, but somewhere in the middle of the linked list

const LinkedList = require('./linkedk.js');

describe('passes all lab tests', () => {

  it('returns node value that is k from the end of linked list', () => {
    let linkList = new LinkedList();

    linkList.insert('F');
    linkList.insert('E');
    linkList.insert('D');
    linkList.insert('C');
    linkList.insert('B');
    linkList.insert('A');
    // let str = linkList.toString();

    expect(linkedList.kthFromEnd(2)).toBe('D');
    expect(linkedList.kthFromEnd(-1)).toBe('k is not a positive integer');
    expect(linkedList.kthFromEnd(10)).toBe('k is greater than the length of the linked list');
    expect(linkedList.kthFromEnd(6)).toBe('k and the length of the list are the same');
  });

  it('linked list is of a size 1', () => {
    let linkList = new LinkedList();

    linkList.insert('F');
    // let str = linkList.toString();

    expect(str.kthFromEnd(1)).toBe('F');

  });
});