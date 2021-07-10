import Validator from '../validation';

test('Val test true', () => {
  const login = 'qwer123-qwe';
  const val = new Validator(login);
  expect(val.validateUsername()).toBeTruthy();
});
test('Val test false', () => {
  const login = '123qwe123qwe';
  const val = new Validator(login);
  expect(val.validateUsername()).toBeFalsy();
});
