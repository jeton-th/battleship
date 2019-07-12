const gameBoard = () => {
  const board = new Array(100).fill(0);

  const placeShip = (ship) => {
    let start = Math.floor((Math.random() * 99 - ship.size) + 0);
    while (board[start] === 1) {
      start = Math.floor((Math.random() * 99 - ship.size) + 0);
    }

    for (let i = start; i < ship.size; i += 1) {
      console.log(i);
      board[i] = 1;
    }
  };

  return {
    board,
    placeShip,
  };
};

module.exports = gameBoard;
