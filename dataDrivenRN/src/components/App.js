import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from './SearchBar';
import DealDetail from './DealDetail';
import DealList from './DealList';
import API from '../api';

class App extends React.Component {

  state = {
    deals: [],
    dealsFromSearch: [],
    currentDealId:''
  }

  async componentDidMount() {
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

    this.setState({ dealsFromSearch });
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
          <SearchBar searchDeals={this.searchDeals} />
          <DealList deals={dealsToDisplay} onItemPress={this.setCurrentDeal} />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Purpose Driven Market</Text>
      </View>
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
