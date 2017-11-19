import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import RandomNumber from './RandomNumber';

class Game extends React.Component {
  static propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
  };

  state = {
    selectedNumbers: [],
  }

  randomNumbers = Array.from({length: this.props.randomNumberCount}).map(() => 1 + Math.floor(10 * Math.random()));

  target = this.randomNumbers
    .slice(0, this.props.randomNumberCount - 2)
    .reduce((acc,curr) => {
      return acc+curr;
    },0);

    isNumberSelected = (numberIndex) => {
      return this.state.selectedNumbers.indexOf(numberIndex) >= 0;
    }

    selectNumber = (numberIndex) => {
      this.setState((prevState) => ({
        selectedNumbers: [...prevState.selectedNumbers, numberIndex],
      }));
    }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.target}>{this.target}</Text>
          <View style={styles.randomNumberContainer}>
            {this.randomNumbers.map((randomNumber, index) => (
              <RandomNumber
                key={index}
                id={index}
                number={randomNumber}
                isDisabled={this.isNumberSelected(index)}
                onPress={this.selectNumber}/>
            ))}
          </View>

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
    backgroundColor: '#bbb',
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
  }
});

export default Game;
