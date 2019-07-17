import ship from '../src/ship';
import gameBoard from '../src/gameBoard';

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

test('Game board has correctly placed ship & check for overlapping ships', () => {
  let count = 0;
  myBoard.board.forEach(row => {
    count += row.filter(box => box === 1).length;
  });

  expect(count).toBe(17);
});

test('Attack is received', () => {
  const start = destroyer.coordinates[0];
  myBoard.receiveAttack(start[0], start[1]);
  expect(destroyer.damageReceived).toContainEqual(start);
});

test('All ship are not sunk', () => {
  myBoard.isAllSunk();
  expect(myBoard.isAllSunk()).toBeFalsy();
});
