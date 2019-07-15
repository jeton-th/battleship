const gameBoard = require('../src/gameBoard');
const ship = require('../src/ship');

const myBoard = gameBoard();

const a = ship(5);
const b = ship(5);
const c = ship(5);
const d = ship(5);

myBoard.placeShip(a);
myBoard.placeShip(b);
myBoard.placeShip(c);
myBoard.placeShip(d);

test('Game board has correctly placed ship', () => {
  const count = (myBoard.board.filter(a => a === 1)).count;
  expect(count).toBe(5);
});
