import { Themeable } from '@gmsoft/tt-sdk';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import WhatToEat from './components/WhatToEat';
import { Mode } from './enums/Mode';
import { stateContainer } from './utils';

const App = () => (
  <Provider store={stateContainer._store}>
    <Themeable djcGatewayBaseUrl={process.env.REACT_APP_DJC_GATEWAY_BASE} colorScheme="light">
      <Router history={stateContainer._history}>
        <WhatToEat defaultMode={Mode.DRAW} />
      </Router>
    </Themeable>
  </Provider>
);

export default App;
