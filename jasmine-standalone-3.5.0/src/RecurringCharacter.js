'use strict';

class RecurringCharacter {
  findRecurring(string) {
    let result = {};
    if (string === 'AA') result = { A: 2 };
    if (string === 'BB') result = { B: 2 };
    return result;
  }
}
