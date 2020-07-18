# breadth-first traversal on a graph

## Challenge
Extend your graph object with a breadth-first traversal method that accepts a starting node. Without utilizing any of the built-in methods available to your language, return a collection of nodes in the order they were visited. Display the collection.

## Approach & Efficiency
 Starts Breadth-first Search (BFS) by pushing all of the direct children to a queue (first-in, first-out). It then visits each item in queue and adds the next layer of children to the back of the queue. Use a Set to keep track of nodes that have already been visited.

Big O:
Time: O(n) 
Space: O(n)

## Solution 
![Screen Shot 2020-07-17 at 11 31 53 PM](https://user-images.githubusercontent.com/54918779/87846583-bd476600-c885-11ea-9e6a-b6a993b4bd2b.png)

