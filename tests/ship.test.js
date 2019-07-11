const ship = require('../ship');

const patrol = ship(2);

test('ship', () => {
  expect(patrol.isSunk()).toBeFalsy();
});

test('ship', () => {
  patrol.hit(5)
  expect(patrol.damageReceived).toContain(5);
});