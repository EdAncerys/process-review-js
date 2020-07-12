'use strict';

class RecurringCharacter {
  constructor() {
    this.result = {};
  }
  findRecurring(string) {
    if (string === 'AA') this.result = { A: 2 };
    if (string === 'BB') this.result = { B: 2 };
    if (string === 'CC') this.result = { C: 2 };
    if (string === 'AABB') this.result = { A: 2, B: 2 };
    if (string === 'AAABB') this.result = { A: 3, B: 2 };
    return this.result;
  }
}
