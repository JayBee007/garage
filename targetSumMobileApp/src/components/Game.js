import React from 'react';
import PropTypes from 'prop-types';
import shuffle from 'lodash.shuffle';
import { View, Text, Button, StyleSheet } from 'react-native';

import RandomNumber from './RandomNumber';

class Game extends React.Component {
  static propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
    initialSeconds: PropTypes.number.isRequired,
    onPlayAgain: PropTypes.func.isRequired,
  };

  state = {
    selectedIds: [],
    remainingSeconds: this.props.initialSeconds,
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        return {
          remainingSeconds: prevState.remainingSeconds - 1
        };
      }, () => {
        if(this.state.remainingSeconds === 0) {
          clearInterval(this.intervalId);
        }
      });
    },1000);
  }

  componentWillUpdate(nextprops, nextstate) {
    if(nextstate.selectedIds !== this.selectedIds || nextprops.remainingSeconds === 0) {
      this.gameStatus = this.calcGameStatus(nextstate);
      if(this.gameStatus !== 'PLAYING') {
        clearInterval(this.intervalId);
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  randomNumbers = Array.from({length: this.props.randomNumberCount}).map(() => 1 + Math.floor(10 * Math.random()));

  shuffleRandomNumbers = shuffle(this.randomNumbers);

  target = this.shuffleRandomNumbers
    .slice(0, this.props.randomNumberCount - 2)
    .reduce((acc,curr) => {
      return acc+curr;
    },0);

    isNumberSelected = (numberIndex) => {
      return this.state.selectedIds.indexOf(numberIndex) >= 0;
    }

    selectNumber = (numberIndex) => {
      this.setState((prevState) => ({
        selectedIds: [...prevState.selectedIds, numberIndex],
      }));
    }

    calcGameStatus = (nextstate) => {
      const sum = nextstate.selectedIds.reduce((acc,curr) => {
        return acc + this.shuffleRandomNumbers[curr];
      },0);

      if(nextstate.remainingSeconds === 0) {
        return 'LOST';
      }

      if(sum < this.target) {
        return 'PLAYING';
      }

      if(sum === this.target) {
        return 'WON';
      }

      if(sum > this.target) {
        return 'LOST';
      }
    }

    render() {
      const gameStatus = this.gameStatus;
      return (
        <View style={styles.container}>
          <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>{this.target}</Text>
          <View style={styles.randomNumberContainer}>
            {this.shuffleRandomNumbers.map((randomNumber, index) => (
              <RandomNumber
                key={index}
                id={index}
                number={randomNumber}
                isDisabled={this.isNumberSelected(index) || gameStatus !== 'PLAYING'}
                onPress={this.selectNumber}/>
            ))}
          </View>
          {gameStatus !== 'PLAYING' && (<Button title='Play Again' onPress={this.props.onPlayAgain} />)}
          <Text>{this.state.remainingSeconds}</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
    paddingTop: 30,
  },
  target: {
    fontSize: 50,
    marginHorizontal: 50,
    textAlign: 'center',
  },
  randomNumberContainer: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  randomNumber: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    textAlign: 'center',
    fontSize: 35
  },
  STATUS_PLAYING: {
    backgroundColor: '#bbb',
  },
  STATUS_WON: {
    backgroundColor: 'green',
  },
  STATUS_LOST: {
    backgroundColor: 'red',
  }
});

export default Game;
