'use strict';

class MiddleLetter {
  returnMidLetter(word) {
    const l = Math.floor(word.length / 2);
    return word.length % 2 == 0 ? word.slice(l - 1, l + 1) : word[l];
  }
}
