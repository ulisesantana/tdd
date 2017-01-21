const assert = require('chai').assert;
const expect = require('expect.js');

const getBigger = require('../src/numbers_01.js')

describe('Order', function(){
    describe('.beers', function(){

        /** Test if the value is a string */
        it('should be a string', function(){
            var testValue = 'test';
            expect(testValue).to.be.a('string');
        });

    });
});

describe('getBigger', function(){
    describe('.bigger', function(){

        /** Test if the value is a string */
        it('returns the biggest when is b', function(){
            var a = 10;
            var b = 20;
            expect(getBigger(a,b)).to.be(b);
        });

    });
});
