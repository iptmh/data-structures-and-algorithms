'use strict';

const LinkedList = require('./linked.js');
const mergedList = require('./linkedListMerge.js');

describe('passes all lab tests', () => {

  it('should merge two linked lists of the same size', () => {

    let ListOne = new LinkedList();
    let ListTwo = new LinkedList();

    ListOne.append(1);
    ListOne.append(3);
    ListTwo.append(2);
    ListTwo.append(4);

    let merged = mergedList(ListOne, ListTwo);

    expect(merged.head.val).toEqual(1);
    expect(merged.head.next.val).toEqual(2);
    expect(merged.head.next.next.val).toEqual(3);
    expect(merged.head.next.next.next.val).toEqual(4);
  });

  it('should merge two linked lists of a different size', () => {

    let ListOne = new LinkedList();
    let ListTwo = new LinkedList();

    ListOne.append(1);
    ListOne.append(3);
    ListTwo.append(2);

    const merged = mergedList(ListOne, ListTwo);

    expect(merged.head.val).toEqual(1);
    expect(merged.head.next.val).toEqual(2);
    expect(merged.head.next.next.val).toEqual(3);
  })
});
