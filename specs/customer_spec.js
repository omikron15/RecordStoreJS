const assert = require('assert')
const Customer = require('../models/customer.js')
const Record = require('../models/record.js')

describe("Customer", function(){

  let customer1;
  let record1;
  let record2;

  beforeEach(function(){
    customer1 = new Customer("Customer 1", 10.00);
    record1 = new Record("Artist 1", "Title 1", "Rock", 10.00);
    record2 = new Record("Artist 2", "Title 2", "Rock", 20.00);
  });

  it("has a name", function(){
    assert.strictEqual(customer1.name, "Customer 1");
  });

  it("has money", function(){
    assert.strictEqual(customer1.money, 10.00);
  });

  it("has a record collection that starts empty", function(){
    assert.strictEqual(customer1.recordCollection.length, 0);
  });

  it("Can buy a record", function(){
    customer1.buyRecord(record1);
    assert.strictEqual(customer1.money, 0);
    assert.strictEqual(customer1.recordCollection.length, 1);
  });

  it("Can't buy a record if money is too low", function(){
    customer1.buyRecord(record2);
    assert.strictEqual(customer1.money, 10.00);
    assert.strictEqual(customer1.recordCollection.length, 0);
  });

  it("Can sell a record", function(){
    customer1.buyRecord(record1);
    customer1.sellRecord(record1);
    assert.strictEqual(customer1.recordCollection.length, 0);
    assert.strictEqual(customer1.money, 10.00);
  });

})
