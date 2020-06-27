## Repeated Word

## Challenge
Write a function that accepts a lengthy string parameter.
Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Approach & Efficiency
Create a function called repeatedWord that takes in a string.
Split the string and assign it to the words variable.
If the string is empty, return an empty string.
If the string only has one word, return that word.
If the string has more than one word, loop through the string. Assign the first word of the string to a variable called matchingWord, and compare to the rest of the string while looping through. When found a matching word, return that word.

Big O:
Space: O(n)
Time: O(n)


## Whiteboard
https://docs.google.com/spreadsheets/d/195zHNbGA-V2VONVb2CAGit5XHbJw4PQvfQOox8pHP4U/edit?usp=sharing



