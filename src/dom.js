/* eslint no-param-reassign: "error" */

function createBoard(board, parentDiv) {
  const domBoard = document.querySelector(`.${parentDiv}`);
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  board.forEach((row, i) => {
    if (i === 0) {
      for (let j = 0; j < 10; j += 1) {
        const letter = document.createElement('span');
        letter.classList.add('box');
        letter.innerHTML = letters[j];
        domBoard.appendChild(letter);
      }
    }
    row.forEach((box, j) => {
      if (j === 0) {
        // for (let j = 0; j < 10; j += 1) {
        const letter = document.createElement('span');
        letter.classList.add('box');
        letter.innerHTML = i;
        domBoard.appendChild(letter);
        // }
      }
      const button = document.createElement('button');
      button.classList.add('box');
      button.id = `${parentDiv}-${i}-${j}`;
      domBoard.appendChild(button);
    });
  });

  return domBoard;
}

function changeButton(button, res) {
  button.disabled = true;
  if (res === 'hit') {
    button.style.background = 'crimson';
  } else {
    button.style.background = 'lightblue';
  }
}

export { createBoard, changeButton };
