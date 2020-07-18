'use strict'

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // default linked list is empty
    this.head = null;
  }

  // Return the node’s value that is k from the end of the linked list

  kthFromEnd(k) {
    if (k < 0) {
      throw 'k is not a positive integer';
    }

    let p1 = this.head;
    let p2 = this.head;

    for (let i = 0; i < k; i++) {
      if (!p2) {
        throw 'k is greater than the length of the linked list';
      }
      console.log(p2)
      p2 = p2.next;
    }

    //this will be true if k is the size of linked list
    if (!p2) {
      console.log('k and the length of the list are the same');
      return this.head.val;
    }

    //'working case'
    let count = 1;
    while (count <= k - 1) {
      p2 = p2.next;
      count++;
    }
    while (p2.next !== null) {
      p2 = p2.next;
      p1 = p1.next;
    }
    return p1.val;
  }


  // findLength() {
  //   let current = this.head;
  //   let count = 1
  //   while (current.next = !null) {
  //     count++;
  //     current = current.next;
  //   }
  //   return count;
  // }

  // kthFromEnd(k) {
  //   let current = this.head;
  //   let listLength = findLength();
  //   while (listLength - k) {
  //     return current.val;
  //   }
  // }

  insert(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  toString() {
    let currNode = this.head;
    let str = '';

    while (currNode !== null) {
      str += `${currNode.val} -> `;
      currNode = currNode.next;
    }
    str += 'null';
    console.log(str);
    return str;
  }
}

module.exports = LinkedList;
