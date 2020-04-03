#Linked List Insertions

## Challenge
Write the following methods for the Linked List class:

.append(value) which adds a new node with the given value to the end of the list
.insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
.insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

## Approach & Efficiency
-For append, find the last non-null node, then link new node to last non-null node
-For insertBefore and insertAfter, traverse through the linked list with a while loop, find the node that matches the newVal, and then re-assign references to head, current, and current.next as needed. 

Big O:
Time: O(N)
Space: O(1)

## Solution 
![array-shift](https://user-images.githubusercontent.com/54918779/77214243-7f028b80-6acb-11ea-9cd3-d3cc2ea21171.png)
