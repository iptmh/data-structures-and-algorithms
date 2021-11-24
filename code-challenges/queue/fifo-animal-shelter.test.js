const AnimalShelter = require('./fifo-animal-shelter.js');

describe('queue operations', () => {
  it('can successfully enqueue animal to the shelter', () => {

    let animalShelter = new AnimalShelter();
    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');
    animalShelter.enqueue('dog');

    expect(animalShelter.queue.peek()).toEqual('cat');
  })

  it('can dequeue a cat or dog by preference', () => {

    let animalShelter = new AnimalShelter();
    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');
    animalShelter.enqueue('cat');

    expect(animalShelter.dequeue('cat').val).toEqual('cat');
    expect(animalShelter.queue.front.val).toBe('dog');
    expect(animalShelter.dequeue('cat').val).toEqual('cat');
    expect(animalShelter.queue.front.val).toBe('dog');
    expect(() => animalShelter.dequeue('cat')).toThrow();
    expect(animalShelter.dequeue('rabbit')).toEqual(null);
  })
});
