import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      classe,
    } = this.props;

    return (
      <div key={ `${cardName}a` } className={ classe }>
        <h3 data-testid="name-card" key={ `${cardName}b` }>{cardName}</h3>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          key={ `${cardName}c` }
        />
        <p data-testid="description-card" key={ `${cardName}d` }>{cardDescription}</p>
        <p data-testid="attr1-card" key={ `${cardName}e` }>{cardAttr1}</p>
        <p data-testid="attr2-card" key={ `${cardName}f` }>{cardAttr2}</p>
        <p data-testid="attr3-card" key={ `${cardName}g` }>{cardAttr3}</p>
        <p data-testid="rare-card" key={ `${cardName}h` }>{cardRare}</p>
        {cardTrunfo
         && (
           <p
             data-testid="trunfo-card"
             key={ `${cardName}i` }
           >
             Super Trunfo

           </p>
         )}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  classe: PropTypes.string.isRequired,
};

export default Card;
