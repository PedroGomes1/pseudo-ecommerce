import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import 'react-native-gesture-handler';

import React from 'react';
import AppContainer from './hooks';
import Routes from './routes';

const App: React.FC = () => (
  <AppContainer>
    <Routes />
  </AppContainer>
);

export default App;
