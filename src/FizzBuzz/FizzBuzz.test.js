const FizzBuzz = require('./FizzBuzz.js');
const NumberWrapper = require('./NumberWrapper');
const StringWrapper = require('./StringWrapper');
const assert = require('assert');

describe('Tests para el FizzBuzz', function () {

  const fizz = new StringWrapper("Fizz");
  const buzz = new StringWrapper("Buzz");
  const fizzbuzz = new StringWrapper("FizzBuzz");

  it('Debe ser un true', function () {
    assert.equal(true, true);
  });

  it('Debe ser un NumberWrapper(1)', function () {
    let one = new NumberWrapper(1);
    let fb = new FizzBuzz();
    assert.equal(fb.validate(one), one);
  });

  describe("Deben ser Fizz", function () {
    const useCases = [3, 6, 9]

    useCases.forEach((useCase) => {

      it(`Caso de uso: ${useCase}`, function () {
        let number = new NumberWrapper(useCase);
        let fb = new FizzBuzz();
        assert.deepEqual(fb.validate(number), fizz);
      });
    });
  });

  describe("No deben ser Fizz", function () {
    const useCases = [2, 4, 5];

    useCases.forEach((useCase) => {

      it(`Caso de uso: ${useCase}`, function () {
        let number = new NumberWrapper(useCase);
        let fb = new FizzBuzz();
        assert.notDeepEqual(fb.validate(number), fizz);
      });
    });
  });

  describe("Deben ser Buzz", function () {
    const useCases = [5, 20, 10]

    useCases.forEach((useCase) => {

      it(`Caso de uso: ${useCase}`, function () {
        let number = new NumberWrapper(useCase);
        let fb = new FizzBuzz();
        assert.deepEqual(fb.validate(number), buzz);
      });
    });
  });

  describe("No deben ser Buzz", function () {
    const useCases = [12, 8, 3];

    useCases.forEach((useCase) => {

      it(`Caso de uso: ${useCase}`, function () {
        let number = new NumberWrapper(useCase);
        let fb = new FizzBuzz();
        assert.notDeepEqual(fb.validate(number), buzz);
      });
    });
  });

  describe("Deben ser FizzBuzz", function () {
    const useCases = [15, 300, 45]

    useCases.forEach((useCase) => {

      it(`Caso de uso: ${useCase}`, function () {
        let number = new NumberWrapper(useCase);
        let fb = new FizzBuzz();
        assert.deepEqual(fb.validate(number), fizzbuzz);
      });
    });
  });

  describe("No deben ser FizzBuzz", function () {
    const useCases = [18, 25, 88]

    useCases.forEach((useCase) => {

      it(`Caso de uso: ${useCase}`, function () {
        let number = new NumberWrapper(useCase);
        let fb = new FizzBuzz();
        assert.notDeepEqual(fb.validate(number), fizzbuzz);
      });
    });
  });


});
