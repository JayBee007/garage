import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/Game';

const Index = () => (
  <Game challengeSize={6} challengeRange={[2, 9]} initialSeconds={10} />
);


ReactDOM.render(<Index />, document.getElementById('root'));
