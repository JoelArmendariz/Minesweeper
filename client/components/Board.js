import React from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { placeTile } from '../actions/index';

import Tile from './Tile';

const Board = () => {
  const gameBoard = useSelector(state => state.board)

  return (
    <div>
      {gameBoard.map((row, x) => {
        return (
          <div className="row">
            {row.map((tile, y) => {
              return <Tile title={tile} key={`${x}${y}`} row={x} col={y}/>
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Board;