'use strict';

class Scrabble {
  scrabbleScore(word) {
    if (word == 'A') return 1;
    if (word == 'D') return 2;
    if (word == 'B') return 3;
    if (word == 'F') return 4;
    if (word == 'K') return 5;
    if (word == 'J') return 8;
    if (word == 'Q') return 10;
  }
}
