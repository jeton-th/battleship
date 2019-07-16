import ship from './ship';
import gameBoard from './gameBoard';
import player from './player';
import { createBoard, changeButton } from './dom';

const utils = require('./utils');

const human = player('human');
const ai = player('computer');

let turn = human.name;
let gameOver = false;

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

createBoard(myBoard.board, 'my-board');

// Enemy Board

const carrier2 = ship(5);
const battleship2 = ship(4);
const destroyer2 = ship(3);
const submarine2 = ship(3);
const patrol2 = ship(2);

const enemyBoard = gameBoard([
  carrier2,
  battleship2,
  destroyer2,
  submarine2,
  patrol2
]);

enemyBoard.placeShip(carrier2);
enemyBoard.placeShip(battleship2);
enemyBoard.placeShip(destroyer2);
enemyBoard.placeShip(submarine2);
enemyBoard.placeShip(patrol2);

function botPlay() {
  const empty = [];
  myBoard.board.forEach((row, x) => {
    row.forEach((box, y) => {
      if (box === 0 || box === 1) empty.push([x, y]);
    });
  });
  const index = utils.randomNumber(0, empty.length - 1);

  const x = empty[index][0];
  const y = empty[index][1];
  const button = document.getElementById(`my-board-${x}-${y}`);

  const res = myBoard.receiveAttack(x, y);

  changeButton(button, res);
  gamePlay(res)
}

function gamePlay(res) {
  if (myBoard.isAllSunk() || enemyBoard.isAllSunk()) {
    console.log(`Someone wins.`);
  } else if (res === 'hit') {
    turn = human.name;
    console.log('play again');
  } else {
    botPlay();
    turn = res === 'hit' ? 'ai' : human.name;
  }
}

const domBoard = createBoard(enemyBoard.board, 'enemy-board');
domBoard.childNodes.forEach(button => {
  button.addEventListener('click', () => {
    const coords = button.id.split('-');
    const res = enemyBoard.receiveAttack(coords[2], coords[3]);
    turn = 'computer';
    changeButton(button, res);
    gamePlay(res);
  });
});
