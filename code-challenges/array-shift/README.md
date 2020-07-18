#Array Shift

## Challenge
Takes in an array and a value to be added. Return an array with the new value being added in the middle index. 

## Approach & Efficiency
-find midpoint by dividing array length by 2
-save value to variable
-for loop through second half of array
-create temp value to hold current value at current index
-replace current value in array with outside value
-repeat the two steps above until end of array
-push last element to end of array

Big O:
Time: O(N)
Space: O(1)

## Solution 
![array-shift](https://user-images.githubusercontent.com/54918779/77214243-7f028b80-6acb-11ea-9cd3-d3cc2ea21171.png)
