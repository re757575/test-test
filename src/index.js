import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import configureStore from './store/configureStore';
import App from './components/App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

import { install, applyUpdate } from 'offline-plugin/runtime';

install({
  onUpdateReady: () => applyUpdate()
});