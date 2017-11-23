import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { priceDisplay } from '../utils';

class DealDetail extends React.Component {

  static propTypes = {
    initialDealData: PropTypes.object.isRequired
  }

  handlePress = () => {
    console.log(this.props.deal.key);
  }

  render() {
    const { deal } = this.props;
    return(
      <TouchableOpacity style={styles.deal} onPress={this.handlePress}>
        <Image style={styles.image} source={{uri: deal.media[0]}} />

        <View style={styles.info}>
          <Text style={styles.title}>{deal.title}</Text>

          <View style={styles.footer}>
            <Text style={styles.cause}>{deal.cause.name}</Text>
            <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
          </View>

        </View>
        <Text>Text....</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 12,
    marginVertical: 12,
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
    borderTopWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  }
});

export default DealDetail;
