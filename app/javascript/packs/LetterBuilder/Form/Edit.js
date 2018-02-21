import React, {Component} from 'react';
import { connect } from 'react-redux';
import { restoreState } from '../store/actions';
import TemplatesDropDown from '../TemplatesDropDown';
import EmailFields from '../EmailFields';
import FormBuilder from './FormBuilder';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import Loading from '../../Loading';

function mapStateToProps(state) {
  console.log(state);
  return {
    id: state.Reducers.id,
    to_address: state.Reducers.to_address,
    from_address: state.Reducers.from_address,
    preview_address: state.Reducers.preview_address,
    subject: state.Reducers.subject,
    template: state.Reducers.template,
    templates: state.Reducers.templates,
    selectedPictures: state.Reducers.selectedPictures,
    preview: state.Reducers.preview,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    restoreState: (data) => dispatch(restoreState(data)),
  }
}

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      subject: '',
      to_address: '',
      from_address: '',
      preview_address: '',
      template: {},
      templates: [],
      selectedPictures: [],
      preview: false,
      loading: true,
    }
  }

  componentDidMount() {
    const { restoreState } = this.props;

    if(this.props.edit) {
      const id = this.props.id;
      fetch('/letters/' + id, {
        method: 'get',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
      .then((response) => response.json())
      .then((results) => restoreState(results[0]))
      .then(() => this.setState({loading: false}))
      .then(() => window.scrollTo(0, 0))
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      id: props.id,
      subject: props.subject,
      to_address: props.to_address,
      from_address: props.from_address,
      preview_address: props.preview_address,
      template: props.template,
      templates: props.templates,
      selectedPictures: props.selectedPictures,
      preview: props.preview,
    })
  }

  render() {
    const { template, pictures, loading } = this.state;
    console.log(template);
    const Editor = template !== '' ? <FormBuilder template={template} /> : null;

    if(loading) {
      return (
        <Loading />
      )
    } else {
      return (
        <div>
          <MuiThemeProvider>
            <Stepper activeStep={1}>
              <Step>
                <StepLabel>Design Your Layout</StepLabel>
              </Step>
              <Step>
                <StepLabel>Create Your Email</StepLabel>
              </Step>
              <Step>
                <StepLabel>Send Out the Campaign</StepLabel>
              </Step>
            </Stepper>
          </MuiThemeProvider>
          <h1>Build Your Email</h1>
          <EmailFields 
            id={this.state.id}
            subject={this.state.subject}
            preview_address={this.state.preview_address}
            to_address={this.state.to_address}
            from_address={this.state.from_address}
          />
          {Editor}
        </div>
      )
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Edit);