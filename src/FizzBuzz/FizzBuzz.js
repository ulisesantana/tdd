const StringWrapper = require('./StringWrapper');

class FizzBuzz {
  constructor() {

  }

  validate(integer) {
    if (integer.isDivisibleBy(15)) return (new StringWrapper("FizzBuzz"));
    if (integer.isDivisibleBy(5)) return (new StringWrapper("Buzz"));
    if (integer.isDivisibleBy(3)) return (new StringWrapper("Fizz"));
    return integer;
  }


};

module.exports = FizzBuzz;