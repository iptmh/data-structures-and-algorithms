#Challenge 07

## Challenge
Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. 

## Approach & Efficiency
-Set two pointers, p1 and p2
-Move p2 to the kth node from the head of the linked list
-Once p2 is there, move p1 along with p2 until p2 reaches end of the linked list
-p1 should stop at kth node from the end of the linked list.

Big O:
Time: O(N)
Space: O(1)

## Solution 
![challenge07](https://user-images.githubusercontent.com/54918779/78630717-57dbe600-784f-11ea-8864-3cd0fe3d7091.png)


