import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

export default class Product extends Component {
  state = {
    title: '',
    thumbnail: '',
    price: 0,
    quantidade: 0,
  };

  componentDidMount() {
    this.fetchDetailsProduct();
  }

  buttonDetails = () => {
    const KEY = 'product';
    const { match: { params: { id } } } = this.props;
    const { title, price, thumbnail, quantidade } = this.state;
    this.setState((prev) => ({
      quantidade: prev.quantidade + 1,
    }), () => {
      const newArray = [];
      const storage = { id, title, price, thumbnail, quantidade };
      newArray.push(storage);
      localStorage.setItem(KEY, JSON.stringify(newArray));
    });
  };

  fetchDetailsProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const { title, thumbnail, price } = await getProductById(id);
    this.setState({
      title,
      thumbnail,
      price,
      quantidade: 0,
    });
  };

  render() {
    const { title, price, thumbnail, quantidade } = this.state;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <img
            style={ { width: 45 } }
            className="imag1"
            src="https://cdn-icons-png.flaticon.com/512/126/126510.png"
            alt="Shopping Cart"
          />
        </Link>
        <div>
          <p data-testid="product-detail-name">{ title }</p>
          <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
          <p data-testid="product-detail-price">{ price }</p>
        </div>
        <button
          name={ title }
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.buttonDetails }
        >
          Adicionar ao carrinho
        </button>
        <span>{ quantidade }</span>
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
