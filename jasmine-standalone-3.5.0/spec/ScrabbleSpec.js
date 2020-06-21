'use strict';

describe('Scrabble', () => {
  var scrabble;
  beforeEach(() => {
    scrabble = new Scrabble();
  });

  describe('when one letter passed in', () => {
    it('should be able to return 1 if A passed in', () => {
      expect(scrabble.scrabbleScore('A')).toEqual(1);
    });

    it('should be able to return 2 if D passed in', () => {
      expect(scrabble.scrabbleScore('D')).toEqual(2);
    });

    it('should be able to return 3 if B passed in', () => {
      expect(scrabble.scrabbleScore('B')).toEqual(3);
    });

    it('should be able to return 4 if F passed in', () => {
      expect(scrabble.scrabbleScore('F')).toEqual(4);
    });

    it('should be able to return 5 if K passed in', () => {
      expect(scrabble.scrabbleScore('K')).toEqual(5);
    });

    it('should be able to return 8 if J passed in', () => {
      expect(scrabble.scrabbleScore('J')).toEqual(8);
    });

    it('should be able to return 10 if Q passed in', () => {
      expect(scrabble.scrabbleScore('Q')).toEqual(10);
    });
  });

  describe('when multiple letters passed in', () => {
    it('should be able to return 3 if AAA passed in', () => {
      expect(scrabble.scrabbleScore('AAA')).toEqual(3);
    });
  });
});
