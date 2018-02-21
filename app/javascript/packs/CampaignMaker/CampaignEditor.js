import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  loadCampaign, 
  loadLetter,
  loadSubscribers,
  mutateSubscriberId,
  mutateFromAddress,
  mutateSubject,
  mutateCampaignName,

  save,
  send
} from './store/actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper'
import { 
  Card, 
  CardActions, 
  CardHeader, 
  CardMedia, 
  CardTitle, 
  CardText 
} from 'material-ui/Card'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

function mapStateToProps(state) {

  return {
    subject: state.Reducers.subject,
    from_address: state.Reducers.from_address,
    campaign_name: state.Reducers.campaign_name,
    letter_id: state.Reducers.letter_id,
    subscriber_id: state.Reducers.subscriber_id,

    subscriber_lists: state.Reducers.subscriber_lists,
    letter: state.Reducers.letter,
  }

}

function mapDispatchToProps(dispatch) {
  return {
    loadCampaign: (id) => dispatch(loadCampaign(id)),
    loadLetter: (letter) => dispatch(loadLetter(letter)),
    loadSubscribers: (subscribers) => dispatch(loadSubscribers(subscribers)),
    mutateSubscriberId: (id) => dispatch(mutateSubscriberId(id)),
    mutateFromAddress: (address) => dispatch(mutateFromAddress(address)),
    mutateSubject: (subject) => dispatch(mutateSubject(subject)),
    mutateCampaignName: (name) => dispatch(mutateCampaignName(name)),
    save: () => dispatch(save()),
    send: () => dispatch(send())
  }
}

class CampaignEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      from_address: 'chancellor@uc.wisc.edu',
      campaign_name: '',
      subject: '',
      letter_id: '',
      subscriber_id: 0,
  
      subscriber_lists: [],
      letter: {},

      idIsValid: true,
    }
  }

  componentDidMount() {
    const { loadCampaign, loadLetter, loadSubscribers } = this.props;

    if(this.props.id === '' || this.props.id === undefined) {
      this.setState({idIsValid: false});
    }

    fetch('/campaigns/' + this.props.id, {
      method: 'get',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }) 
    .then((response) => response.json())
    .then((campaign) => loadCampaign(campaign))
    .then(() => {
      fetch('/letters/' + this.state.letter_id, {
        method: 'get',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
      .then((response) => response.json())
      .then((letter) => loadLetter(letter))
    })

    fetch('/subscribers', {
      method: 'get',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    .then((response) => response.json())
    .then((subscribers) => loadSubscribers(subscribers))
  }

  componentWillReceiveProps(props) {
    this.setState({
      id: props.id,
      subject: props.subject,
      from_address: props.from_address,
      campaign_name: props.campaign_name,
      letter_id: props.letter_id,
      subscriber_id: props.subscriber_id,
  
      subscriber_lists: props.subscriber_lists,
      letter: props.letter,
    })
  }

  render() {
  
    const { id, subject, from_address, campaign_name, letter_id, subscriber_id, letter, subscriber_lists } = this.state;
    const { mutateSubscriberId, mutateFromAddress, mutateSubject, mutateCampaignName, save, send } = this.props;

    var Result = (
      <div>
        <h1>Campaign Maker</h1>
        <MuiThemeProvider>
          <Stepper activeStep={2}>
            <Step>
              <StepLabel>Design Your Layout</StepLabel>
            </Step>
            <Step>
              <StepLabel>Create Your Email</StepLabel>
            </Step>
            <Step>
              <StepLabel>Create Your Campaign</StepLabel>
            </Step>
          </Stepper>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Card>
            <CardHeader 
              title={"Campaign"}
            />
            <CardText>
              <TextField
                underlineShow={true}
                hintText={"Campaign Name"}
                value={campaign_name} 
                onChange={(e) => mutateCampaignName(e.target.value)}       
              />
            </CardText>
          </Card>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Card>
            <CardHeader
              title={"Email"}
              subtitle={"WARNING: this information will be sent to everyone that you email! Be careful what you choose!"}
              subtitleStyle={{color: 'red'}}
            />
            <CardText>
              <SelectField 
                floatingLabelText="To:"
                value={subscriber_id} 
                onChange={(event, index, value) => mutateSubscriberId(value)}
              >
                <MenuItem key={0} value={null} primaryText={""} />
                {
                  subscriber_lists !== undefined && subscriber_lists.length > 0 ?
                  
                  subscriber_lists.map((subscriber) => {
                    return <MenuItem key={subscriber.id} value={subscriber.id} primaryText={subscriber.name} />
                  })

                  :

                  null
                }
              </SelectField>
              <br/>
              <TextField
                underlineShow={true}
                hintText={"MyEmail@wisc.edu"}
                floatingLabelText="From:"
                value={from_address}
                onChange={(e) => mutateFromAddress(e.target.value)}       
              />
              <br/>
              <TextField
                underlineShow={true}
                hintText={"A Message from the Chancellor"}
                floatingLabelText="Subject: "
                value={subject}
                onChange={(e) => mutateSubject(e.target.value)}       
              />
            </CardText>
            <CardText>
              This campaign will be sending out... {letter.subject !== undefined 
                ? 
                <a href={`/letters/${letter.id}/edit`} target="_blank">
                  {letter.subject}
                </a> 
                : 
                ''}
            </CardText>
            <CardActions>
              <FlatButton 
                label="Save"
                onClick={() => save()}
              />
              <FlatButton 
                label="Send"
                style={{backgroundColor: 'red', color: 'white'}}
                onClick={() => send()}
              />
            </CardActions>
          </Card>
        </MuiThemeProvider>
      </div>
    )

    if(!this.state.idIsValid) {
      var Result = (
        <div>
          <h1>Campaign Maker</h1>
          <p>Campaign ID is not valid</p>
        </div>
      ) 
    }

    return (
      <div>
        {Result}
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CampaignEditor);