## Implement a simplified LEFT JOIN for 2 Hashmaps.

## Challenge
+ Write a function that LEFT JOINs two hashmaps into a single data structure.
+ The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
+ The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
+ Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
+ LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
+ The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.

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




