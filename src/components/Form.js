import React, { Component } from 'react';
import Inputs from './Inputs';

class Form extends Component {
  render() {
    return (
      <form>
        <Inputs formProps={ this.props } />
      </form>
    );
  }
}

export default Form;
