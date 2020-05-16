## Maximum Value in a Binary Tree

## Challenge
Write an instance method called find-maximum-value. Return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

## Approach & Efficiency
Traverse the whole tree, both left and right side. Find the maximum value of both the left and right side of the tree and then compare these two maxium values to the root value. The true maximum value will be the largest one of the three (root, leftMax, rigthMax)

Big O:
Time: O(N)
Space: O(N)

## Solution 
![challenge17 whieboard](https://user-images.githubusercontent.com/54918779/81649740-a566e800-93e5-11ea-8a22-28aef67153bf.png)
