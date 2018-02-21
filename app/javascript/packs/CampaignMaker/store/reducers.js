import {
  LOAD_CAMPAIGN,
  LOAD_LETTER,
  LOAD_SUBSCRIBERS,
  MUTATE_SUBSCRIBER_ID,
  MUTATE_FROM_ADDRESS,
  MUTATE_SUBJECT,
  MUTATE_CAMPAIGN_NAME,

  SAVE,
  SEND
} from './actions'
import { combineReducers } from 'redux'
import update from 'immutability-helper'

const initialState = {
  id: '',
  from_address: '',
  letter_id: '',
  subscriber_id: 0,
  campaign_name: '',
  subject: '',

  subscriber_lists: [],
  letter: {},
}

function Reducers(state = initialState, action) {
  switch (action.type) {


    case LOAD_CAMPAIGN:
      const campaign = action.campaign;
      return Object.assign({}, state, { 
        id: campaign.id,
        from_address: campaign.from_address,
        letter_id: campaign.letter_id,
        subscriber_id: campaign.subscriber_id,
        campaign_name: campaign.name,
        subject: campaign.subject
      })




    case LOAD_LETTER:
      const letter = action.letter;
      return Object.assign({}, state, { 
        letter: letter
      })




    case LOAD_SUBSCRIBERS:
      const subscribers = action.subscribers
      return Object.assign({}, state, { 
        subscriber_lists: subscribers
      })



    case MUTATE_SUBSCRIBER_ID:
      const id = action.id
      return Object.assign({}, state, { 
        subscriber_id: id
      })




    case MUTATE_FROM_ADDRESS:
      const address = action.address
      return Object.assign({}, state, { 
        from_address: address
      })



    case MUTATE_SUBJECT:
      const subject = action.subject 
      return Object.assign({}, state, { 
        subject: subject
      })



    case MUTATE_CAMPAIGN_NAME:
      const name = action.name
      return Object.assign({}, state, { 
        campaign_name: name
      })




    case SAVE:
      const temp_campaign = JSON.stringify({campaign: state});
      fetch('/campaigns/' + temp_campaign.id, {
        method: 'put',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: temp_campaign
      }) 
      .then((response) => console.log(response))

      return state;




    case SEND:
      const results = confirm('ARE YOU SURE YOU WANT TO SEND THIS EMAIL?');

      if(results){
        const campaign_id = state.id
        fetch('/campaigns/' + campaign_id + '/send', {
          method: 'put',
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(() => console.log("SENT EMAIL"));
      }

      return state;

    default:
      return state
  }
}



const CampaignApp = combineReducers({
  Reducers,
});


export default CampaignApp;