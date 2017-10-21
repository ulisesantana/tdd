const StringWrapper = require('./StringWrapper');

class FizzBuzz {
  constructor() {

  }

  validate(integer) {
    if (integer.execute(this.isFizzBuzz)) return (new StringWrapper("FizzBuzz"));
    if (integer.execute(this.isBuzz)) return (new StringWrapper("Buzz"));
    if (integer.execute(this.isFizz)) return (new StringWrapper("Fizz"));
    return integer;
  }

  isFizzBuzz(number){
    return number % 15 === 0;
  }

  isBuzz(number) {
    return number % 5 === 0;
  }

  isFizz(number) {
    return number % 3 === 0;
  }

};

module.exports = FizzBuzz;