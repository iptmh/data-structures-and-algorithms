## Breadth-first Traversal

## Challenge
Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach, and return a list of the values in the tree in the order they were encountered.

## Approach & Efficiency
Set up an empty queue, push the root node to the queue. While the queue is not empty, take the first item out of the queue and push it to an array. If the current node has left child, push the left child node to the queue. Do the same on the right side of the tree.


Big O:
Time: O(N)
Space: O(N)

## Solution 