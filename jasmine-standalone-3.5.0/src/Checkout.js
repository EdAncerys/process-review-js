'use strict';

class Checkout {
  totalPurchase(cart) {
    if (cart == 'A') return 50;
    if (cart == 'B') return 30;
    if (cart == 'C') return 20;
  }
}
