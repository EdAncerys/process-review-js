'use strict';

describe('Checkout', () => {
  var checkout;
  beforeEach(() => {
    checkout = new Checkout();
  });

  it('should be able to return 50 if A passed in', () => {
    expect(checkout.totalPurchase('A')).toEqual(50);
  });

  it('should be able to return 30 if B passed in', () => {
    expect(checkout.totalPurchase('B')).toEqual(30);
  });
});
