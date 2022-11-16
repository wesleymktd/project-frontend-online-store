import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardFinish from './CardFinish';
import Select from './Select';

export default class FinalizarCompras extends Component {
  state = {
    itensCarrinho: [],
    nomeCompleto: '',
    email: '',
    CPF: '',
    telefone: '',
    CEP: '',
    endereço: '',
    complemento: '',
    numero: '',
    cidade: '',
    Pay: '',
    validate: true,
  };

  componentDidMount() {
    this.attEstado();
  }

  attEstado = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    this.setState({ itensCarrinho: currentCart });
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onClickButton = () => {
    const { nomeCompleto, email, CPF, telefone, CEP, endereço, Pay } = this.state;
    const { history } = this.props;
    if (nomeCompleto.length > 0 && email.length > 0 && CPF.length > 0
      && telefone.length > 0 && CEP.length > 0 && endereço.length > 0 && Pay.length > 0) {
      this.setState({ validate: true }, () => {
        localStorage.setItem('cart', JSON.stringify([]));
        history.push('/');
      });
    } else {
      this.setState({ validate: false });
    }
  };

  render() {
    const {
      itensCarrinho, nomeCompleto, email, CPF, telefone, CEP, endereço, complemento,
      numero, cidade, validate } = this.state;
    return (
      <div>
        <h1>Finalize suas compras!</h1>
        { itensCarrinho.map((item) => (<CardFinish { ...item } key={ item.id } />)) }
        <form>
          <div>
            <br />
            <h4>Informações do comprador</h4>
            <label className="form-label" htmlFor="name">
              Nome completo
              <input
                value={ nomeCompleto }
                data-testid="checkout-fullname"
                className="form-control"
                id="name"
                name="nomeCompleto"
                onChange={ this.onInputChange }
              />
            </label>
            <label className="form-label" htmlFor="cpf">
              CPF
              <input
                value={ CPF }
                type="text"
                className="form-control"
                id="cpf"
                data-testid="checkout-cpf"
                name="CPF"
                onChange={ this.onInputChange }
              />
            </label>
            <label className="form-label" htmlFor="tel">
              Telefone
              <input
                value={ telefone }
                type="tel"
                className="form-control"
                id="number"
                data-testid="checkout-phone"
                name="telefone"
                onChange={ this.onInputChange }
              />
            </label>
            <label className="form-label" htmlFor="email">
              Email
              <input
                value={ email }
                data-testid="checkout-email"
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={ this.onInputChange }
              />
            </label>
            <label className="form-label" htmlFor="cep">
              CEP
              <input
                value={ CEP }
                type="text"
                className="form-control"
                id="cep"
                data-testid="checkout-cep"
                name="CEP"
                onChange={ this.onInputChange }
              />
            </label>
            <label className="form-label" htmlFor="location">
              Endereço
              <input
                value={ endereço }
                type="text"
                className="form-control"
                id="location"
                data-testid="checkout-address"
                name="endereço"
                onChange={ this.onInputChange }
              />
            </label>
            <label className="form-label" htmlFor="complemento">
              Complemento
              <input
                value={ complemento }
                type="text"
                className="form-control"
                id="complemento"
                name="complemento"
                onChange={ this.onInputChange }
              />
            </label>
            <label className="form-label" htmlFor="number">
              Numero
              <input
                value={ numero }
                type="number"
                className="form-control"
                id="number"
                name="numero"
                onChange={ this.onInputChange }
              />
            </label>
            <label className="form-label" htmlFor="cidade">
              Cidade
              <input
                value={ cidade }
                type="text"
                className="form-control"
                id="cidade"
                name="cidade"
                onChange={ this.onInputChange }
              />
            </label>
            <Select onInputChange={ this.onInputChange } />
          </div>
          <div>
            <br />
            <h4>Selecione o método de pagamento</h4>
            <label
              className="form-check-label"
              htmlFor="Boleto"
              style={ { display: 'flex' } }
            >
              <input
                className="form-check-input"
                value="Boleto"
                id="Boleto"
                name="Pay"
                type="radio"
                data-testid="ticket-payment"
                onChange={ this.onInputChange }
              />
              Boleto
            </label>
            <label
              className="form-check-label"
              htmlFor="Visa"
              style={ { display: 'flex' } }
            >
              <input
                className="form-check-input"
                value="Visa"
                name="Pay"
                id="Visa"
                type="radio"
                data-testid="visa-payment"
                onChange={ this.onInputChange }
              />
              Visa
            </label>
            <label
              className="form-check-label"
              htmlFor="MasterCard"
              style={ { display: 'flex' } }
            >
              <input
                name="Pay"
                className="form-check-input"
                value="MasterCard"
                id="MasterCard"
                type="radio"
                data-testid="master-payment"
                onChange={ this.onInputChange }
              />
              MasterCard
            </label>
            <label className="form-check-label" htmlFor="E" style={ { display: 'flex' } }>
              <input
                name="Pay"
                className="form-check-input"
                value="Elo"
                id="E"
                type="radio"
                data-testid="elo-payment"
                onChange={ this.onInputChange }
              />
              Elo
            </label>
            { !validate && <p data-testid="error-msg">Campos inválidos</p> }
          </div>
          <button
            onClick={ this.onClickButton }
            data-testid="checkout-btn"
            className="btn btn-success"
            type="button"
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }
}
FinalizarCompras.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
