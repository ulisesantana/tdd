class NumberWrapper extends Number {
  constructor(number) {
    super(number);
  }

  isDivisibleBy(number) {
    return this % number === 0;
  }

}

module.exports = NumberWrapper;