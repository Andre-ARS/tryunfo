import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';
import Deck from './components/Deck';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      data: [],
      nameFilter: '',
      rareFilter: '',
    };

    this.inputsValidation = this.inputsValidation.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.attrValidation = this.attrValidation.bind(this);
    this.saveValidation = this.saveValidation.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  onInputChange({ target }) {
    const { name, type, checked } = target;
    let { value } = target;
    if (type === 'checkbox') value = checked;

    this.setState({
      [name]: value,
    }, this.saveValidation);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { state } = this;

    this.setState((prev) => ({ data: [...prev.data, state] }));
    if (state.cardTrunfo) this.setState({ hasTrunfo: true });
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  inputsValidation() {
    const { state: {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } } = this;
    const states = [cardName, cardDescription, cardImage, cardRare];
    const filtredStates = states.filter((state) => state !== '');

    if (filtredStates.length === states.length) return false;

    return true;
  }

  attrValidation() {
    const { state: {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } } = this;
    const max = 90;
    const sumMax = 210;
    const atributtes = [cardAttr1, cardAttr2, cardAttr3];
    const filtred = atributtes.filter((attr) => attr >= 0 && attr <= max && attr !== '');
    const sum = atributtes.map((attr) => parseFloat(attr))
      .reduce((acumulator, current) => acumulator + current);

    if (filtred.length === atributtes.length && sum <= sumMax) return false;

    return true;
  }

  saveValidation() {
    let bool = true;
    const inputReturn = this.inputsValidation();
    const attrReturn = this.attrValidation();

    if (!inputReturn && !attrReturn) bool = false;

    this.setState({
      isSaveButtonDisabled: bool,
    });
  }

  removeCard(name, trunfo) {
    const { data } = this.state;

    if (trunfo) this.setState({ hasTrunfo: false });
    this.setState(({ data: data.filter((info) => info.cardName !== name) }));
  }
  // a função removeCard foi feita com base no código da aula 11.2

  render() {
    const { state: {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      data,
      nameFilter,
      rareFilter,
    }, onInputChange, onSaveButtonClick, removeCard } = this;

    return (
      <main>
        <section className="main-container">
          <Form
            cardName={ cardName }
            onInputChange={ onInputChange }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            classe="card-preview"
          />
        </section>
        <section className="deck">
          <h2>Cartas Salvas</h2>
          <Deck onInputChange={ onInputChange } />
          <div className="card" key="card234">
            {data.filter((card) => card.cardName.includes(nameFilter))
              .filter((card) => card.cardRare.match(rareFilter))
              .map((info) => (
                <>
                  <Card { ...info } classe="card-deck" />
                  <button
                    type="button"
                    data-testid="delete-button"
                    key={ info.cardName + 2 }
                    onClick={ () => removeCard(info.cardName, info.cardTrunfo) }
                  >
                    Excluir
                  </button>
                </>
              ))}
          </div>
        </section>
      </main>
    );
  }
}

export default App;
