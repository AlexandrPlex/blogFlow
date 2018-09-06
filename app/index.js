// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './app.global.css';
import { store } from './store';
import { Routers } from './routers';

const documentGetElementByIdIsEnable = document.getElementById('root');
if (documentGetElementByIdIsEnable) {
  render(
    <Provider store={store}>
      <Routers />
    </Provider>,
    documentGetElementByIdIsEnable
  );
}
