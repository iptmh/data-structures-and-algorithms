#Array Binary Search

## Challenge
Takes in a sorted array and the search key. Return the index of the array's element that is equal to the search key, or return -1 if the element does not exist.

## Approach & Efficiency
- find mid point by dividing array length by 2
- compare search key to mid point
- if search key is equal to mid point, return index of mid point
- if search key is bigger than mid point value, search key must be located in the right half of the array. Repeat the steps above by dividing (mid point + array length) by 2. Compare to search key until it's found and return the index.
- if search key is smaller than mid point value, search key must be located in the left half of the array. Repeat the steps above by dividing (0 + mid point) by 2. Compare to search key until it's found and return the index.
- otherwise return -1 if no match can be found after iterating the array.

Big O:
Time: O(log n)
Space: O(1)

## Solution 

