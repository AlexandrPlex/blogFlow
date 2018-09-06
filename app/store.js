/* eslint-disable no-underscore-dangle */
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore, Store } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { History } from 'history';

import reducers from './reducers';

export const configureStore = (initialState: {}, history: History): Store<any> => {
  // Enhancer
  const enhancer = applyMiddleware(routerMiddleware(history), thunk, logger);

  // Store
  const store = createStore(connectRouter(history)(reducers), initialState, enhancer);

  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextReducers = require('./reducers').reducers;
    store.replaceReducer(connectRouter(history)(nextReducers));
  });

  return store;
};
