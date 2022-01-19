const Basket = require("../../src/basket");
const largeBasket = 20;
describe("Basket", () => {
  let basket;

  beforeEach(() => {
    basket = new Basket();
  });

  it("add bagel to the basket", () => {
    // set up
    const expected = {
      sku: "BGLO",
      price: "0.49",
      name: "Bagel",
      variant: "Onion",
    };

    // execute
    const result = basket.add(1);
    // verify
    expect(result).toEqual(expected);
    // console.log(result);
  });
  it("remove bagel from the basket", () => {
    // set up
    const expected = [
      {
        sku: "BGLO",
        price: "0.49",
        name: "Bagel",
        variant: "Onion",
      },
    ];
    // execute
    basket.add("COF"); // here, we're adding an item , inorder to ba able to remove somthing.
    basket.add("BGLO"); // here, this item should still remain in the basket - note* you'll still need to add the sku details.
    const result = basket.remove("COF");

    // verify
    expect(result).toEqual(expected);
    // console.log(result);
  });
  it("check and alert the customer", () => {
    // set up
    const expected = `You've reached the capacity.Pleaae select a bigger basket.`;
    // execute
    basket.add("COF"); // here, we're adding an item , inorder to ba able to remove somthing.
    basket.add("BGLO"); // here, this item should still remain in the basket - note* you'll still need to add the sku details.
    basket.add("COF");
    basket.add("COF");
    basket.add("COF");
    basket.add("COF");
    basket.add("COF");
    basket.add("COF");
    basket.add("COF");
    const result = basket.checkBasket();

    // verify
    expect(result).toEqual(expected);
    // console.log(result);
  });
  it("Change to a larger basket", () => {
    // set up
    const expected = "Continue shopping!";
    // execute
    basket.add("COF"); // here, we're adding an item , inorder to ba able to remove somthing.
    basket.add("BGLO"); // here, this item should still remain in the basket - note* you'll still need to add the sku details.
    basket.add("COF");
    basket.add("COF");
    basket.add("COF");
    basket.add("COF");
    basket.add("COF");
    basket.add("COF");
    basket.add("COF");
    basket.add("COF");
    basket.changeBasket(largeBasket);
    const result = basket.checkBasket();

    // verify
    expect(result).toEqual(expected);
    // console.log(result);
  });
  it("check item price", () => {
    // set up
    const expected = "0.49";
    // execute

    const result = basket.itemPrice("BGLO");

    // verify
    expect(result).toEqual(expected);
    // console.log(result);
  });
  it("Total price of items", () => {
    // set up
    const expected = 0.98;
    // execute
    basket.add("BGLO");
    basket.add("BGLO");

    // verify
    const result = basket.itemPrice("BGLO");
    expect(result).toEqual(expected);
    // console.log(result);
  });
});

/*
# Part 1
As a member of the public
So I can order a bagel when I want to
I'd like to *add* an *item* to my *basket*

As a member of the public,
So that I can change my order
I'd like to *remove* an *item* from my *basket*/
/*
# Part 2
As a member of the public,
So that I can *not overfill* my small bagel basket
//create a small basket and set its capacity
I'd like to know when my *basket* is *full* 
// check the length and compare.
when I try adding an item beyond my basket capacity.

As a Bob's Bagels manager,
So that I can *record* more sales
I’d like to create baskets with larger capacity when I need to.

***************
//I think what it's asking is that the manager can change the size of the basket. So if before you could only have 5 bagels, the manager should be able to change it  to 9, or 10, or what ever number they choose


*********************************
As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket. In the same way, I want to know if I try to add an item with the same ID already in my basket.
*/
/*
# Part 3
As a member of the public,
So that I can know how much my bagels are,
I’d like to see the price of each item before I add it to my basket.

As a member of the public,
So that I can prepare to pay
When I go to checkout I'd like to know the total sum of the bagels in my basket
*/
