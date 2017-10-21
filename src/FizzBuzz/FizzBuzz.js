const StringWrapper = require('./StringWrapper');

class FizzBuzz {
  constructor() {

  }

  validate(integer) {
    if (integer.number % 3 === 0) return (new StringWrapper("Fizz"));
    if (integer.number === 5) return (new StringWrapper("Buzz"));
    return integer;
  }


};

module.exports = FizzBuzz;