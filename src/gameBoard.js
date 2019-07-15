const gameBoard = () => {
  const board = Array.from(Array(10), () => Array(10).fill(0));
  const placeShip = (ship) => {
    const randomNumber = (min, max) => Math.floor((Math.random() * max) + min);

    let direction = (randomNumber(1, 2) === 1) ? 'h' : 'v';
    let x = randomNumber(0, 9 - ship.size);
    let y = randomNumber(0, 9 - ship.size);

    function place() {
      let i = (direction === 'h') ? x : y;
      let j = (direction === 'h') ? y : x;
      const end = i + ship.size;

      let occupied = false;
      for (let k = i; k < end; k += 1) {
        if (direction === 'h') {
          occupied = (board[j][k] === 1) ? true : occupied;
        } else {
          occupied = (board[k][j] === 1) ? true : occupied;
        }
        console.log(`i: ${i} - j: ${j} - direction: ${direction} - occup: ${occupied}`)
        console.log(`k: ${k} - j: ${j} - direction: ${direction} - occup: ${occupied}`)
      }


      if (occupied) {
        direction = (randomNumber(1, 2) === 1) ? 'h' : 'v';
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

    console.log(board)
  };

  return {
    board,
    placeShip,
  };
};

module.exports = gameBoard;
