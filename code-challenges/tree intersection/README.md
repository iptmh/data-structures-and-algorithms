## Find common values in 2 binary trees

## Challenge
Write a function called tree_intersection that takes two binary tree parameters.
Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.

## Approach & Efficiency
Create a function called treeIntersection that takes in two trees.
Iterate over each tree and add their node values to a new set.
Create an array and filter one set based on whether the other set has that value.
Return the array.

Big O:
Space: O(n)
Time: O(n)

## Whiteboard
![repeated word](https://user-images.githubusercontent.com/54918779/85912765-fa1ec080-b7e3-11ea-83e7-5c167708d0ac.png)




