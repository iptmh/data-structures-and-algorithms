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

  mergeLists = (list1, list2) => {

    let cur1 = list1.head;
    let cur2 = list2.head;

    if (cur1 == null) return list2;
    if (cur2 == null) return list1;

    while (cur1 != null && cur2 != null) {
      let temp1 = cur1.next;
      cur1.next = cur2;
      cur2 = temp1;
      cur1 = cur1.next;
    }

    if (cur2) {
      cur1.next = cur2;
    }

    return list1;
  };

  //adds a new node with the given value to the end of the list
  append(val) {
    let newNode = new Node(val);
    let current = this.head;
    // Find the last non-null node
    while (current.next != null) {
      current = current.next;
    }
    // Link new node to last non-null node
    current.next = newNode;
  }
}

module.exports = LinkedList;