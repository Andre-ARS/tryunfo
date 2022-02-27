import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { BsFillXCircleFill } from 'react-icons/bs';

class Inputs extends Component {
  render() {
    const {
      formProps: {
        cardName,
        cardDescription,
        onInputChange,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        isSaveButtonDisabled,
        onSaveButtonClick,
        hasTrunfo,
      },
    } = this.props;

    return (
      <section className="inputs-container">
        <label htmlFor="card-name" className="label">
          Nome
          <br />
          <input
            type="text"
            id="card-name"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            className="input"
          />
        </label>
        <label htmlFor="description" className="label">
          Descrição
          <br />
          <textarea
            id="description"
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            cols="30"
            rows="10"
            className="input description"
          />
        </label>
        <label htmlFor="att-1" className="label">
          Attr 1
          <input
            type="number"
            id="att-1"
            name="cardAttr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            min="0"
            max="90"
            className="attr"
          />
        </label>
        <label htmlFor="att-2" className="label">
          Attr 2
          <input
            type="number"
            id="att-2"
            name="cardAttr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            min="0"
            max="90"
            className="attr"
          />
        </label>
        <label htmlFor="att-3" className="label">
          Attr 3
          <input
            type="number"
            id="att-3"
            name="cardAttr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            min="0"
            max="90"
            className="attr"
          />
        </label>
        <label htmlFor="image" className="label">
          Imagem
          <input
            type="text"
            id="image"
            name="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            className="input"
          />
        </label>
        <label htmlFor="rarity" className="label">
          Raridade
          <select
            id="rarity"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            className="input"
          >
            <option value="normal" key="normal">
              Normal
            </option>
            <option value="raro" key="raro">
              Raro
            </option>
            <option value="muito-raro" key="muito raro">
              Muito Raro
            </option>
          </select>
        </label>
        {hasTrunfo ? (
          <p className="label">Você já tem um Super Trunfo em seu baralho</p>
        ) : (
          <label htmlFor="trunfo" className="label">
            <input
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              id="trunfo"
              name="cardTrunfo"
              data-testid="trunfo-input"
              className="check"
            />
            Super Trunfo
          </label>
        )}
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="submit"
          name="save"
          data-testid="save-button"
          className="save-button"
        >
          Salvar
        </button>
      </section>
    );
  }
}

Inputs.propTypes = {
  formProps: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
    isSaveButtonDisabled: PropTypes.bool.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onSaveButtonClick: PropTypes.func.isRequired,
    hasTrunfo: PropTypes.bool,
  }).isRequired,
};

export default Inputs;
