# breadth-first traversal on a graph

## Challenge
Extend your graph object with a breadth-first traversal method that accepts a starting node. Without utilizing any of the built-in methods available to your language, return a collection of nodes in the order they were visited. Display the collection.

## Approach & Efficiency
Breadth-first Search (BFS) starts by pushing all of the direct children to a queue (first-in, first-out). It then visits each item in queue and adds the next layer of children to the back of the queue. Use a Set to keep track of nodes that have already been visited.

Big O:
Time: O(n) 
Space: O(n)

## Solution 
https://docs.google.com/spreadsheets/d/1NJYFZAbasM9zcKICmyv2xm7Ga7QilOC1BV7XY_SxCEE/edit?usp=sharing

