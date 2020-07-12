'use strict';

class RecurringCharacter {
  constructor() {
    this.result = {};
  }
  findRecurring(string) {
    string.split('').forEach((element) => {
      if (Object.keys(this.result).includes(element)) {
        this.result[element] += 1;
        console.log(this.result);
      } else {
        console.log('else', this.result);
        this.result[element] = 1;
      }
    });
    return this.result;
  }
}
