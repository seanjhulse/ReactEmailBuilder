import React, { Component } from 'react';
import { render } from 'react-dom';
import Template from './Template';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TemplateApp from './store/reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

let store = createStore(TemplateApp);

class TemplateBuilder extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Template />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('main');
  render(<TemplateBuilder/>, container);
});