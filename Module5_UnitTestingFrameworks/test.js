const operations = require('./calculator.js')
const assert = require('assert')

it('correctly calculates the sum of 1 and 3', () => {
  assert.equal(operations.add(1, 3), 4)
});
it('correctly calculates the sum of -1 and -1', () => {
    assert.equal(operations.add(-1, -1), -2)
  });
  it('correctly calculates the product of 12 and 12', () => {
    assert.equal(operations.multiply(12, 12), 144)
  });
  it('indicates failure when a string is used instead of a number', () => {
    assert.equal(operations.validateNumbers('sammy', 5), false)
  })
  
  it('indicates failure when two strings is used instead of numbers', () => {
    assert.equal(operations.validateNumbers('sammy', 'sammy'), false)
  })
  
  it('successfully runs when two numbers are used', () => {
    assert.equal(operations.validateNumbers(5, 5), true)
  })