'use strict';

// Can successfully add a node to the end of the linked list
// Can successfully add multiple nodes to the end of a linked list
// Can successfully insert a node before a node located in the middle of a linked list
// Can successfully insert a node before the first node of a linked list
// Can successfully insert after a node in the middle of the linked list
// Can successfully insert a node after the last node of the linked list

const LinkedList = require('./linked.js');

describe('passes all lab tests', () => {

  it('add a node or multiple nodes to end of linked list with append()', () => {
    let newList = new LinkedList();

    newList.insert('B');
    newList.insert('A');
    newList.append('C');
    newList.append('D');
    let str = newList.toString();

    expect(str).toBe('A -> B -> C -> D -> null');
  });

  it('can insert a node before the first node of a linked list with insertBefore()', () => {
    let newList = new LinkedList();
    newList.insert('B');
    newList.insertBefore('B', 'A');
    let str = newList.toString();

    expect(str).toBe('A -> B -> null');
  });

  it('can insert a node before a node in the middle of a linked list with insertBefore()', () => {
    let newList = new LinkedList();
    newList.insert('D');
    newList.insert('C');
    newList.insert('B');
    newList.insert('A');
    newList.insertBefore('C', '0');
    let str = newList.toString();

    expect(str).toBe('A -> B -> 0 -> C -> D -> null');
  });

  it('can insert a node after the last node of a linked list with insertAfter()', () => {
    let newList = new LinkedList();
    newList.insert('B');
    newList.insert('A');
    newList.insertAfter('B', '0');
    let str = newList.toString();

    expect(str).toBe('A -> B -> 0 -> null');
  });

  it('can insert a node after a node in the middle of a linked list with insertAfter()', () => {
    let newList = new LinkedList();
    newList.insert('D');
    newList.insert('C');
    newList.insert('B');
    newList.insert('A');
    newList.insertAfter('C', '0');
    let str = newList.toString();

    expect(str).toBe('A -> B -> C -> 0 -> D -> null');
  });

});