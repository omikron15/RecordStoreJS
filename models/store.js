var Store = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance  = 0.0;
}

Store.prototype.addRecord = function (record) {
  this.inventory.push(record);
};

Store.prototype.printInventoryDetails = function () {
  result = "";
  this.inventory.forEach(function(record){
    result += record.printDetails()
  })
  return result;
};

Store.prototype.sellRecord = function (record) {
  this.balance += record.price;
};

Store.prototype.InventoryValue = function () {
  result = 0;
  this.inventory.forEach(function(record){
    result += record.price;
  })
  return result;
};

Store.prototype.financeReport = function () {
  return ("Store Balance: £" + this.balance + ", Store Inventory Value: £" + this.InventoryValue())
};

Store.prototype.displayRecordsOfGenre = function (genre) {
  results = [];
  this.inventory.forEach(function(record){
    if(record.genre === genre){
      results.push(record);
    }
  })
  return results;

};




module.exports = Store;
