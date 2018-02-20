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
  }

  render() {
    return (
      <span>
        <MuiThemeProvider>
          <FlatButton 
            label="Save"
            onClick={() => { this.props.save(); this.setState({snackbar: true}) } }  
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Snackbar
            open={this.state.snackbar}
            message="Email has been saved!"
            autoHideDuration={3500}
          />
        </MuiThemeProvider>
      </span>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Save);