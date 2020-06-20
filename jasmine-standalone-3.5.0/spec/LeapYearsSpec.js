'use strict';

describe('Leap Years', function () {
  var years;

  beforeEach(function () {
    years = new LeapYears();
  });

  it('should be able to return true if 2000 passed in', () => {
    expect(years.returnLeapYear(2000)).toEqual(true);
  });

  it('should be able to return false if 1900 passed in', () => {
    expect(years.returnLeapYear(1900)).toEqual(false);
  });
});
