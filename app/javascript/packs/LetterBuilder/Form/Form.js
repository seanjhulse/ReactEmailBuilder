import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchTemplates } from '../store/actions';
import TemplatesDropDown from '../TemplatesDropDown';
import Save from '../Save';
import FormBuilder from './FormBuilder';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import Loading from '../../Loading';

function mapStateToProps(state) {
  return {
    to_address: state.Reducers.to_address,
    from_address: state.Reducers.from_address,
    preview_address: state.Reducers.preview_address,
    subject: state.Reducers.subject,
    template: state.Reducers.template,
    templates: state.Reducers.templates,
    selectedPictures: state.Reducers.selectedPictures,
    preview: state.Reducers.preview,
    loading: state.Reducers.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTemplates: (templates) => dispatch(fetchTemplates(templates)),
  }
}

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: '',
      to_address: '',
      from_address: '',
      preview_address: '',
      template: -1,
      templates: [],
      selectedPictures: [],
      preview: false,
      loading: true,
    }
  }

  componentDidMount() {
    const { fetchTemplates } = this.props;
    fetch('/templates', {
      method: 'get',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    })
    .then((response) => response.json())
    .then((results) => fetchTemplates(results))
    .then(() => this.setState({loading: false}))
    .then(() => window.scrollTo(0, 0))
  }

  componentWillReceiveProps(props) {
    this.setState({
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
      // const Editor = template !== -1 ? <FormBuilder template={template} /> : null;

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
                <StepLabel>Choose Your Template</StepLabel>
              </Step>
              <Step>
                <StepLabel>Create Your Email</StepLabel>
              </Step>
            </Stepper>
          </MuiThemeProvider>
          <h1>Choose a Template for Your Letter</h1>
          <TemplatesDropDown template={this.state.template} templates={this.state.templates}/>
          <br/>
          <Save />
        </div>
      )
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);