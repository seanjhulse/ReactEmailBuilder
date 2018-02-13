import React, { Component } from 'react';
import { render } from 'react-dom';
import Template from './Template';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TemplateApp from './store/reducers';

let store = createStore(TemplateApp);

class TemplateBuilder extends Component {
  render() {
    return (
      <Provider store={store}>
        <Template />
      </Provider>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('main');
  render(<TemplateBuilder/>, container);
});