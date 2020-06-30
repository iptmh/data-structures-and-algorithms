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
![tree intersection](https://user-images.githubusercontent.com/54918779/86082259-2472b700-ba4c-11ea-828f-ff9467b7cbb8.png)




