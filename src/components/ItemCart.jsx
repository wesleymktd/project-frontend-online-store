import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ItemCart extends Component {
  render() {
    const { title,
      thumbnail,
      price,
      quantity,
      incrementItem,
      decrementItem,
      removeItem,
    } = this.props;
    return (
      <div
        style={ { width: '15rem', margin: '5px' } }
        className="card"
        data-testid="product"
      >
        <img
          className="card-img-top"
          src={ thumbnail }
          alt={ title }
        />
        <div
          style={ { padding: '10px' } }
        >
          <h5
            className="card-title"
            data-testid="shopping-cart-product-name"
          >
            { title }
          </h5>
          <p className="card-text">{ `R$: ${price}` }</p>
          <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
        </div>
        <button
          name={ title }
          onClick={ incrementItem }
          data-testid="product-increase-quantity"
          className="btn btn-outline-dark btn-sm"
          type="button"
        >
          +
        </button>
        <button
          onClick={ decrementItem }
          data-testid="product-decrease-quantity"
          className="btn btn-outline-dark btn-sm"
          type="button"
        >
          -
        </button>
        <button
          onClick={ removeItem }
          data-testid="remove-product"
          className="btn btn-danger"
          type="button"
        >
          Excluir item
        </button>
      </div>
    );
  }
}

ItemCart.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  incrementItem: PropTypes.func.isRequired,
  decrementItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

ItemCart.defaultProps = {
  quantity: 0,
};
