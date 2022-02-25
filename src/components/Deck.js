import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Deck extends Component {
  render() {
    const { onInputChange } = this.props;
    return (
      <div className="filters">
        <h3>Filtros de Busca</h3>
        <label htmlFor="name-filter" className="label">
          <input
            type="text"
            name="nameFilter"
            id="name-filter"
            data-testid="name-filter"
            placeholder="Nome da Carta"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="filter-rare">
          <select
            name="filterRare"
            id="filter-rare"
            data-testid="rare-filter"
            onChange={ onInputChange }
          >
            <option value="''" key="all">Todas</option>
            <option value="normal" key="normal">Normal</option>
            <option value="raro" key="rare">Raro</option>
            <option value="muito raro" key="very rare">Muito Raro</option>
          </select>
        </label>
      </div>
    );
  }
}

Deck.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default Deck;
