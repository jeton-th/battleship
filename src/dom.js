function createBoard(boardInstance, parentDiv) {
  const domBoard = document.querySelector(parentDiv);
  boardInstance.board.forEach((row, i) => {
    row.forEach((box, j) => {
      const button = document.createElement('button');
      button.id = `${i}-${j}`;
      if (box === 1) {
        button.innerHTML = 1;
      } else {
        button.innerHTML = 0;
      }

      //pass the id

      button.addEventListener('click', () => {
        button.disabled = true;
        const res = boardInstance.receiveAttack(i, j);
        changeButton(button, res);
      });

      domBoard.appendChild(button);
    });
  });
}

function changeButton(button, res) {
  if (res === 'hit') {
    button.innerHTML = 1;
    button.style.background = 'red';
  } else {
    button.innerHTML = -1;
    button.style.background = 'blue';
  }
}

export { createBoard };
