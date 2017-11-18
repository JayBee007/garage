import React from 'react';
import _ from 'lodash';

import Number from '../Number';
import './game.css';

const randomNumberBetween = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

class Game extends React.Component {

  static bgColors = {
    playing: '#ccc',
    won: 'green',
    lost: 'red'
  }

  state = {
    gameStatus: 'new',
    remainingSeconds: this.props.initialSeconds,
    selectedIds: []
  }

  isNumberAvailable = (numberIndex) => this.state.selectedIds.indexOf(numberIndex) === -1;

  challengeNumbers = Array.from({length: this.props.challengeSize}).map(() => randomNumberBetween(...this.props.challengeRange));

  target = _.sampleSize(this.challengeNumbers, this.props.challengeSize - 2).reduce ((acc, curr) => acc + curr, 0);

  startGame = () => {
    this.setState({ gameStatus: 'playing'}, () => {
      this.intervalId = setInterval(() => {
        this.setState((prevState) => {
          const newRemainingSeconds = prevState.remainingSeconds - 1;
          if (newRemainingSeconds === 0 ) {
            clearInterval(this.intervalId);
            return { gameStatus: 'lost', remainingSeconds: 0};
          }
          return { remainingSeconds: newRemainingSeconds };
        });
      }, 1000);
    });
  };

  render() {
    return (
      <div className="game">
        <div className="target"
              style={{backgroundColor: Game.bgColors[this.state.gameStatus]}}>
          {this.state.gameStatus === 'new' ? '?' : this.target}
        </div>
        <div className="challenge-numbers">
          {this.challengeNumbers.map((value, index) =>
            <Number
              key={index}
              value={this.state.gameStatus === 'new' ? '?' : value}
              clickable={this.isNumberAvailable(index)}/>
          )}
        </div>
        <div className="footer">
          {this.state.gameStatus === 'new' ? (
            <button>Start</button>
          ) : (
            <div className="timer-value">10</div>
          )}
          {['won', 'lost'].includes(this.state.gameStatus) && (
            <button>Play Again</button>
          )}
        </div>
      </div>
    );
  };
}

export default Game;
