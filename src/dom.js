function createBoard(board, parentDiv) {
  const domBoard = document.querySelector(`.${parentDiv}`);
  board.forEach((row, i) => {
    row.forEach((box, j) => {
      const button = document.createElement('button');
      button.id = `${parentDiv}-${i}-${j}`;
      if (box === 1) {
        button.innerHTML = 1;
      } else {
        button.innerHTML = 0;
      }

      domBoard.appendChild(button);
    });
  });

  return domBoard;
}

function changeButton(button, res) {
  button.disabled = true;
  if (res === 'hit') {
    button.innerHTML = 2;
    button.style.background = 'red';
  } else {
    button.innerHTML = -1;
    button.style.background = 'blue';
  }
}

export { createBoard, changeButton };
