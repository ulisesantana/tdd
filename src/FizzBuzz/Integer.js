class Integer {
  constructor(number) {
    this.number = number;
  }


  isDivisibleBy( integer){
    return this.number % integer.number === 0;
  }

}

module.exports = Integer;