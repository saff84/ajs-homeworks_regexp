import Validator from '../index';

test('test name true', () => {

  const user = new Validator('San_-999a')

  expect(user.validateName()).toBeTruthy();
});

test('test name false digits in begin', () => {

  const user = new Validator('8San9a')

  expect(user.validateName()).toBeFalsy();
});

test('test name false digits in begin', () => {

  const user = new Validator('-San9a')

  expect(user.validateName()).toBeFalsy();
});

test('test name false four digits', () => {

  const user = new Validator('San9999a')

  expect(user.validateName()).toBeFalsy();
});