'use strict';

describe('Scrabble', () => {
  var scrabble;
  beforeEach(function () {
    scrabble = new Scrabble();
  });

  it('should be able to return 1 if A passed in', () => {
    expect(scrabble.scrabbleScore('A')).toEqual(1);
  });
});
