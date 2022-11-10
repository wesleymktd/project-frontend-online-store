import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';

export default class Carrinho extends Component {
  state = {
    itensLocalStorage: [],
  };

  componentDidMount() {
    this.recoverLocalStorage();
  }

  recoverLocalStorage = () => {
    const storage = localStorage.getItem('product');
    this.setState({ itensLocalStorage: JSON.parse(storage) });
  };

  render() {
    const { itensLocalStorage } = this.state;
    return (
      <div data-testid="shopping-cart-empty-message">
        {
          !itensLocalStorage ? (
            <p>Seu carrinho está vazio</p>
          ) : (
            itensLocalStorage.map((e) => (
              <ProductCard
                key={ e.id }
                title={ e.title }
                thumbnail={ e.thumbnail }
                price={ e.price }
                id={ e.id }
                quantidade={ e.quantidade }
              />
            ))
          )
        }
      </div>
    );
  }
}
