class Integer {
  constructor(number) {
    this.number = number;
  }


  isDivisibleBy( number){
    return this.number % number === 0;
  }

}

module.exports = Integer;