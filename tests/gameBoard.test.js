const gameBoard = require('../src/gameBoard');
const ship = require('../src/ship');

const myBoard = gameBoard();

const carrier = ship(5);
const battleship = ship(4);
const destroyer = ship(3);
const submarine = ship(3);
const patrol = ship(2);

myBoard.placeShip(carrier);
myBoard.placeShip(battleship);
myBoard.placeShip(destroyer);
myBoard.placeShip(submarine);
myBoard.placeShip(patrol);


test('Game board has correctly placed ship & check for overlapping ships', () => {
  let count = 0;
  myBoard.board.forEach(row => {
    count += row.filter(box => box === 1).length;
  });

  expect(count).toBe(17);
});


