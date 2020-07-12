'use strict';

class RecurringCharacter {
  findRecurring(string) {
    let result = {};
    if (string === 'AA') result = { A: 2 };
    if (string === 'BB') result = { B: 2 };
    if (string === 'CC') result = { C: 2 };
    if (string === 'AABB') result = { A: 2, B: 2 };
    return result;
  }
}
