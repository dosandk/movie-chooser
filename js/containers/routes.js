import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './app';
import Counter from './counter';
import TestComponent from '../components/test';
import LoginContainer from '../containers/login';

const Routes = () => {
  return (
    <div>
      <Route component={ App } />
      <Switch>
        <Route path='/test' component={ TestComponent } />
        <Route path='/counter' component={ Counter } />
        <Route path='/login' component={ LoginContainer } />
      </Switch>
    </div>
  );
};

export default Routes;
