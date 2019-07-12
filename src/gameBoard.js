const gameBoard = () => {
  const board = new Array(10).fill(0);

  const placeShip = (ship) => {
    let start = Math.floor((Math.random() * (99 - ship.size)) + 0);
    while (board[start] === 1) {
      start = Math.floor((Math.random() * (99 - ship.size)) + 0);
    }

    const end = start + ship.size;
    for (start; start < end; start += 1) {
      board[start] = 1;
    }
  };

  return {
    board,
    placeShip,
  };
};

module.exports = gameBoard;
