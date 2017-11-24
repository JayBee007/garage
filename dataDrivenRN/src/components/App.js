import React from 'react';
import { View, Text, StyleSheet, Animated, Easing, Dimensions } from 'react-native';

import SearchBar from './SearchBar';
import DealDetail from './DealDetail';
import DealList from './DealList';
import API from '../api';

class App extends React.Component {

  titleXPos = new Animated.Value(0);

  state = {
    deals: [],
    dealsFromSearch: [],
    currentDealId: null,
    activeSearchTerm: '',
  }

  animateTitle = (direction = 1) => {

    const width = Dimensions.get('window').width - 155;
    Animated.spring(
      this.titleXPos,
      {
        toValue: direction * (width / 2),
        duration: 1000,
        easing: Easing.ease,
      }
    ).start(({ finished }) => {
      if(finished) {
        this.animateTitle(-1 * direction);
      }
    });
  }

  async componentDidMount() {
    this.animateTitle();
    const deals = await API.getInitialDeals();

    this.setState(() => {
      return { deals };
    });
  }

  searchDeals = async (searchTerm) => {
    let dealsFromSearch = [];

    if(searchTerm) {
      dealsFromSearch = await API.getDealsSearchResults(searchTerm);
    }

    this.setState({ dealsFromSearch, activeSearchTerm: searchTerm });
  }

  setCurrentDeal = (dealId) => {
    this.setState({currentDealId: dealId});
  }

  unSetCurrentDeal = () => {
    this.setState({ currentDealId: null });
  }

  currentDeal = () => {
    return this.state.deals.find(
      (deal) => deal.key === this.state.currentDealId
    );
  }

  render() {
    if(this.state.currentDealId) {
      return (
        <View style={styles.main}>
          <DealDetail onBack={this.unSetCurrentDeal} initialDealData={this.currentDeal()} />
        </View>
      );
    }

    const dealsToDisplay =
      this.state.dealsFromSearch.length > 0
        ? this.state.dealsFromSearch
        : this.state.deals;

    if(this.state.deals.length > 0 ) {
      return (
        <View style={styles.main}>
          <SearchBar searchDeals={this.searchDeals} initialSearchTerm={this.state.activeSearchTerm} />
          <DealList deals={dealsToDisplay} onItemPress={this.setCurrentDeal} />
        </View>
      );
    }

    return (
      <Animated.View style={[{left: this.titleXPos}, styles.container]}>
        <Text style={styles.header}>BookSale</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 38
  },
  main: {
    marginTop:30
  }
});

export default App;
