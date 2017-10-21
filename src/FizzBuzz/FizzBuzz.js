const StringWrapper = require('./StringWrapper');
const NumberWrapper = require('./NumberWrapper');

class FizzBuzz {
  constructor() {

  }

  validate(number) {
    if (number.isDivisibleBy(new NumberWrapper(15))) return (new StringWrapper("FizzBuzz"));
    if (number.isDivisibleBy(new NumberWrapper(5))) return (new StringWrapper("Buzz"));
    if (number.isDivisibleBy(new NumberWrapper(3))) return (new StringWrapper("Fizz"));
    return number;
  }


};

module.exports = FizzBuzz;