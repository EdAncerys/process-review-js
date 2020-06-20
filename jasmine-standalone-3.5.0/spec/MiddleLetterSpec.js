'use strict';

describe('MiddleLetter', function () {
  var letter;

  beforeEach(function () {
    letter = new MiddleLetter();
  });

  it('should be able to return a if a passed in', () => {
    expect(letter.returnMidLetter('a')).toEqual('a');
  });

  it('should be able to return ab if ab passed in', () => {
    expect(letter.returnMidLetter('ab')).toEqual('ab');
  });

  it('should be able to return b if abc passed in', () => {
    expect(letter.returnMidLetter('abc')).toEqual('b');
  });

  describe('a block', function () {});
});
