import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ItemCart extends Component {
  render() {
    const { title,
      thumbnail,
      price,
      quantity,
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
          <p>
            Quantidade de produtos:
            <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
          </p>
        </div>
      </div>
    );
  }
}

ItemCart.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
};

ItemCart.defaultProps = {
  quantity: 0,
};
