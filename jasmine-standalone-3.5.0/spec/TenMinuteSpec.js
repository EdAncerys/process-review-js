'use strict';

describe('Leap Years', function () {
  var walk;

  beforeEach(function () {
    walk = new TenMinuteWalk();
  });

  it('should be able to return false if 2000 w in', () => {
    expect(walk.returnTenMinute(['w'])).toEqual(false);
  });
});
