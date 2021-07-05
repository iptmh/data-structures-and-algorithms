'use strict';

const multiBracketValidation = require('./multiBracket.js');

describe('multiBracketValidation', () => {
  it('can validate single pairs of brackets', () => {
    expect(multiBracketValidation('()')).toBe(true);
    expect(multiBracketValidation('[]')).toBe(true);
    expect(multiBracketValidation('{}')).toBe(true);
    expect(multiBracketValidation('((')).toBe(false);
    expect(multiBracketValidation('{)')).toBe(false);
  });

  it('can validate multiple brackets', () => {
    expect(multiBracketValidation('{}(){}')).toBe(true);
    expect(multiBracketValidation('(](')).toBe(false);
    expect(multiBracketValidation('{(ABC})')).toBe(false);
  });

  it('return false if only has one bracket', () => {
    expect(multiBracketValidation('(')).toBe(false);
    expect(multiBracketValidation('{')).toBe(false);
    expect(multiBracketValidation('}')).toBe(false);
  });
});
