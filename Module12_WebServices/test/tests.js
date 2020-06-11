const axios = require('axios');
const expect = require('chai').expect;

describe('Test to verify an http status code', function() {
    it('response status code should be 200', async function() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      expect(res.status).to.equal(200);
    });
    it('response status text should be OK', async function() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        expect(res.statusText).to.equal('OK');
      });
  });
  
  describe('Test to verify an http response', function() {
    it('the content-type header exists in the obtained response', async function() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    expect(Object.keys(response.headers)).to.include('content-type');
    });
    it('the value of the content-type header is application/json; charset=utf-8', async function() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
      });
  });

describe('Test to verify array of users', function() {
    it('the content of the response body is the array', async function() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    expect(response.data).to.be.an('array');
    });
    it('array of users has 10 items', async function() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      expect(response.data.length).to.equal(10);
  });
});