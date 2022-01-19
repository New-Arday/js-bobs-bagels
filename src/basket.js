const Data = require("../inventory.json");
const store = Data["inventory"];
const smallBasket = 5;

class Basket {
  constructor(size = smallBasket) {
    this.items = [];
    this.size = size;
  }

  add(bagel) {
    for (let item of this.items) {
      if (item.sku === bagel) {
        this.accumulator(bagel);
        return "Item is already in your basket";
      }
    }
    this.accumulator(bagel);
  }
  accumulator(bagel) {
    for (let i = 0; i < store.length; i++) {
      if (store[i].sku === bagel) {
        this.items.push(store[i]);
        return store[i];
      }
    }
  }
}
module.exports = Basket;
