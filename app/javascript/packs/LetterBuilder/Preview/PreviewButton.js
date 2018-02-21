import React, { Component } from 'react'
import { connect } from 'react-redux'
import { preview } from '../store/actions'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Snackbar from 'material-ui/Snackbar'

const mapStateToProps = (state) => ({
  ...state.preview_addresses
})

function mapDispatchToProps(dispatch) {
  return {
    preview: () => dispatch(preview()),
  }
}

class PreviewButton extends Component {
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
            data-confirm="Are you sure you want to send out this e-mail to your preview address(es)?"
            label="Preview"
            disabled={this.props.disabled}
            onClick={() => { this.props.preview(); this.setState({snackbar: true}) } }  
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Snackbar
            open={this.state.snackbar}
            message="Emails have been sent out to everyone on the preview list"
            autoHideDuration={3500}
          />
        </MuiThemeProvider>
      </span>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewButton);