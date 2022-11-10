import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import * as api from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainCss.css';

export default class Main extends Component {
  state = {
    categories: [],
    searchInput: '',
    productsSearching: [],
  };

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  };

  SearchingProducts = async () => {
    const { searchInput } = this.state;
    const request = await api.getProductsFromCategoryAndQuery('', searchInput);
    const productsSearching = request.results;
    this.setState({
      productsSearching,
    });
  };

  handlerChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { categories, searchInput, productsSearching } = this.state;
    return (
      <div>
        <header className="container">
          <input
            className="form-group"
            type="text"
            value={ searchInput }
            name="searchInput"
            onChange={ this.handlerChange }
            data-testid="query-input"
          />
          <button
            className="btn btn-success"
            data-testid="query-button"
            type="button"
            onClick={ this.SearchingProducts }
          >
            Pesquisar
          </button>

          <Link data-testid="shopping-cart-button" to="/cart">
            <img
              style={ { width: 45 } }
              className="imag1"
              src="https://cdn-icons-png.flaticon.com/512/126/126510.png"
              alt="Shopping Cart"
            />
          </Link>
          <h2 className="lead" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </header>
        <main>
          <nav className="aside">
            <span>Categorias:</span>
            { categories.map((category) => (
              <div
                className="form-check"
                key={ category.id }
                data-testid="category"
              >
                <label
                  className="form-check-label"
                  htmlFor="category"
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="category"
                    id={ category.name }
                    value={ category.name }
                  />
                  { category.name }
                </label>
              </div>
            )) }
          </nav>
          <div className="products">
            {
              (productsSearching.length === 0)
                ? <span>Nenhum produto foi encontrado</span>
                : (productsSearching.map((product) => (
                  <ProductCard
                    key={ product.id }
                    { ...product }
                  />)))
            }
          </div>

        </main>
      </div>
    );
  }
}
// g
