import React, { Component } from 'react';
import { render } from 'react-dom';
import Edit from './Form/Edit';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LetterApp from './store/reducers';

let store = createStore(LetterApp);

class LetterEditor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Edit 
          edit={true}
          id={this.props.id}
        />
      </Provider>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('letter_data');
  const data = JSON.parse(node.getAttribute('data'));
  const container = document.getElementById('main');

  render(<LetterEditor 
            id={data.id}
          />,container);
});