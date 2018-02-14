import React from 'react'
import { connect } from 'react-redux'
import { save } from './store/actions'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const mapStateToProps = (state) => ({
  ...state.template
})

const Save = ({dispatch}) => (
  <MuiThemeProvider>
    <RaisedButton 
      label="Save"
      onClick={() => dispatch(save())}  
    />
  </MuiThemeProvider>)

export default connect(mapStateToProps)(Save);