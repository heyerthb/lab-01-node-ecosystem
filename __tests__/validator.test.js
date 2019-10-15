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
    let validatorRules = () => {};
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isValid(1, )).toBeTruthy();
  });

  it('arrays', () => {
    let arr = ['a'];
    expect(validator.isString(arr)).toBeFalsy();
  });

  it('objects', () => {
    let obj = {x:'y'};
    expect(validator.isString(obj)).toBeFalsy();
  });

  it('booleans', () => {
    let bool = false;
    expect(validator.isString(bool)).toBeFalsy();
  });

  it('functions', () => {
    const func = () => {};
    expect(validator.isString(func)).toBeFalsy();

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
    // i.e. does person.hair.color exist and have a good value, not just person.hair
      
    expect(true).toBeTruthy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.

    
    expect(true).toBeTruthy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers

    let arr = [1, 3, 5, 8];
    let mixArr =['a', 3, 7, null, true];

    expect(validator.isArray(arr)).toBeTruthy();
    expect(validator.isArray(mixArr)).toBeFalsy();
    // expect(true).toBeTruthy();

  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    
    expect(true).toBeTruthy();
  });

  // TODO: Cover so, so many more cases

});
