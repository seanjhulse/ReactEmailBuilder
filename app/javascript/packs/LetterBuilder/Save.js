import React, { Component } from 'react'
import { connect } from 'react-redux'
import { save } from './store/actions'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';

const mapStateToProps = (state) => ({
  ...state.template,
})

function mapDispatchToProps(dispatch) {
  return {
    save: () => dispatch(save()),
  }
}

class Save extends Component {
  constructor(props) {
    super(props);

    this.state = {
      snackbar: false,
    }

    this.onRequestHandler = this.onRequestHandler.bind(this);
  }

  onRequestHandler() {
    this.setState({snackbar: !this.state.snackbar})
  }

  render() {
    return (
      <span>
        <MuiThemeProvider>
          <FlatButton 
            label="Save"
            disabled={this.props.disabled}
            onClick={() => { this.props.save(); this.setState({snackbar: true}); } }  
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Snackbar
            open={this.state.snackbar}
            message="Email has been saved!"
            autoHideDuration={3500}
            onRequestClose={this.onRequestHandler}
          />
        </MuiThemeProvider>
      </span>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Save);