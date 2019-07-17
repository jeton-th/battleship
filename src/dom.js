/* eslint no-param-reassign: "error" */

function createBoard(board, parentDiv) {
  const domBoard = document.querySelector(`.${parentDiv}`);
  const letters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  for (let i = 0; i < 11; i += 1) {
    // Insert the letters in the first row
    if (i === 0) {
      for (let j = 0; j < 11; j += 1) {
        const letter = document.createElement('span');
        letter.classList.add('box');
        letter.innerHTML = letters[j];
        domBoard.appendChild(letter);
      }
    }

    // Insert the numbers in the first column
    for (let j = 0; j < 11; j += 1) {
      if (i !== 10) {
        if (j === 0) {
          const number = document.createElement('span');
          number.classList.add('box');
          number.innerHTML = i + 1;
          domBoard.appendChild(number);
        } else {
          // Insert the field
          const button = document.createElement('button');
          button.classList.add('box');
          button.id = `${parentDiv}-${i}-${j - 1}`;
          domBoard.appendChild(button);
        }
      }
    }
  }

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
