const ship = require('../src/ship');

const patrol = ship(2);

test('Ship is damaged', () => {
  patrol.hit([1, 2]);
  expect(patrol.damageReceived.length).not.toBe(0);
});

test('Ship is not sunk', () => {
  expect(patrol.isSunk()).toBeFalsy();
});

test('Ship is sunk', () => {
  patrol.hit([1, 1]);
  expect(patrol.isSunk()).toBeTruthy();
});
