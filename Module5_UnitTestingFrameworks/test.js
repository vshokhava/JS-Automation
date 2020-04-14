const calc = require('./calculator.js')
const assert = require('assert')
describe('Add', function () {
  let calculator = new calc();
  it('correctly calculates the sum of 1 and 3', () => {
    assert.equal(calculator.add(1, 3), 4);
  });
  it('correctly calculates the sum of -1 and -1', () => {
    assert.equal(calculator.add(-1, -1), -2);
  });
  it('correctly calculates the sum of -1, -1, -1', () => {
    assert.equal(calculator.add(-1, -1, -1), -3);
  });
  it('correctly calculates the sum of 7, 5, 32, -3', () => {
    assert.equal(calculator.add(7, 5, 32, -3), 41);
  });
  it('correctly identifies if at least of the arguments is not a number', () => {
    assert.equal(calculator.add(7, 5, 32, 'law'), 'argument is not a number');
  });

});

describe('Multiply', function () {
  let calculator = new calc();
  it('correctly calculates the product of 12 and 12', () => {
    assert.equal(calculator.multiply(12, 12), 144);
  });
  it('correctly calculates the product of -1 and 2', () => {
    assert.equal(calculator.multiply(-1, 2), -2);
  });
  it('correctly calculates the product of 0, 20, 7', () => {
    assert.equal(calculator.multiply(0, 20, 7), 0);
  });
  it('correctly calculates the product of 12 and 12', () => {
    assert.equal(calculator.multiply(3, 2, 8, 10), 480);
  });
  it('correctly identifies if at least of the arguments is not a number', () => {
    assert.equal(calculator.add('seven', 5, 32, 'six'), 'argument is not a number');
  });
});