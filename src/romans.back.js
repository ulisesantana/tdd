module.exports = function(decimalNumber) {
    const numbers = {
      ten: {
        roman: 'X',
        decimal: 10
      },
      nine: {
        roman: 'IX',
        decimal: 9
      },
      five: {
        roman: 'V',
        decimal: 5
      },
      four: {
        roman: 'IV',
        decimal: 4
      },
      one: {
        roman: 'I',
        decimal: 1
      },
    };

    let romanNumber = '';
    while (decimalNumber != 0) {
      buildNumber(decimalNumber);
    }

    function buildNumber(decimalNumber){
      if (decimalNumber >= 10) {
        updateNumbers(numbers.ten);
      } else if(decimalNumber >= 5){
        updateNumbers(numbers.five);
      } else if(decimalNumber < 4){
        updateNumbers(numbers.one);
      }
    }

    function updateNumbers(number){
      romanNumber += number.roman;
      decimalNumber -= number.decimal;
    }
    return romanNumber;
}
