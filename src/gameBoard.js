const gameBoard = () => {
  const board = [];
  const placeShip = (shipLength) => {
   board.push(shipLength)
  };
  return {
    board,
    placeShip,
  };
};

module.exports = gameBoard;
