// const assert = require('chai').assert;
const expect = require('expect.js');
const PasswordValidator = require('./PasswordValidator.js');

describe('Tests para la validación de contraseñas', function(){
  
  const validator = new PasswordValidator();
  
  it('La password debe ser correcta', function(){
    expect(validator.validate('As1d_a')).to.be(true);
  });
  
  it('La password debe tener mínimo 6 caracteres', function(){
      expect(validator.validate('As1d_')).to.be(false);
  });
  
  it('La password debe tener al menos una mayúscula', function(){
    expect(validator.validate('aas1d_')).to.be(false);
  });
  
  it('La password debe tener al menos una minúscula', function(){
    expect(validator.validate('AS1D_A')).to.be(false);
  });
  
  it('La password debe tener al menos una barra baja', function(){
    expect(validator.validate('As1daa')).to.be(false);
  });
  
  it('La password debe tener al menos un número', function(){
    expect(validator.validate('Asfdaa_')).to.be(false);
  });
  
  
});
