import React, {Component} from 'react';
import { connect } from 'react-redux';
import { restoreState } from '../store/actions';
import TemplatesDropDown from '../TemplatesDropDown';
import EmailFields from '../EmailFields';
import FormBuilder from './FormBuilder';

function mapStateToProps(state) {
  return {
    to_address: state.Reducers.to_address,
    from_address: state.Reducers.from_address,
    preview_address: state.Reducers.preview_address,
    subject: state.Reducers.subject,
    template: state.Reducers.template,
    templates: state.Reducers.templates,
    selectedPictures: state.Reducers.selectedPictures,
    preview: state.Reducers.preview
  }
}

function mapDispatchToProps(dispatch) {
  return {
    restoreState: (data) => dispatch(restoreState(data))
  }
}

class Edit extends Component {
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
      .then((results) => restoreState(results));
    }
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
      preview: props.preview
    })
  }

  render() {
    const { template, pictures } = this.state;
    const Editor = template !== -1 ? <FormBuilder template={template} /> : null;
    return (
      <div>
        <h1>Build Your Email</h1>
        <EmailFields 
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

export default connect(mapStateToProps,mapDispatchToProps)(Edit);