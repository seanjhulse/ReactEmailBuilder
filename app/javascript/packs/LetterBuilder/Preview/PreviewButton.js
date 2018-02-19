import React from 'react'
import { connect } from 'react-redux'
import { preview } from '../store/actions'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const mapStateToProps = (state) => ({
  ...state.template
})

const PreviewButton = ({dispatch, disabled}) => (
  <MuiThemeProvider>
    <FlatButton 
      label="Preview"
      disabled={disabled}
      onClick={() => dispatch(preview())}  
    />
  </MuiThemeProvider>
)

export default connect(mapStateToProps)(PreviewButton);