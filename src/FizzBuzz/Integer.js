class Integer {
  constructor(number) {
    this.number = number;
  }

  execute(callback) {
    return callback(this.number);
  }

}

module.exports = Integer;