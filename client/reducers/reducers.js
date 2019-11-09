import { cloneDeep } from 'lodash';
import { combineReducers } from 'redux';

const initialState = {
  board:[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ],
  isFirst: true,
  timer: 0,
  face: 0
}

const buildBoard = (state = initialState.board, action) => {
  switch (action.type) {
    case 'BUILD_BOARD':
      return action.payload.board;
    default:
      return state
  }
}

const checkSpace = (state = initialState.board, action) => {
  switch (action.type) {
    case 'PLACE_TILE':
      let newBoard = cloneDeep(state)
      newBoard[action.payload.x][action.payload.y] = action.payload.bombCount || -1;
      return newBoard;
    default:
      return state
  }
}

const timer = (state = initialState.timer, action) => {
  switch (action.type) {
    case 'TIMER_UPDATE':
      return timer++;
    default:
      return state
  }
}

const face = (state = initialState.face, action) => {
  switch (action.type) {
    case 'FACE_UPDATE':
      return face++;
    default:
      return state
  }
}

const isFirst = (state = initialState.isFirst, action) => {
  switch (action.type) {
    case 'STARTED':
      return !state;
    default:
      return state
  }
}

const rootReducer = combineReducers({
  board: checkSpace,
  timer: timer,
  face: face,
  isFirst: isFirst
 });


export default rootReducer;