const assert = require('assert')
const Record = require('../models/record.js')

describe("Record", function(){

  let record1;

  beforeEach(function(){
    record1 = new Record("Artist 1", "Title 1", "Rock", 10.00);
  });

  it("has an artist", function(){
    assert.strictEqual(record1.artist, "Artist 1");
  });

  it("has a title", function(){
    assert.strictEqual(record1.title, "Title 1");
  });

  it("has a genre", function(){
    assert.strictEqual(record1.genre, "Rock");
  });

  it("has a price", function(){
    assert.strictEqual(record1.price, 10.00);
  });

})
