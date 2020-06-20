'use strict';

describe('MiddleLetter', function () {
  var letter;

  beforeEach(function () {
    letter = new MiddleLetter();
  });

  it('should be able to return a if a passed in', function () {
    expect(letter.returnMidLetter('a')).toEqual('a');
  });

  describe('a block', function () {});
});
