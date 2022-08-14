import React, { Component } from 'react';
import PropTypes from 'prop-types';
import tryunfo from '../images/tryunfo.svg';

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
    } = this.props;

    return (
      <div key={ `${cardName}a` } className={ `card-preview ${cardRare}` }>
        <h3 data-testid="name-card" key={ `${cardName}b` } className="name-title">
          {cardName}
        </h3>
        <div className="img-container">
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            key={ `${cardName}c` }
          />
          {cardTrunfo && (
            <div
              data-testid="trunfo-card"
              key={ `${cardName}i` }
              className="logo1"
            >
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="72" height="72" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_2_557"
                      transform="scale(0.00320513)"
                    />
                  </pattern>
                  <image
                    id="image0_2_557"
                    width="312"
                    height="312"
                    xlinkHref={ tryunfo }
                  />
                </defs>
              </svg>
            </div>
          )}
        </div>
        <p
          data-testid="description-card"
          key={ `${cardName}d` }
          className="description-card"
        >
          {cardDescription}
        </p>
        <div className="attr-container">
          <div className="card-attr">
            <p data-testid="attr1-card" key={ `${cardName}e` }>
              Attr 1.............................
              <span>{cardAttr1}</span>
            </p>
          </div>
          <div className="card-attr">
            <p data-testid="attr2-card" key={ `${cardName}f` }>
              Attr 2.............................
              <span>{cardAttr2}</span>
            </p>
          </div>
          <div className="card-attr">
            <p data-testid="attr3-card" key={ `${cardName}g` }>
              Attr 3.............................
              <span>{cardAttr3}</span>
            </p>
          </div>
        </div>
        <p data-testid="rare-card" key={ `${cardName}h` } className="rare-card">
          {cardRare}
        </p>
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
};

export default Card;
