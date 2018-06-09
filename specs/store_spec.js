const assert = require('assert')
const Store = require('../models/store.js')

describe("Store", function(){

  let store1;

  beforeEach(function(){
    store1 = new Store("Store Name", "City 1");
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

})
