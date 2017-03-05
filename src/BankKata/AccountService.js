/**
 * Created by ulisesantana on 4/03/17.
 */
const Console = require('./Console');
const Transaction = require('./Transaction');

module.exports = class AccountService {
  constructor(){
    this.transaction = new Transaction();
    this.console = new Console();
  }
  
  deposit(amount) {
    
  }
  
  withdraw(amount) {
    
  }
  
  printStatement() {
    // let records = this.transaction.getRecords();
    this.console.printLine('DATE | AMOUNT | BALANCE');
    // this.console.printLine("10/04/2014 | 500 | 1400");
    // this.console.printLine("02/04/2014 | -100 | 900");
    // this.console.printLine("01/04/2014 | 1000 | 1000");

    // for(let record of records){
    //   this.console.printLine(record);
    // }
  }
};