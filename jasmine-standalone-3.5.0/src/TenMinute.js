'use strict';

class TenMinuteWalk {
  constructor() {
    this.n = 0;
    this.e = 0;
    this.s = 0;
    this.w = 0;
  }
  returnTenMinute(walk) {
    walk.forEach((element) => {
      if (element == 'n') {
        this.n += 1;
      }
      if (element == 'e') {
        this.e += 1;
      }
      if (element == 's') {
        this.s += 1;
      }
      if (element == 'w') {
        this.w += 1;
      }
    });

    if (this.w == this.e && this.s == this.n) {
      return true;
    } else {
      return false;
    }
  }
}
