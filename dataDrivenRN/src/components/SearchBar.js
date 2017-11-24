import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet  } from 'react-native';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component {

  static propTypes = {
    searchDeals: PropTypes.func.isRequired,
    initialSearchTerm: PropTypes.string.isRequired
  };

  state = {
    searchTerm: this.props.initialSearchTerm
  }

  searchDeals = (searchTerm) => {
    this.props.searchDeals(searchTerm);
    this.inputElem.blur();
  }

  debounceSearchDeals = debounce(this.props.searchDeals, 300);

  handleChange = (searchTerm) => {
    this.setState({ searchTerm }, () => {
      this.debounceSearchDeals(this.state.searchTerm);
    });
  };

  render() {
    return(
      <TextInput
        value={this.state.searchTerm}
        ref={(inputElem) => this.inputElem = inputElem}
        style={styles.input}
        placeholder="Search All Deals"
        onChangeText={this.handleChange}
      />
    );
  }
}

const styles= StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: 12,
  }
});

export default SearchBar;
