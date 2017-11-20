import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import RandomNumber from './RandomNumber';

class Game extends React.Component {
  static propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
  };

  state = {
    selectedIds: [],
  }

  randomNumbers = Array.from({length: this.props.randomNumberCount}).map(() => 1 + Math.floor(10 * Math.random()));

  target = this.randomNumbers
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

    gameStatus = () => {
      const sum = this.state.selectedIds.reduce((acc,curr) => {
        return acc + this.randomNumbers[curr];
      },0);

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
      const gameStatus = this.gameStatus();
      return (
        <View style={styles.container}>
          <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>{this.target}</Text>
          <View style={styles.randomNumberContainer}>
            {this.randomNumbers.map((randomNumber, index) => (
              <RandomNumber
                key={index}
                id={index}
                number={randomNumber}
                isDisabled={this.isNumberSelected(index) || gameStatus !== 'PLAYING'}
                onPress={this.selectNumber}/>
            ))}
          </View>
          <Text>{gameStatus}</Text>
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
