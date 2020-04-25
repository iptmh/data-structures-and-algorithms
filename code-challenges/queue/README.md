#First-in, First out Animal Shelter

## Challenge
Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
Implement the following methods:
enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

## Approach & Efficiency
- For enqueue, set up a new node, add it by setting it to be the new front
- For dequeue, set current node to front, if current is pref, dequeue it. If not, move on to the next node and deque until node value mataches pref.

Big O:
Time: O(N)
Space: O(1)

## Solution 
![challenge12](https://user-images.githubusercontent.com/54918779/80273035-c4dee080-8683-11ea-84d6-307cb739c8e7.png)
