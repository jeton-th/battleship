import ship from './ship';
import gameBoard from './gameBoard';
import player from './player';
import { createBoard } from './dom';

const carrier = ship(5);
const battleship = ship(4);
const destroyer = ship(3);
const submarine = ship(3);
const patrol = ship(2);

const myBoard = gameBoard([carrier, battleship, destroyer, submarine, patrol]);

myBoard.placeShip(carrier);
myBoard.placeShip(battleship);
myBoard.placeShip(destroyer);
myBoard.placeShip(submarine);
myBoard.placeShip(patrol);

createBoard(myBoard.board, '.my-board');
// createBoard('.enemy-board');
