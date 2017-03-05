/**
 * Created by ulisesantana on 4/03/17.
 */
module.exports = class Transaction{
  constructor(){
    this.balance = 0;
    this.record = [];
  }
  
  getBalance(){
    return this.balance;
  }
  
  getRecords(){
    return this.record;
  }
  
  add(amount){
    this.balance += amount;
  }
  
  remove(amount){
    this.balance -= amount;
  }
}