import React from 'react'
import { connect } from 'react-redux'
import { save } from './store/actions'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const mapStateToProps = (state) => ({
  ...state.template
})

const Save = ({dispatch}) => (
  <MuiThemeProvider>
    <FlatButton 
      label="Save"
      onClick={() => dispatch(save())}  
    />
  </MuiThemeProvider>)

export default connect(mapStateToProps)(Save);