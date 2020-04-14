'use strict'

const LinkedList = require('./linked.js');

const mergedList = (list1, list2) => {

  let mergedList = new LinkedList();

  let cur1 = list1.head;
  let cur2 = list2.head;

  // while either list1 or list2 has a node
  while (cur1 || cur2) {
    // check if cur1 is a node
    // append to list
    // increment cur1 to next
    if (cur1) {
      mergedList.append(cur1.val);
      cur1 = cur1.next;
      console.log(cur1)
    }

    // check if cur2 is a node
    // append to list
    // increment cur2 to next
    if (cur2) {
      mergedList.append(cur2.val);
      cur2 = cur2.next;
    }
  }
  console.log(mergedList)
  return mergedList;
};

module.exports = mergedList;
