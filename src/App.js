import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

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
    };

    this.inputsValidation = this.inputsValidation.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.attrValidation = this.attrValidation.bind(this);
    this.saveValidation = this.saveValidation.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
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
    }, onInputChange, onSaveButtonClick } = this;

    return (
      <main className="main-container">
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
        />
      </main>
    );
  }
}

export default App;
