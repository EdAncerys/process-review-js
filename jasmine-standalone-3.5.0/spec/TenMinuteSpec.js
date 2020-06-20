'use strict';

describe('Leap Years', function () {
  var walk;

  beforeEach(function () {
    walk = new TenMinuteWalk();
  });

  it('should be able to return false if w passed in', () => {
    expect(walk.returnTenMinute(['w'])).toEqual(false);
  });

  it('should be able to return false if w, e passed in', () => {
    expect(walk.returnTenMinute(['w', 'e'])).toEqual(true);
  });
});
