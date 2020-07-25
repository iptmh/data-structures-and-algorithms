# depth-first traversal on a graph

## Challenge
Create a function that accepts an adjacency list as a graph, and conducts a depth first traversal. Without utilizing any of the built-in methods available to your language, return a collection of nodes in their pre-order depth-first traversal order.

## Approach & Efficiency
 Starts Depth-first Search (DFS) by start searching at one node, and then goes down the path of its neighboring nodes before it goes to the other paths. If there is another level to go down, travel down that path first. Check if the node in that path was already visited. Mark it as true when it's visited. Loop through all the neighbors of the graph. 

Big O:
Time: O(n) 
Space: O(n)

## Whiteboard
https://docs.google.com/spreadsheets/d/17PqukuKBRSTNF6wCuhgwN8lUhaR4c-S9Pk1jx7wTxMY/edit?usp=sharing


