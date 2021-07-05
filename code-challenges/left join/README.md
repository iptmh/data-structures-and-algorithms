## Implement a simplified LEFT JOIN for 2 Hashmaps.

## Challenge
+ Write a function that LEFT JOINs two hashmaps into a single data structure.
+ The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
+ The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
+ Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
+ LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

## Approach & Efficiency
Create a function called leftJoin that takes in two hashmaps.
Iterate over the first hashmap and add its key and value to an empty array.
Then check if the second hashmap has that key, if it does, push the value to array, else push null.
Return the array.

Big O:
Space: O(n)
Time: O(n)

## Whiteboard
![left join](https://user-images.githubusercontent.com/54918779/86557669-be82a580-bf0b-11ea-8634-0e90492c9224.png)



