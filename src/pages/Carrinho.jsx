import React, { Component } from 'react';
import ItemCart from '../components/ItemCart';

export default class Carrinho extends Component {
  state = {
    cart: [],
    quantidade: 1,
  };

  componentDidMount() {
    this.getCartLocalStorage();
  }

  getCartLocalStorage = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    this.setState({
      cart,
    });
  };

  incrementItem = (event) => {
    const { quantidade } = this.state;
    this.setState((prev) => ({ quantidade: prev.quantidade + 1 }), () => {
      const storage = JSON.parse(localStorage.getItem('cart'));
      const itemClicado = storage.filter((itemStorage) => (
        event.target.name === itemStorage.title));
      itemClicado[0].quantity += quantidade;
      // localStorage.setItem('cart', JSON.stringify(itemClicado));
    });
  };

  // decrementItem = (event) => {
  //   const { cart, quantidade } = this.state;
  //   this.setState((prev) => ({ quantidade: prev.quantidade - 1 }));
  // };

  render() {
    const { cart } = this.state;
    return (
      <div>
        {
          !cart ? (
            <p
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </p>)
            : (
              cart.map((item) => (
                <ItemCart
                  { ...item }
                  incrementItem={ this.incrementItem }
                  decrementItem={ this.decrementItem }
                  removeItem={ this.removeItem }
                  key={ item.id }
                />
              ))
            )
        }
      </div>

    );
  }
}
