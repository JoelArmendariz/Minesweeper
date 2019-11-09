import React from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const restartGame = () => {
    console.log('restart')
  }

  return (
    <div className="header">
      <div onClick={restartGame} className="smiley"></div>
    </div>
  )
}

export default Header;