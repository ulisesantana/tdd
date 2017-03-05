// const expect = require('expect.js');
const assert = require('chai').assert;
const sinon = require('sinon');

const bank = require('./AccountService.js');

describe('Bank Kata', function(){
  
  //Los mocks tienen que ir paso a paso
  const account = new bank();
  
  
  // Primero: Verificar que llama a la función add de Transaction
  it('Debe añadir un depósito', function(){
    account.deposit(1000);
    account.deposit(500);
  
  });
  
  // Segundo: Verificar que llama a la función remove de Transaction
  it('Debe retirar dinero', function(){
    account.withdraw(100);
    
    
  });
  
  // Tercero: Formatear los datos de Console y conseguir un validador
  it('Debe imprimir los todas las transacciones', function(){
    
    let consoleMock = sinon.mock(account.console);
   
    consoleMock.expects('printLine').withArgs("DATE | AMOUNT | BALANCE");
    consoleMock.expects('printLine').withArgs("10/04/2014 | 500 | 1400");
    consoleMock.expects('printLine').withArgs("02/04/2014 | -100 | 900");
    consoleMock.expects('printLine').withArgs("01/04/2014 | 1000 | 1000");
    
    account.printStatement();
    
    consoleMock.verify();
  });
  
});
