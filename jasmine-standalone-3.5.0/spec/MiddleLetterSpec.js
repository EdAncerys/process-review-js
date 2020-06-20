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

  it('should be able to return bc if abcd passed in', () => {
    expect(letter.returnMidLetter('abcd')).toEqual('bc');
  });

  it('should be able to return aS if JavaScript passed in', () => {
    expect(letter.returnMidLetter('JavaScript')).toEqual('Sc');
  });
});
