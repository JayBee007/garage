import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_DATE = new Date();
const TEMP_CONVERSION_RATE = 0.7974;

class Home extends React.Component {
  handlePressBaseCurrency = () => console.log('base');

  handlePressQuoteCurrency = () => console.log('quote');

  handlePressQuoteCurrency = text => console.log(text);

  handleSwapCurrency = () => console.log('swap');

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
        <LastConverted
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
          date={TEMP_CONVERSION_DATE}
          conversionRate={TEMP_CONVERSION_RATE}
        />
        <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
      </Container>
    );
  }
}

export default Home;
