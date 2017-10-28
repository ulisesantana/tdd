import FizzBuzz from './FizzBuzz';
import * as assert from 'assert';

describe('All Fizz Buzz Test', function () {

  const fizz = "Fizz";
  const buzz = "Buzz";
  const fizzbuzz = "Fizz Buzz";

  it('Should be true', function () {
    assert.equal(true, true);
  });

  describe("Fizz", function () {
    const useCases = [3, 6, 9];
    const errorUseCases = [2, 4, 5];

    useCases.forEach((useCase) => {
      it(`Should retrieve Fizz. Use case: ${useCase}`, function () {
        let fb = new FizzBuzz();
        assert.deepEqual(fb.validate(useCase), fizz);
      });
    });

    errorUseCases.forEach((useCase) => {
      it(`Shouldn't retrieve Fizz. Use case: ${useCase}`, function () {
        let fb = new FizzBuzz();
        assert.notDeepEqual(fb.validate(useCase), fizz);
      });
    });

  });

  describe("Buzz", function () {
    const useCases = [5, 20, 10]
    const errorUseCases = [12, 8, 3];

    useCases.forEach((useCase) => {
      it(`Should retrieve Buzz. Use case: ${useCase}`, function () {
        let fb = new FizzBuzz();
        assert.deepEqual(fb.validate(useCase), buzz);
      });
    });

    errorUseCases.forEach((useCase) => {
      it(`Shouldn't retrieve Buzz. Use case: ${useCase}`, function () {
        let fb = new FizzBuzz();
        assert.notDeepEqual(fb.validate(useCase), buzz);
      });
    });

  });

  describe("Fizz Buzz", function () {
    const useCases = [15, 300, 45]
    const errorUseCases = [18, 25, 88]

    useCases.forEach((useCase) => {
      it(`Should retrieve Fizz Buzz. Use case: ${useCase}`, function () {
        let fb = new FizzBuzz();
        assert.deepEqual(fb.validate(useCase), fizzbuzz);
      });
    });

    errorUseCases.forEach((useCase) => {
      it(`Shouldn't retrieve Fizz Buzz. Use case: ${useCase}`, function () {
        let fb = new FizzBuzz();
        assert.notDeepEqual(fb.validate(useCase), fizzbuzz);
      });
    });

  });

});
