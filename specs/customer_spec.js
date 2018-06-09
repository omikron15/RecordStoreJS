const assert = require('assert')
const Customer = require('../models/customer.js')

describe("Customer", function(){

  let customer1;

  beforeEach(function(){
    customer1 = new Customer("Customer 1", 1000.00);
  });

  it("has a name", function(){
    assert.strictEqual(customer1.name, "Customer 1");
  });

  it("has money", function(){
    assert.strictEqual(customer1.money, 1000.00);
  });

  it("has a record collection that starts empty", function(){
    assert.strictEqual(customer1.recordCollection.length, 0);
  });

})
