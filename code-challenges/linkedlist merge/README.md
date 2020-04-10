## Merge two linked lists

## Challenge
Write a function called mergeLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list.

## Approach & Efficiency
-create two pointers (cur 1 and cur 2) and set each to the head of the two linked list (list 1 and list 2)
-iterate through while loop when either of the two linked lists are not equal to null
-set cur1.next to a temp, then point cur 1 to cur 2. Set temp to cur 2, then cur1.next becomes cur 1. 
-at the end when cur 2 only has one node left, let cur 1 points to it. That cur 2 node will be the last node of list 1 
-return list 1

Big O:
Time: O(N)
Space: O(1)

## Solution 
![linkedlist insertion](https://user-images.githubusercontent.com/54918779/78412266-95c6d900-75c7-11ea-90ac-a09d7648a381.png)
