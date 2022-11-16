import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemCart from '../components/ItemCart';

export default class Carrinho extends Component {
  state = {
    cart: [],
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
    const { cart } = this.state;
    const itemClick = event.target.name;
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const a = cart.find((e) => e.title === itemClick);
    const index = currentCart.findIndex((item) => item.title === itemClick);
    a.quantity += 1;
    cart[index].quantity = a.quantity;
    this.setState({ cart });
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  decrementItem = (event) => {
    const { cart } = this.state;
    const itemClick = event.target.name;
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const a = cart.find((e) => e.title === itemClick);
    const index = currentCart.findIndex((item) => item.title === itemClick);
    if (cart[index].quantity > 1) {
      a.quantity -= 1;
      cart[index].quantity = a.quantity;
      this.setState({ cart });
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  removeItem = (event) => {
    const { cart } = this.state;
    const itemClick = event.target.name;
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    // const a = cart.find((e) => e.title === itemClick);
    const index = currentCart.findIndex((item) => item.title === itemClick);
    cart.splice(index, 1);
    this.setState({ cart });
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  render() {
    const { cart } = this.state;
    return (
      <div>
        {
          (!cart || !cart.length > 0) ? (
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
        <Link
          className="btn btn-primary"
          data-testid="checkout-products"
          to="/checkout"
        >
          Finalizar Compras
        </Link>
      </div>

    );
  }
}
