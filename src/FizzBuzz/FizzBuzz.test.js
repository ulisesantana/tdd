const FizzBuzz = require('./FizzBuzz.js');
const Integer = require('./Integer');
const assert = require('assert');

describe('Tests para el FizzBuzz', function(){
  
  
  it('Debe ser un true', function(){
    assert.equal(true, true);
  });

  it('Debe ser un Integer(1)', function(){
    let one = new Integer(1);
    let fb = new FizzBuzz()
    assert.equal(fb.validate(one), one);
  });
  
  
});
