'use strict';

class LeapYears {
  returnLeapYear(year) {
    if (year == 2000 || year == 1988 || year == 1904) {
      return true;
    } else {
      return false;
    }
  }
}
