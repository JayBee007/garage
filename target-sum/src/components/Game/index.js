import React from 'react';

import Number from '../Number';
import './game.css';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="target">42</div>
        <div className="challenge-numbers">
          <Number value={8}/>
          <Number value={5}/>
          <Number value={12}/>
          <Number value={13}/>
          <Number value={5}/>
          <Number value={13}/>
        </div>
        <div className="footer">
          <div className="timer-value">10</div>
          <button>Start</button>
        </div>
      </div>
    );
  };
}

export default Game;
