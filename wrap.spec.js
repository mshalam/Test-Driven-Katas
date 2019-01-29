const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Returns the string if maxlen is zero  ', () => {
    expect(wrap('hello world', 0)).to.equal('hello world');
  });
  it('return error message if maxlen is less than 0', () => {
    expect(wrap('hello world', -1)).to.equal('invalid number');
  });
  it('returns two lines of wrapped code', () => {
    expect(wrap('hello world', 5)).to.equal('hello\n world');
  });
  it('returns mulitple lines of wrapped code', () => {
    expect(wrap('welcome to full', 5)).to.equal('welcome\n to\n full');
  });
  it('returns mulitple lines of wrapped code', () => {
    expect(wrap('welcome to fsal', 6)).to.equal('welcome\n to fsal');
  });
});
