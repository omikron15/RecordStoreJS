var Customer = function(name, money){
  this.name = name;
  this.money = money;
  this.recordCollection = [];
}

Customer.prototype.buyRecord = function (record) {
  if (this.money >= record.price){
    this.recordCollection.push(record);
    this.money -= record.price;
  }
};

Customer.prototype.sellRecord = function (recordToSell) {

  this.recordCollection.forEach(function(record, index){
    if(record === recordToSell){
      this.money += recordToSell.price;
      this.recordCollection.splice(index, 1);
    }
  }.bind(this))

};

module.exports = Customer;
