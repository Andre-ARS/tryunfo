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
      </div>
    );
  }
}

Deck.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default Deck;
