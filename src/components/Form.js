import React, { Component } from 'react';
import './Form.css';
import Inputs from './Inputs';

class Form extends Component {
  render() {
    return (
      <form className="form-container">
        <h2>Adicionar Carta</h2>
        <Inputs formProps={ this.props } />
      </form>
    );
  }
}

export default Form;
