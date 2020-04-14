'use strict'

const LinkedList = require('./linked.js');

const mergedList = (list1, list2) => {

  let cur1 = list1.head;
  let cur2 = list2.head;

  if (cur1 === null) return list2;
  if (cur2 === null) return list1;

  while (cur1 !== null && cur2 !== null) {
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

module.exports = mergedList;
