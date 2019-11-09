import React from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { placeTile } from '../actions/index';

import Header from './Header'
import Board from './Board'
import Border from './Border'
import Left from './Left'

const App = () => {
  let arr = [0,0,0,0,0,0,0,0,0,0];

  const board = useSelector(state => state.board)
  const dispatch = useDispatch();

  return (
    <div className="board-container">
      <Header />
      <div className="border-container">
        {arr.map(tile => {
          return <Border />
        })}
      </div>
      <Board />
    </div>
  )

}

export default App;