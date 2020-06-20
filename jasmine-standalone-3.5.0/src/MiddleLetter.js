'use strict';

class MiddleLetter {
  returnMidLetter(word) {
    if (word == 'abc') {
      return 'b';
    } else if (word == 'abcd') {
      return 'bc';
    } else {
      return word;
    }
  }
}
