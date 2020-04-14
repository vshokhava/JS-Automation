class Calculator {
  constructor() {
  }

  add(...args) {
    let result = 0;
    for (const arg of args) {
      if (isNaN(arg)) {
        return 'argument is not a number';
      } else {
        result += arg;
      }
    }
    return result;
  }

  multiply(...args) {
    let result = 1;
    for (const arg of args) {
      if (isNaN(arg)) {
        return 'argument is not a number';
      } else {
        result *= arg;
      }
    }
    return result;
  }
}

module.exports = Calculator;
