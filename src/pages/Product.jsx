import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById, addProductCart } from '../services/api';

export default class Product extends Component {
  state = {
    title: '',
    thumbnail: '',
    price: 0,
    evaluation: '0',
    email: '',
    detailEvaluation: '',
    isValid: true,
    listEvaluation: [],
    id: '',
  };

  componentDidMount() {
    this.fetchDetailsProduct();
    this.getEvaluationLocalStorage();
  }

  getEvaluationLocalStorage = () => {
    const { match: { params: { id } } } = this.props;
    const listEvaluation = JSON.parse(localStorage.getItem(id)) || [];
    this.setState({
      listEvaluation,
    });
  };

  fetchDetailsProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const { title, thumbnail, price } = await getProductById(id);
    this.setState({
      title,
      thumbnail,
      price,
      id,
    });
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  setEvaluationLocalStorage = () => {
    const { listEvaluation, id } = this.state;
    localStorage.setItem(id, JSON.stringify(listEvaluation));
  };

  setListEvaluation = () => {
    const { email, evaluation, detailEvaluation, listEvaluation } = this.state;
    const infoEvaluation = {
      email,
      evaluation,
      detailEvaluation,
    };
    const list = listEvaluation;
    list.push(infoEvaluation);
    this.setState({
      listEvaluation: list,
      email: '',
      evaluation: '0',
      detailEvaluation: '',
    }, () => {
      this.setEvaluationLocalStorage();
    });
  };

  handleClick = () => {
    const { email, evaluation } = this.state;
    const reg = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const isEmailValid = reg.test(email);
    if (evaluation !== '0' && isEmailValid) {
      this.setState({
        isValid: false,
      }, () => {
        this.setListEvaluation();
      });
    } else {
      this.setState({
        isValid: true,
      });
    }
  };

  render() {
    const {
      title,
      price, thumbnail, quantity, email, evaluation, detailEvaluation,
      isValid,
      listEvaluation, id } = this.state;
    return (
      <div>
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
            className="btn btn-success"
            name={ title }
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => {
              addProductCart(id, title, price, thumbnail);
            } }
          >
            Adicionar ao carrinho
          </button>
          <span>{ quantity }</span>
        </div>
        <form>
          <label
            htmlFor="email"
          >
            <input
              data-testid="product-detail-email"
              type="email"
              name="email"
              id="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <div>
            <input
              checked={ evaluation === '1' }
              type="radio"
              name="evaluation"
              value="1"
              onChange={ this.handleChange }
              data-testid="1-rating"
            />
            <input
              checked={ evaluation === '2' }
              type="radio"
              name="evaluation"
              value="2"
              onChange={ this.handleChange }
              data-testid="2-rating"
            />
            <input
              checked={ evaluation === '3' }
              type="radio"
              name="evaluation"
              value="3"
              onChange={ this.handleChange }
              data-testid="3-rating"
            />
            <input
              checked={ evaluation === '4' }
              type="radio"
              name="evaluation"
              value="4"
              onChange={ this.handleChange }
              data-testid="4-rating"
            />
            <input
              checked={ evaluation === '5' }
              type="radio"
              name="evaluation"
              value="5"
              onChange={ this.handleChange }
              data-testid="5-rating"
            />
          </div>
          <textarea
            name="detailEvaluation"
            cols="30"
            rows="10"
            onChange={ this.handleChange }
            value={ detailEvaluation }
            data-testid="product-detail-evaluation"
          />
          <button
            data-testid="submit-review-btn"
            type="button"
            onClick={ this.handleClick }
          >
            Enviar Avaliação
          </button>
        </form>
        {
          isValid && <p data-testid="error-msg">Campos inválidos</p>
        }
        {
          listEvaluation.map((e) => (
            <div key={ e.email }>
              <p data-testid="review-card-email">
                { e.email }
              </p>
              <p data-testid="review-card-rating">
                { e.evaluation }
              </p>
              <p data-testid="review-card-evaluation">
                { e.detailEvaluation }
              </p>
            </div>
          ))
        }
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
