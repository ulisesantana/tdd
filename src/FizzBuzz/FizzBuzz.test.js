const FizzBuzz = require('./FizzBuzz.js');
const Integer = require('./Integer');
const StringWrapper = require('./StringWrapper');
const assert = require('assert');

describe('Tests para el FizzBuzz', function () {

  const fizz = new StringWrapper("Fizz");
  const buzz = new StringWrapper("Buzz");

  it('Debe ser un true', function () {
    assert.equal(true, true);
  });

  it('Debe ser un Integer(1)', function () {
    let one = new Integer(1);
    let fb = new FizzBuzz();
    assert.equal(fb.validate(one), one);
  });

  describe("Deben ser Fizz", function () {
    const useCases = [3, 6, 9]

    useCases.forEach((useCase) => {

      it(`Caso de uso: ${useCase}`, function () {
        let integer = new Integer(useCase);
        let fb = new FizzBuzz();
        assert.deepEqual(fb.validate(integer), fizz);
      });
    });
  });

  describe("No deben ser Fizz", function () {
    const useCases = [2, 4, 5];

    useCases.forEach((useCase) => {

      it(`Caso de uso: ${useCase}`, function () {
        let integer = new Integer(useCase);
        let fb = new FizzBuzz();
        assert.notDeepEqual(fb.validate(integer), fizz);
      });
    });
  });

  describe("Deben ser Buzz", function () {
    const useCases = [5, 20, 10]

    useCases.forEach((useCase) => {

      it(`Caso de uso: ${useCase}`, function () {
        let integer = new Integer(useCase);
        let fb = new FizzBuzz();
        assert.deepEqual(fb.validate(integer), buzz);
      });
    });
  });

  describe("No deben ser Buzz", function () {
    const useCases = [12, 8, 3];

    useCases.forEach((useCase) => {

      it(`Caso de uso: ${useCase}`, function () {
        let integer = new Integer(useCase);
        let fb = new FizzBuzz();
        assert.notDeepEqual(fb.validate(integer), buzz);
      });
    });
  });

});
