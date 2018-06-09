const assert = require('assert')
const Store = require('../models/store.js')
const Record = require('../models/record.js')

describe("Store", function(){

  let store1;
  let record1;

  beforeEach(function(){
    store1 = new Store("Store Name", "City 1");
    record1 = new Record("Artist 1", "Title 1", "Rock", 10.00);
  });

  it("has a name", function(){
    assert.strictEqual(store1.name, "Store Name");
  });

  it("has a city", function(){
    assert.strictEqual(store1.city, "City 1");
  });

  it("has an inventory that starts empty", function(){
    assert.strictEqual(store1.inventory.length, 0);
  });

  it("has a till balance that starts at 0", function(){
    assert.strictEqual(store1.balance, 0);
  });

  it("can add records to its inventory", function(){
    store1.addRecord(record1);
    assert.strictEqual(store1.inventory.length, 1);
  });

})
