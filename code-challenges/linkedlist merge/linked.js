'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(newVal) {
    let currentNode = this.head;

    if (!currentNode) {
      this.head = new Node(newVal);
      return;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    let newNode = new Node(newVal);
    currentNode.next = newNode;
  }
}

module.exports = LinkedList;