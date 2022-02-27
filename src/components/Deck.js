import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Deck.css';

class Deck extends Component {
  render() {
    const { onInputChange, disabled } = this.props;
    return (
      <div className="filter-container">
        <h2>Filtros de Busca</h2>
        <label htmlFor="name-filter" className="label">
          <input
            type="text"
            name="nameFilter"
            id="name-filter"
            data-testid="name-filter"
            placeholder="Nome da Carta"
            onChange={ onInputChange }
            disabled={ disabled }
            className="input"
          />
        </label>
        <label htmlFor="filter-rare" className="label">
          <select
            name="rareFilter"
            id="filter-rare"
            data-testid="rare-filter"
            onChange={ onInputChange }
            disabled={ disabled }
            className="input"
          >
            <option value="todas" key="all">Todas</option>
            <option value="normal" key="normal">Normal</option>
            <option value="raro" key="rare">Raro</option>
            <option value="muito-raro" key="very rare">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-filter" className="label">
          <input
            type="checkbox"
            name="trunfoFilter"
            id="trunfo-filter"
            data-testid="trunfo-filter"
            onChange={ onInputChange }
            className="check"
          />
          Super Trunfo
        </label>
      </div>
    );
  }
}

Deck.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Deck;
