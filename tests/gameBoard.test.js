const gameBoard = require('../src/gameBoard');
const ship = require('../src/ship');

const myBoard = gameBoard();
const patrol = ship(2);
myBoard.placeShip(patrol);


test('Game board has correctly placed ship', () => {
  const count = myBoard.board.filter(a => a === 1);
  console.log(myBoard.board);
  expect(count).toBe(2);
});
