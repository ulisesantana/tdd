const StringWrapper = require('./StringWrapper');
const Integer = require('./Integer');


class FizzBuzz {
  constructor() {

  }

  validate(integer) {
    if (integer.isDivisibleBy(new Integer(15))) return (new StringWrapper("FizzBuzz"));
    if (integer.isDivisibleBy(new Integer(5))) return (new StringWrapper("Buzz"));
    if (integer.isDivisibleBy(new Integer(3))) return (new StringWrapper("Fizz"));
    return integer;
  }


};

module.exports = FizzBuzz;