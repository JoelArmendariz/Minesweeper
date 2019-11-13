import { checkCount } from '../Utils'

export const placeTile = (row, col, board) => {

  const count = checkCount(row, col, board);

  return {
    type: 'PLACE_TILE',
    payload: {
      x: row,
      y: col,
      bombCount: count
    }
  }
}

export const started = () => {
  return {
    type: 'STARTED'
  }
}

export const restart = () => {
  console.log('second level')
  return {
    type: 'RESTART'
  }
}