const gameBoard = () => {
  const board = Array.from(Array(10), () => Array(10).fill(0));
  const placeShip = ship => {
    const randomNumber = (min, max) => Math.floor(Math.random() * max + min);

    let direction = randomNumber(1, 2) === 1 ? 'h' : 'v';
    let x = randomNumber(0, 9);
    let y = randomNumber(0, 9);

    function place() {
      let i, j;
      if (direction === 'h') {
        i = x;
        j = y;
      } else {
        i = y;
        j = x;
      }

      i = i + ship.size > 9 ? 9 - ship.size : i;
      const end = i + ship.size;

      let occupied = false;
      for (let k = i; k < end; k += 1) {
        if (direction === 'h') {
          occupied = board[j][k] === 1 ? true : occupied;
        } else {
          occupied = board[k][j] === 1 ? true : occupied;
        }
      }

      if (occupied) {
        direction = randomNumber(1, 2) === 1 ? 'h' : 'v';
        x = randomNumber(0, 9 - ship.size);
        y = randomNumber(0, 9 - ship.size);
        place();
      } else {
        for (i; i < end; i += 1) {
          if (direction === 'h') {
            board[j][i] = 1;
          } else {
            board[i][j] = 1;
          }
        }
      }
    }

    place();
  };

  return {
    board,
    placeShip
  };
};

module.exports = gameBoard;
