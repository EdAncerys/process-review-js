'use strict';

class Checkout {
  constructor() {
    this.cartTotal = 0;
    this.A = 0;
  }

  totalPurchase(cart) {
    cart.split('').forEach((product) => {
      if (product == 'A') (this.cartTotal += 50), (this.A += 1);
      if (product == 'B') this.cartTotal += 30;
      if (product == 'C') this.cartTotal += 20;
      if (product == 'D') this.cartTotal += 15;
      if (this.A == 3) (this.cartTotal -= 20), (this.A = 0);
    });
    return this.cartTotal;
  }
}
