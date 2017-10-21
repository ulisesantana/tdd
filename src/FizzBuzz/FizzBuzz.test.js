const FizzBuzz = require('./FizzBuzz.js');
const Integer = require('./Integer');
const StringWrapper = require('./StringWrapper');
const assert = require('assert');

describe('Tests para el FizzBuzz', function(){
  
  const fizz = new StringWrapper("Fizz");
  const buzz = new StringWrapper("Buzz");
  
  it('Debe ser un true', function(){
    assert.equal(true, true);
  });

  it('Debe ser un Integer(1)', function(){
    let one = new Integer(1);
    let fb = new FizzBuzz();
    assert.equal(fb.validate(one), one);
  });

  it('Debe ser un Fizz', function(){
    let three = new Integer(3);
    let fb = new FizzBuzz();
    assert.deepEqual(fb.validate(three), fizz);
  });

  it('Debe ser un Buzz', function(){
    let five = new Integer(5);
    let fb = new FizzBuzz();
    assert.deepEqual(fb.validate(five), buzz);
  });
  
  
});
