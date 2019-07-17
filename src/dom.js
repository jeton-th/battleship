/* eslint no-param-reassign: "error" */

function createBoard(board, parentDiv) {
  const domBoard = document.querySelector(`.${parentDiv}`);
  board.forEach((row, i) => {
    row.forEach((box, j) => {
      const button = document.createElement('button');
      button.id = `${parentDiv}-${i}-${j}`;
      domBoard.appendChild(button);
    });
  });

  return domBoard;
}

function changeButton(button, res) {
  button.disabled = true;
  if (res === 'hit') {
    button.style.background = 'red';
  } else {
    button.style.background = 'blue';
  }
}

export { createBoard, changeButton };
