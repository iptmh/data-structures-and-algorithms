'use strict';

const LinkedList = require('./linkedListMerge.js');

describe('passes all lab tests', () => {

  let ListOne = new LinkedList();
  let ListTwo = new LinkedList();

  it('should merge two linked lists of the same size', () => {

    ListOne.append(1);
    ListOne.append(3);
    ListTwo.append(2);
    ListTwo.append(4);

    let merged = mergeLists(ListOne, ListTwo);

    expect(merged.head.value).toEqual(1);
    expect(merged.head.next.value).toEqual(2);
    expect(merged.head.next.next.value).toEqual(3);
    expect(merged.head.next.next.next.value).toEqual(4);
  });

  it('should merge two linked lists of a different size', () => {

    ListOne.append(1);
    ListOne.append(3);
    ListTwo.append(2);

    const merged = mergeLists(ListOne, ListTwo);

    expect(merged.head.value).toEqual(1);
    expect(merged.head.next.value).toEqual(2);
    expect(merged.head.next.next.value).toEqual(3);
  })
});
