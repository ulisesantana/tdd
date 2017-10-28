export default class FizzBuzz {
  constructor() { }

  public validate(number) {
    number = new NumberWrapper(number);

    if (number.isDivisibleBy(15)) return "Fizz Buzz";
    if (number.isDivisibleBy(5)) return "Buzz";
    if (number.isDivisibleBy(3)) return "Fizz";

    return number.valueOf();
  }

};

class NumberWrapper extends Number {
  constructor(number) {
    super(number);
  }

  public isDivisibleBy(number) {
    return this.valueOf() % number === 0;
  }
}