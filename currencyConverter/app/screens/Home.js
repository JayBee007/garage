import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';

class Home extends React.Component {
  handlePressBaseCurrency = () => 'base';

  handlePressQuoteCurrency = () => 'quote';

  handlePressQuoteCurrency = text => text;

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          editable
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          editable={false}
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          defaultValue={TEMP_QUOTE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
        />
      </Container>
    );
  }
}

export default Home;
