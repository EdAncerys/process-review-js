'use strict';

describe('Checkout', () => {
  var checkout;
  beforeEach(() => {
    checkout = new Checkout();
  });

  describe('Cart with one item in', () => {
    it('should be able to return 50 if A passed in', () => {
      expect(checkout.totalPurchase('A')).toEqual(50);
    });

    it('should be able to return 30 if B passed in', () => {
      expect(checkout.totalPurchase('B')).toEqual(30);
    });

    it('should be able to return 20 if C passed in', () => {
      expect(checkout.totalPurchase('C')).toEqual(20);
    });

    it('should be able to return 15 if D passed in', () => {
      expect(checkout.totalPurchase('D')).toEqual(15);
    });
  });

  describe('Cart with multiple items in', () => {
    it('should be able to return 100 if AA passed in', () => {
      expect(checkout.totalPurchase('AA')).toEqual(100);
    });

    it('should be able to return 230 if AABBCCDD passed in', () => {
      expect(checkout.totalPurchase('AABBCCDD')).toEqual(230);
    });
  });
});
