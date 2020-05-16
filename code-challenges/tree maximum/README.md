## Maximum Value in a Binary Tree

## Challenge
Write an instance method called find-maximum-value. Return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

## Approach & Efficiency
Set up an empty queue, push the root node to the queue. While the queue is not empty, take the first item out of the queue and push it to an array. If the current node has left child, push the left child node to the queue. Do the same on the right side of the tree.


Big O:
Time: O(N)
Space: O(N)

## Solution 
![challenge17 whieboard](https://user-images.githubusercontent.com/54918779/81649740-a566e800-93e5-11ea-8a22-28aef67153bf.png)
