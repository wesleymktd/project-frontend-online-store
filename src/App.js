import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import FinalizarCompras from './components/FinalizarCompras';
import Carrinho from './pages/Carrinho';
import Main from './pages/Main';
import Product from './pages/Product';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/cart" component={ Carrinho } />
        <Route exact path="/product/:id" component={ Product } />
        <Route exact path="/checkout" component={ FinalizarCompras } />
      </Switch>
    );
  }
}
