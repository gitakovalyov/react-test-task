import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import Store from './store';
import { Provider } from 'react-redux';

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);