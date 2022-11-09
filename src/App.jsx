import React, { Component } from 'react';
import * as api from './services/api';

export default class App extends Component {
  state = {
    categories: [],
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

  render() {
    const { categories } = this.state;
    return (
      <div className="App">
        <header>
          <input type="text" />
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </header>
        <section>
          <span>Categorias:</span>
          { categories.map((category) => (
            <label
              htmlFor="category"
              data-testid="category"
              key={ category.id }
            >
              <input
                type="radio"
                name="category"
                id={ category.name }
                value={ category.name }
              />
              { category.name }
            </label>)) }
        </section>
      </div>
    );
  }
}
