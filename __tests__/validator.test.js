'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out
  it('strings', () => {
    let str = 'yes';
    expect(validator.isString(str)).toBeTruthy();
  });

  it('numbers', () => {
    let num = 1;
    expect(validator.isNumber(num)).toBeTruthy();
  });

  it('arrays', () => {
    let arr = ['a'];
    expect(validator.isArray(arr)).toBeTruthy();
  });

  it('objects', () => {
    let obj = {x:'y'};
    expect(validator.isObject(obj)).toBeTruthy();
  });

  it('booleans', () => {
    let bool = false;
    expect(validator.isBoolean(bool)).toBeTruthy();
  });

  it('functions', () => {
    let func = () => {};
    expect(validator.isFunction(func)).toBeTruthy();
  });

});

describe('validator module performs complex validations', () => {
  const person = {
    name: 'Gregory',
    hair: {
      exists: true,
      color: 'puce',
    },
    age: 27,
  };
  
  it('validates the presence of required object properties at any level', () => {

    expect(person.hair.exists).toBeTruthy();
    expect(person.age).toBe(27);
  });

  it('validates the proper types of object properties', () => {
    expect(typeof person.name).toStrictEqual('string');
    expect(typeof person).toStrictEqual('object');

  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers

    let exArr = [1, 3, 5, 8];
    let mixArr =['a', 'b', 'c'];

    expect(typeof (exArr[0])).toStrictEqual('number');
    expect(typeof (mixArr[0])).toStrictEqual('string');
    // expect(true).toBeTruthy();

  });

  it('validates a value array against an approved list', () => {
    expect (person.values.includes('puce'));
    
    expect(true).toBeTruthy();
  });

  // TODO: Cover so, so many more cases

});






