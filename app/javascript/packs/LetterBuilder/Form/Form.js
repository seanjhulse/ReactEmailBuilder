import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchTemplates } from '../store/actions';
import TemplatesDropDown from '../TemplatesDropDown';
import SubjectField from '../SubjectField';
import FormBuilder from './FormBuilder';

function mapStateToProps(state) {
  return {
    subject: state.Reducers.subject,
    template: state.Reducers.template,
    templates: state.Reducers.templates,
    selectedPictures: state.Reducers.selectedPictures,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTemplates: (templates) => dispatch(fetchTemplates(templates))
  }
}

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: '',
      template: -1,
      templates: [],
      selectedPictures: [],
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
    .then((results) => fetchTemplates(results));
  }

  componentWillReceiveProps(props) {
    this.setState({
      subject: props.subject,
      template: props.template,
      templates: props.templates,
      selectedPictures: props.selectedPictures,
      preview: props.preview
    })
  }

  render() {
    const { template, pictures } = this.state;

    const Editor = template !== -1 ? <FormBuilder template={template} /> : null;
    return (
      <div>
        <h1>Build Your Letter</h1>
        <SubjectField />
        <p>Choose a template</p>
        <TemplatesDropDown template={this.state.template} templates={this.state.templates}/>
        {Editor}
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);