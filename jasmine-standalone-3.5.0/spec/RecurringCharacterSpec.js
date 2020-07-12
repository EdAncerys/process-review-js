'use strict';

describe('RecurringCharacter', () => {
  var character;
  beforeEach(() => {
    character = new RecurringCharacter();
  });

  it('should able to return {A:1} if AA passed in', () => {
    expect(character.findRecurring('AA')).toEqual({ A: 2 });
  });

  it('should be able to return {B:2} if BB passed in', () => {
    expect(character.findRecurring('BB')).toEqual({ B: 2 });
  });

  it('should be able to return {C:2} if CC passed in', () => {
    expect(character.findRecurring('CC')).toEqual({ C: 2 });
  });
});
