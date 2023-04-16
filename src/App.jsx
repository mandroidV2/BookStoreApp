import React from 'react';
import { Provider } from 'react-redux';
import Navigator from '@navigator/index';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
        <Navigator />
    </Provider>
  );
}

export default App;
