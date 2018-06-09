const assert = require('assert')
const Store = require('../models/store.js')
const Record = require('../models/record.js')

describe("Store", function(){

  let store1;
  let record1;
  let record2;
  let record3;

  beforeEach(function(){
    store1 = new Store("Store Name", "City 1");
    record1 = new Record("Artist 1", "Title 1", "Rock", 5.55);
    record2 = new Record("Artist 2", "Title 2", "Rock", 10.00);
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

  it("can list all inventory details", function(){
    store1.addRecord(record1);
    store1.addRecord(record1);
    result = "Artist 1: Title 1, Genre:Rock Price: £5.55" + " " + "Artist 1: Title 1, Genre:Rock Price: £5.55"
    assert.strictEqual(store1.printInventoryDetails(), result);
  });

  it("can sell a record", function(){
    store1.addRecord(record1);
    store1.sellRecord(record1);
    assert.strictEqual(store1.balance, 5.55);
  });

  it("can display a financial report", function(){
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.sellRecord(record1);
    assert.strictEqual(store1.financeReport(), "Store Balance: £5.55, Store Inventory Value: £15.55");
  });

  it("Can display all records of a given genre", function(){
    record3 = new Record("Artist 3", "Title 3", "Pop", 10.00);
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.addRecord(record3);
    result = [record1, record2];
    assert.deepStrictEqual(store1.displayRecordsOfGenre("Rock"), result);
  })

})
