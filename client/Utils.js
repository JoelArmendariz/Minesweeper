const lookForBombs = [
  {
    row: -1,
    col: 0
  },
  {
    row: -1,
    col: -1
  },
  {
    row: 0,
    col: -1
  },
  {
    row: -1,
    col: 1
  },
  {
    row: 0,
    col: 1
  },
  {
    row: 1,
    col: -1
  },
  {
    row: 1,
    col: 0
  },
  {
    row: 1,
    col: 1
  },
]

const checkCount = (x, y, board) => {
  if (board[x][y] === 'bomb') {
    alert('you lose!')
  } else {
    let bombCount = 0;

    for (let i = 0; i < lookForBombs.length; i++) {

      let row = lookForBombs[i].row + x;
      let col = lookForBombs[i].col + y;

      if (board[row] !== undefined) {
        if (board[row][col] === 'bomb') {
          bombCount++;
        }
      }
    }

    if (!bombCount) {
      board[x][y] = 'uncovered';
    }

    if (bombCount) {
      board[x][y] = bombCount
      return bombCount
    }

    for (let j = 0; j < lookForBombs.length; j+=1) {

      let row = lookForBombs[j].row + x;
      let col = lookForBombs[j].col + y;

      if (board[row] !== undefined) {
        if (board[row][col] === 0) {
          checkCount(row, col, board);
        }
      }
    }

    return bombCount;
  }

}


module.exports = { checkCount }