function createBoard(myBoard, parentDiv) {
  const domBoard = document.querySelector(parentDiv);
  myBoard.forEach((row, i) => {
    row.forEach((box, j) => {
      const button = document.createElement('button');
      button.id = `${i}-${j}`;
      if (box === 1) {
        button.innerHTML = 1;
      } else {
        button.innerHTML = 0;
      }

      domBoard.appendChild(button);
    })
  });

}

export { createBoard };
