import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { title, thumbnail, price, id, quantidade } = this.props;
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
            data-testid="shopping-cart-product-name"
            className="card-title"
          >
            { title }
          </h5>
          <p className="card-text">{ `R$: ${price}` }</p>
          <span data-testid="shopping-cart-product-quantity">{ quantidade + 1 }</span>
        </div>
        <Link
          data-testid="product-detail-link"
          to={ `product/${id}` }
        >
          Teste
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  quantidade: PropTypes.number.isRequired,
};
