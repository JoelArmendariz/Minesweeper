import React from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { placeTile, started } from '../actions/index';
import classNames from 'classnames'

class Tile extends React.Component {
  constructor (props) {
    super(props);

    this.buildBoard = this.buildBoard.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  buildBoard (board) {

    let r = (n) => {
      if (n === 10) {
        return;
      }

      let randomRow = Math.floor(Math.random() * (10 - 0) + 0);
      let randomCol = Math.floor(Math.random() * (10 - 0) + 0);

      board[randomRow][randomCol] = 'bomb'

      r(n+1)
    }
    r(0);

  }

  handleClick(event) {
    if (this.props.isFirst) {
      this.buildBoard(this.props.board);
      this.props.dispatch( placeTile(this.props.row, this.props.col, this.props.board) )
      this.props.dispatch( started() )

    }
    this.props.dispatch( placeTile(this.props.row, this.props.col, this.props.board) )
    console.log(event.target)
  }

  render() {
    let tileValue = this.props.board[this.props.row][this.props.col];
      if (tileValue !== 'bomb' && tileValue) {
        if(tileValue === 1) {
          return <div className='tile one' onClick={this.handleClick}></div>
        } else if(tileValue === 2) {
          return <div className='tile two' onClick={this.handleClick}></div>
        } else if(tileValue === 3) {
          return <div className='tile three' onClick={this.handleClick}></div>
        } else if(tileValue === 4) {
          return <div className='tile four' onClick={this.handleClick}></div>
        } else if(tileValue === 5) {
          return <div className='tile five' onClick={this.handleClick}></div>
        } else {
          return <div className='tile uncovered' onClick={this.handleClick}>{tileValue > 0 ? tileValue : null}</div>
        }
      } else {
        return <div className='tile covered' onClick={this.handleClick}></div>
      }
  }
}

const mapStateToProps = (state) => {
  return ({
    isFirst: state.isFirst,
    board: state.board
  })
}

export default connect(mapStateToProps)(Tile);