import React from 'react'
import { connect } from 'react-redux'
import { preview } from '../store/actions'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const mapStateToProps = (state) => ({
  ...state.template
})

const PreviewButton = ({dispatch}) => (
  <MuiThemeProvider>
    <RaisedButton 
      label="Preview"
      onClick={() => dispatch(preview())}  
    />
  </MuiThemeProvider>
)

export default connect(mapStateToProps)(PreviewButton);