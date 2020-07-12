'use strict';

describe('RecurringCharacter', () => {
  var character;
  beforeEach(() => {
    character = new RecurringCharacter();
  });

  it('should able to return {A:1} if AA passed in', () => {
    expect(character.findRecurring('AA')).toEqual({ A: 1 });
  });
});
