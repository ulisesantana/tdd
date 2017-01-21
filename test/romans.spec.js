const assert = require('chai').assert;
const expect = require('expect.js');

const roman = require('../src/romans.js')

describe('Números romanos menor 10', function() {

    it('Debe devolver un I', function() {
        expect(roman(1)).to.be('I');
    });
    it('Debe devolver un II', function() {
        expect(roman(2)).to.be('II');
    });
    it('Debe devolver un III', function() {
        expect(roman(3)).to.be('III');
    });
    it('Debe devolver un V', function() {
        expect(roman(5)).to.be('V');
    });
    it('Debe devolver un VIII', function() {
        expect(roman(8)).to.be('VIII');
    });
});

describe('Números romanos mayor de 10 y menores de 40', function() {
    it('Debe devolver un X', function() {
        expect(roman(10)).to.be('X');
    });
    it('Debe devolver un XI', function() {
        expect(roman(11)).to.be('XI');
    });
    it('Debe devolver un XV', function() {
        expect(roman(15)).to.be('XV');
    });
    it('Debe devolver un XX', function() {
        expect(roman(20)).to.be('XX');
    });
    it('Debe devolver un XXI', function() {
        expect(roman(21)).to.be('XXI');
    });
    it('Debe devolver un XXV', function() {
        expect(roman(25)).to.be('XXV');
    });
    it('Debe devolver un XXX', function() {
        expect(roman(30)).to.be('XXX');
    });
    it('Debe devolver un XXXI', function() {
        expect(roman(31)).to.be('XXXI');
    });
    it('Debe devolver un XXXV', function() {
        expect(roman(35)).to.be('XXXV');
    });
});

describe('Números romanos mayores de 40 y menores de 1000', function() {
    it('Debe devolver un XL', function() {
        expect(roman(40)).to.be('XL');
    });
    it('Debe devolver un L', function() {
        expect(roman(50)).to.be('L');
    });
    it('Debe devolver un XV', function() {
        expect(roman(500)).to.be('D');
    });
});
