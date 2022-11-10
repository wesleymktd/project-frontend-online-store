import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ProductCard extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
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
          <h5 className="card-title">{ title }</h5>
          <p className="card-text">{ `R$: ${price}` }</p>
        </div>

      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
