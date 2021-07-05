const leftJoin = require('./left-join');

describe('leftJoin', () => {
  let mapOne;
  let mapTwo;

  beforeEach(() => {
    mapOne = new Map();
    mapTwo = new Map();
  })

  it('returns an empty array if both hash maps are empty', () => {
    expect(leftJoin(mapOne, mapTwo)).toEqual([])
  })

  it('returns the left join values of one key value pair', () => {
    mapOne.set('fruits', 'apple');
    mapTwo.set('fruits', 'orange');
    expect(leftJoin(mapOne, mapTwo)).toEqual([['fruits', 'apple', 'orange']])
  })

  it('left joins with multiple key value pairs', () => {
    mapOne.set('fruits', 'apple');
    mapOne.set('meat', 'pork');
    mapTwo.set('fruits', 'orange');
    mapTwo.set('meat', 'chicken');
    expect(leftJoin(mapOne, mapTwo)).toEqual([['fruits', 'apple', 'orange'], ['meat', 'pork', 'chicken']])
  })

  it('replaces a non-matching value with null', () => {
    mapOne.set('fruits', 'apple');
    mapOne.set('meat', 'pork');
    mapOne.set('drink', 'water')
    mapTwo.set('fruits', 'orange');
    mapTwo.set('meat', 'chicken');
    expect(leftJoin(mapOne, mapTwo)).toEqual([['fruits', 'apple', 'orange'], ['meat', 'pork', 'chicken'], ['drink', 'water', null]])
  })

})
