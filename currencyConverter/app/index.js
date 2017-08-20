import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#fff',
  $border: '#c2c2c2',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',
});

export default () => <Home />;
