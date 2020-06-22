'use strict';

describe('Checkout', () => {
  var checkout;
  beforeEach(() => {
    checkout = new Checkout();
  });

  it('should be able to return 50 if A passed in', () => {
    expect(checkout.totalPurchase('A')).toEqual(50);
  });
});
