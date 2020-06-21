'use strict';

class Scrabble {
  constructor() {
    this.score = 0;
    this.one = ['A'];
    this.two = ['D', 'G'];
    this.three = ['B', 'C', 'M', 'P'];
    this.for = ['F', 'H', 'V', 'W', 'Y'];
    this.five = ['K'];
    this.eight = ['J', 'X'];
    this.ten = ['Q', 'Z'];
  }

  scrabbleScore(word) {
    word.split('').forEach((letter) => {
      if (this.one.includes(letter)) this.score += 1;
      if (this.two.includes(letter)) this.score += 2;
      if (this.three.includes(letter)) this.score += 3;
      if (this.for.includes(letter)) this.score += 4;
      if (this.five.includes(letter)) this.score += 5;
      if (this.eight.includes(letter)) this.score += 8;
      if (this.ten.includes(letter)) this.score += 10;
    });
    return this.score;
  }
}
