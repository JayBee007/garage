import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  Animated,
  PanResponder,
  Dimensions,
  Linking
} from 'react-native';

import { priceDisplay } from '../utils';
import API from '../api';

class DealDetail extends React.Component {

  imageXPos = new Animated.Value(0);

  imagePanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gs) => {
      this.imageXPos.setValue(gs.dx);
    },
    onPanResponderRelease: (evt, gs) => {
      this.width = Dimensions.get('window').width;
      if(Math.abs(gs.dx) > this.width*0.4) {
        const direction = Math.sign(gs.dx);

        Animated.timing(this.imageXPos, {
          toValue: direction * this.width,
          duration: 250,
        }).start(() => this.handleSwipe(-1 * direction));
      }else {
        Animated.spring(this.imageXPos, {
          toValue:0
        }).start();
      }
    }
  });

  handleSwipe = (indexDirection) => {
    if(!this.state.deal.media[this.state.currentImage + indexDirection]) {
      Animated.spring(this.imageXPos, {
        toValue: 0,
      }).start();
      return;
    }

    this.setState((prevState) => ({
      currentImage: prevState.currentImage + indexDirection
    }), () => {
      this.imageXPos.setValue( indexDirection *this.width);
      Animated.spring(this.imageXPos, {
        toValue:0,
      }).start();
    });
  }

  state = {
    deal: this.props.initialDealData,
    currentImage: 0,
  }

  static propTypes = {
    initialDealData: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired
  }

  async componentDidMount() {
    const fullDeal = await API.getDealDetails(this.state.deal.key);
    this.setState({deal: fullDeal});
  }

  openUrl = () => {
    Linking.openURL(this.state.deal.url);
  }

  render() {
    const { deal } = this.state;
    return(
      <ScrollView>
        <TouchableOpacity onPress={this.props.onBack}>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <Animated.Image
          {...this.imagePanResponder.panHandlers}
          source={{ uri: deal.media[this.state.currentImage] }}
          style={[{ left: this.imageXPos },styles.image]} />
        <View style={styles.detail}>
          <View>
            <Text style={styles.title}>{deal.title}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.info}>
              <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
              <Text style={styles.cause}>{deal.cause.name}</Text>
            </View>
            {deal.user && (
              <View style={styles.user}>
                <Image source={{ uri: deal.user.avatar }} style={styles.avatar} />
                <Text>{deal.user.name}</Text>
              </View>
            )}
          </View>
          <View style={styles.description}>
            <Text>{deal.description}</Text>
          </View>
        </View>
        <Button title='Buy this deal!' onPress={this.openUrl} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    marginBottom: 5,
    color: '#22f',
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 16,
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: 'rgba(237, 149, 45, 0.4)',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  },
  info: {
    alignItems: 'center',
  },
  user: {
    alignItems: 'center',
  },
  cause: {
    marginVertical: 10,
  },
  price: {
    fontWeight: 'bold'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  description: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderStyle: 'dotted',
    margin: 10,
    padding: 10,
  },
});

export default DealDetail;
