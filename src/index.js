import ship from './ship';
import gameBoard from './gameBoard';
import player from './player';
import { createBoard } from './dom';

const human = player('human')
const ai = player('computer')

let turn = human 

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

createBoard(myBoard, '.my-board');

//Enemy Board

const carrier2 = ship(5);
const battleship2 = ship(4);
const destroyer2 = ship(3);
const submarine2 = ship(3);
const patrol2 = ship(2);

const enemyBoard = gameBoard([carrier2, battleship2, destroyer2, submarine2,patrol2]);

enemyBoard.placeShip(carrier2);
enemyBoard.placeShip(battleship2);
enemyBoard.placeShip(destroyer2);
enemyBoard.placeShip(submarine2);
enemyBoard.placeShip(patrol2);


createBoard(enemyBoard,'.enemy-board');
