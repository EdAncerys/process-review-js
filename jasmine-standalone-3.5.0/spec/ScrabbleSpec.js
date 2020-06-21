'use strict';

describe('Scrabble', () => {
  var scrabble;
  beforeEach(() => {
    scrabble = new Scrabble();
  });

  it('should be able to return 1 if A passed in', () => {
    expect(scrabble.scrabbleScore('A')).toEqual(1);
  });

  it('should be able to return 2 if D passed in', () => {
    expect(scrabble.scrabbleScore('D')).toEqual(2);
  });
});
