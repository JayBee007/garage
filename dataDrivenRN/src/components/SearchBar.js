import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet  } from 'react-native';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component {

  static propTypes = {
    searchDeals: PropTypes.func.isRequired,
  };

  state = {
    searchTerm: ''
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
