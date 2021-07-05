'use strict'

const Queue = require('./queue.js');

class AnimalShelter {
  constructor() {
    this.queue = new Queue();
    this.rear = null;
    this.prev = null;
  }

  enqueue(animal) {

    if (animal === 'cat' || animal === 'dog') {
      this.queue.enqueue(animal);
      this.rear = animal;
    } else {
      return 'not a cat or dog';
    }
  }

  dequeue(pref) {

    // if a pref is not null
    if (pref && pref !== 'cat' && pref !== 'dog') {
      return null;
    }

    // if pref is null (no pref entered) or the first node = pref
    if (!pref || this.queue.front.val === pref) {
      return this.queue.dequeue();
    }

    let current = this.queue.front;

    // if currrent is not Null
    while (current) {
      if (current.val === pref) {
        //first node now points to third node
        this.prev.next = current.next;
        current.next = null;
        return current;
      }
      this.prev = current;
      current = current.next;
    }
    throw new Error(`Could not find ${pref}`);
  }
}

module.exports = AnimalShelter;
