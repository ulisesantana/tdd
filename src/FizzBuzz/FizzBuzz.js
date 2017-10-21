const StringWrapper = require('./StringWrapper');

class FizzBuzz{
  constructor(){
    
  }

  validate(integer){
    if(integer.number===3) return (new StringWrapper("Fizz"));
    return integer;
  }


};

module.exports = FizzBuzz;