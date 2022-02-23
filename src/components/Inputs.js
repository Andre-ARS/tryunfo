import React, { Component } from 'react';
// import PropType from 'prop-types';

class Inputs extends Component {
  render() {
    return (
      <>
        <label htmlFor="card-name">
          Nome
          <input type="text" id="card-name" name="card-name" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            id="description"
            name="description"
            data-testid="description-input"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="att-1">
          Attr 1
          <input type="number" id="att-1" name="att-1" data-testid="attr1-input" />
        </label>
        <label htmlFor="att-2">
          Attr 2
          <input type="number" id="att-2" name="att-2" data-testid="attr2-input" />
        </label>
        <label htmlFor="att-3">
          Attr 3
          <input type="number" id="att-3" name="att-3" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Imagem
          <input type="text" id="image" name="image" data-testid="image-input" />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select id="rarity" name="rarity" data-testid="rare-input">
            <option value="normal" key="normal">normal</option>
            <option value="raro" key="raro">raro</option>
            <option value="muito raro" key="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input type="checkbox" id="trunfo" name="trunfo" data-testid="trunfo-input" />
          Super Trunfo
        </label>
        <button type="submit" name="save" data-testid="save-button">Salvar</button>
      </>
    );
  }
}

export default Inputs;
