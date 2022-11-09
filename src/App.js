import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Carrinho from './pages/Carrinho';
import Main from './pages/Main';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/cart" component={ Carrinho } />
      </Switch>
    );
  }
}
