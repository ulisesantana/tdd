import * as assert from 'assert';
import Counter from './Counter';

describe("Counter test", function () {
  it('green test', function () {
    const expect = true;
    assert.deepEqual(true, expect);
  });

  it('Has value', function () {
    let c = new Counter(1);
    assert.deepEqual(c.value, 1);
  });

  it('Increase', function () {
    const useCases = [
      {
        case: 1,
        expect: 2
      },
      {
        case: 0,
        expect: 1
      },
      {
        case: -1,
        expect: 0
      },
    ];

    useCases.forEach( useCase => {
      let c = new Counter(useCase.case);
      c.increase();
      assert.deepEqual(c.value, useCase.expect);
    });

  });

  it('Decrease', function () {
    const useCases = [
      {
        case: 1,
        expect: 0
      },
      {
        case: 0,
        expect: -1
      },
      {
        case: -1,
        expect: -2
      },
    ];

    useCases.forEach( useCase => {
      let c = new Counter(useCase.case);
      c.decrease();
      assert.deepEqual(c.value, useCase.expect);
    });

  });
});