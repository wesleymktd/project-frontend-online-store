import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CardFinish from './CardFinish';

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
    estado: '',
    Pay: '',
    // validate: false,
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
    this.setState({
      [name]: value,
    }, () => {
      const {
        nomeCompleto,
        email,
        CPF,
        telefone,
        CEP,
        endereço,
        complemento,
        numero,
        cidade,
        estado,
        Pay,
      } = this.state;
      const validate = nomeCompleto.length > 0 && email.length > 0
            && CPF.length > 0 && telefone.length > 0 && CEP.length > 0
            && endereço.length > 0 && complemento.length > 0
            && numero.length > 0 && cidade.length > 0
            && estado.length > 0 && Pay.length > 0;
      this.setState({ validate });
    });
  };

  onClickButton = () => {
    // const {
    //   nomeCompleto,
    //   email,
    //   CPF,
    //   telefone,
    //   CEP,
    //   endereço,
    //   complemento,
    //   numero,
    //   cidade,
    //   estado,
    //   Pay,
    // } = this.state;
    // const validate = nomeCompleto.length === 0 || email.length === 0
    // || CPF.length === 0 || telefone.length === 0 || CEP.length === 0
    // || endereço.length === 0 || complemento.length === 0
    // || numero.length === 0 || cidade.length === 0
    // || estado.length === 0 || Pay.length === 0;
    localStorage.setItem('cart', JSON.stringify([]));
  };

  render() {
    const {
      itensCarrinho,
      nomeCompleto,
      email,
      CPF,
      telefone,
      CEP,
      endereço,
      complemento,
      numero,
      cidade,
      validate,
    } = this.state;
    return (
      <div>
        <h1>Finalize suas compras!</h1>
        {
          itensCarrinho.map((item) => (<CardFinish
            { ...item }
            key={ item.id }
          />))
        }
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
                // pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                id="cpf"
                title="000.000.000-00"
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
                // pattern="([0-9]{2})[0-9]{5}-[0-9]{4}"
                placeholder="Format: (xx) XXXXX-XXXX"
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

            <select
              className="form-select"
              id="estado"
              name="estado"
              onChange={ this.onInputChange }
            >
              <option selected>Selecione seu estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
              <option value="EX">Estrangeiro</option>
            </select>

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

            <label
              className="form-check-label"
              htmlFor="Elo"
              style={ { display: 'flex' } }
            >
              <input
                name="Pay"
                className="form-check-input"
                value="Elo"
                id="Elo"
                type="radio"
                data-testid="elo-payment"
                onChange={ this.onInputChange }
              />
              Elo
            </label>
            {
            !validate && <p data-testid="error-msg">Campos inválidos</p>
            }
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
