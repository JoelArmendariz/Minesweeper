import React from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { restart } from '../actions/index';

const Header = () => {
  const dispatch = useDispatch();

  const restartGame = () => {
    console.log('first level')
    dispatch(restart());
  }

  return (
    <div className="header">
      <div onClick={restartGame} className="smiley"></div>
    </div>
  )
}

export default Header;