import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from './Form/Form';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LetterApp from './store/reducers';

let store = createStore(LetterApp);

class LetterBuilder extends Component {
  render() {
    return (
      <Provider store={store}>
        <Form />
      </Provider>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('main');
  render(<LetterBuilder />,container);
});