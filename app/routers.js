// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage } from './page/HomePage';
import { NotFoundPage } from './page/NotFoundPage';

export const Routers = () => <BrowserRouter>
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route component={NotFoundPage} />
  </Switch>
</BrowserRouter>;
