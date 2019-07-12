const gameBoard = require('../src/gameBoard');
const ship = require('../src/ship');

const myBoard = gameBoard();
const patrol = ship(2);
const cruiser = ship(5);
myBoard.placeShip(patrol);
myBoard.placeShip(cruiser);


test('Game board has correctly placed ship', () => {
  const count = myBoard.board.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  console.log(myBoard.board)
  expect(count).toBe(7);
});
