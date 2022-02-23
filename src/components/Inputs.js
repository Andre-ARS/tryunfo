import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        onSaveButtonClick },
    } = this.props;

    return (
      <>
        <label htmlFor="card-name">
          Nome
          <input
            type="text"
            id="card-name"
            name="card-name"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            id="description"
            name="description"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="att-1">
          Attr 1
          <input
            type="number"
            id="att-1"
            name="att-1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="att-2">
          Attr 2
          <input
            type="number"
            id="att-2"
            name="att-2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="att-3">
          Attr 3
          <input
            type="number"
            id="att-3"
            name="att-3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            type="text"
            id="image"
            name="image"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select
            id="rarity"
            name="rarity"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal" key="normal">normal</option>
            <option value="raro" key="raro">raro</option>
            <option value="muito raro" key="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            id="trunfo"
            name="trunfo"
            data-testid="trunfo-input"
          />
          Super Trunfo
        </label>
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="submit"
          name="save"
          data-testid="save-button"
        >
          Salvar

        </button>
      </>
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
  }).isRequired,
};

export default Inputs;
