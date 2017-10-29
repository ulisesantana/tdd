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
    const useCases = [
      {
        num: 3,
        expect: fizz
      },
      {
        num: 6,
        expect: fizz
      },
      {
        num: 9,
        expect: fizz
      },
      {
        num: 2,
        expect: 2
      },
      {
        num: 4,
        expect: 4
      },
      {
        num: 5,
        expect: buzz,
      }
    ];
  
    useCases.forEach((useCase) => {
      let test = `Use case:  "${useCase.num}")`;
      it(`Should retrieve ${useCase.expect}. ${test}`,  () => {
        let fb = new FizzBuzz();
        assert.deepEqual(fb.validate(useCase.num), useCase.expect);
      });
    });
  });

  describe("Buzz", function () {
    const useCases = [
      {
        num: 5,
        expect: buzz
      },
      {
        num: 10,
        expect: buzz
      },
      {
        num: 20,
        expect: buzz
      },
      {
        num: 12,
        expect: fizz
      },
      {
        num: 8,
        expect: 8
      },
      {
        num: 3,
        expect: fizz,
      }
    ];
  
    useCases.forEach((useCase) => {
      let test = `Use case:  "${useCase.num}")`;
      it(`Should retrieve ${useCase.expect}. ${test}`,  () => {
        let fb = new FizzBuzz();
        assert.deepEqual(fb.validate(useCase.num), useCase.expect);
      });
    });
  });

  describe("FizzBuzz", function () {
    const useCases = [
      {
        num: 15,
        expect: fizzbuzz
      },
      {
        num: 300,
        expect: fizzbuzz
      },
      {
        num: 45,
        expect: fizzbuzz
      },
      {
        num: 18,
        expect: fizz
      },
      {
        num: 25,
        expect: buzz
      },
      {
        num: 88,
        expect: 88,
      }
    ];
  
    useCases.forEach((useCase) => {
      let test = `Use case:  "${useCase.num}")`;
      it(`Should retrieve ${useCase.expect}. ${test}`,  () => {
        let fb = new FizzBuzz();
        assert.deepEqual(fb.validate(useCase.num), useCase.expect);
      });
    });
  });

});
