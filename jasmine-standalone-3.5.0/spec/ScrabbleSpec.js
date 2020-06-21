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

  it('should be able to return 3 if B passed in', () => {
    expect(scrabble.scrabbleScore('B')).toEqual(3);
  });
});
