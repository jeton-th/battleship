const ship = require('../src/ship');

const patrol = ship(2);

test('Ship is not sunk', () => {
  expect(patrol.isSunk()).toBeFalsy();
});

test('Ship is sunk', () => {
  patrol.hit(5);
  patrol.hit(5);
  expect(patrol.isSunk()).toBeTruthy();
});

test('Ship is damaged', () => {
  patrol.hit(5);
  expect(patrol.damageReceived).toContain(5);
});

test('Miss', () => {
  patrol.hit(5);
  expect(patrol.damageReceived).not.toContain(88);
});
