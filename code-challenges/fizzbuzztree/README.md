## Fizzbuzz Tree

## Challenge
Determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:

+ If the value is divisible by 3, replace the value with “Fizz”
+ If the value is divisible by 5, replace the value with “Buzz”
+ If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
+ If the value is not divisible by 3 or 5, simply turn the number into a String.

## Approach & Efficiency
+ Write a fizzBuzzTree funtion that takes in an InOrder method 
+ Use the InOrder method to traverse the whole tree and convert each node value to either "Fizz", "Buzz", "FizzBuzz", or a String, depending on if it's divisible by 3, 5, 3 and 5, or neither.


Big O:
Time: O(N)
Space: O(N)

## Solution 
![challenge16 whiteboard](https://user-images.githubusercontent.com/54918779/81464924-cd9ede80-917a-11ea-9e89-bee8188b20dd.png)

