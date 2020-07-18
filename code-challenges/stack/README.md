## Multi Bracket Validation

## Challenge
Create a function called multiBracketValidation(input). The function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. 

## Approach & Efficiency
Traverse the string input.
If the current character is an opening bracket ( or { or [ , push it to stack.
If the current character is a closing bracket ) or } or ], pop it from stack.
At the end of the traversal, return the length of the stack. If there is remaining opening bracket left in stack (that is, it is not empty), then the string is not balanced and returns FALSE.

Big O:
Time: O(N)
Space: O(1)

## Solution 
![challenge13](https://user-images.githubusercontent.com/54918779/80451694-51361100-88d9-11ea-91b2-1b0add068e25.png)
