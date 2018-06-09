const assert = require('assert')
const Customer = require('../models/customer.js')

describe("Customer", function(){

  let customer1;

  beforeEach(function(){
    customer1 = new Customer("Store Name", "City 1");
  });

  it("has a name", function(){
    assert.strictEqual(customer1.name, "Artist 1");
  });

  it("has a city", function(){
    assert.strictEqual(customer1.city, "City 1");
  });

  it("has an inventory that starts empty", function(){
    assert.strictEqual(customer1.inventory.length, 0);
  });

})
