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

  it('should be able to return false if s, n, n passed in', () => {
    expect(walk.returnTenMinute(['s', 'n', 'n'])).toEqual(false);
  });

  it("should be able to return false if ['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'] passed in", () => {
    expect(
      walk.returnTenMinute(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'])
    ).toEqual(true);
  });

  it("should be able to return false if ['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'] passed in", () => {
    expect(
      walk.returnTenMinute(['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w'])
    ).toEqual(false);
  });
});
