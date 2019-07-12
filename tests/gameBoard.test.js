const gameBoard = require('../src/gameBoard');
const ship = require('../src/ship');

const patrol = ship(2);

const newBoard = gameBoard();

test('Game board returning an array', () => {
  expect(newBoard.board).toEqual([]);
});

test('Should place patrol boat with 2 size in the board', () => {
    newBoard.placeShip(patrol.size);
    expect(newBoard.board).toContain(2);
  });
  