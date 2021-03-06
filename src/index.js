import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/reducers.js'

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
