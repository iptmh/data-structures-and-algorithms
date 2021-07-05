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

  //input: head -> [1]-> [3] -> [2] -> X
  //Args 3, 5
  //output: head -> [1] ->[5] -> [3] -> [2] -> X

  insertBefore(val, newVal) {
    // only do the insertion if it's not an empty list. Otherwise, no point to insert.
    if (this.head != null) {
      let newNode = new Node(newVal);
      let current = this.head;

      // if we want to insert before the first node
      if (current.val === val) {
        //the two lines below is the same as this.insert(newNode);
        newNode.next = this.head;
        this.head = newNode;
        return;
      }
      // starting from the second node
      while (current.next) {
        if (current.next.val === val) {
          newNode.next = current.next;
          current.next = newNode;
          return;
        }
        current = current.next;
      }
    }
  }
  // insertBefore(val, newVal) {
  //   let newNode = new Node(newVal);
  //   let current = this.head;
  //   while (current) {
  //     if (current.val === val) {
  //       newNode.next = current;
  // it won't work as 1 is still point to 3, not the new node 5.
  //       current = newNode;
  //       return;
  //     }
  //     current = current.next;
  //   }
  // }

  insertAfter(val, newVal) {
    let newNode = new Node(newVal);
    let current = this.head;
    while (current) {
      if (current.val === val) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  insert(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  toString() {
    let currNode = this.head;
    let str = '';

    while (currNode != null) {
      str += `${currNode.val} -> `;
      currNode = currNode.next;
    }
    str += 'null';
    console.log(str);
    return str;
  }
}

module.exports = LinkedList;