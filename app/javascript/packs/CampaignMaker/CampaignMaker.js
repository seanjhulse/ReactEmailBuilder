import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import CampaignApp from './store/reducers'
import CampaignEditor from './CampaignEditor'


let store = createStore(CampaignApp);

class CampaignMaker extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <CampaignEditor 
          id={this.props.id}
        />
      </Provider>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('campaign_data');
  const data = JSON.parse(node.getAttribute('data'));
  const container = document.getElementById('main');

  render(<CampaignMaker
            id={data.id}
          />,container);
});