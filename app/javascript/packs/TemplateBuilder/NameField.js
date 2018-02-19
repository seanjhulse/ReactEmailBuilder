import React from 'react'
import { connect } from 'react-redux'
import { changeName } from './store/actions'
import TextField from 'material-ui/TextField'

const mapStateToProps = (state) => ({
  ...state.rows
})

const NameField = ({dispatch}) => (
  <TextField
    floatingLabelText="Template Name:"
    hintText="Name of Your Template"
    onChange={(e) => dispatch(changeName(e.target.value))}      
  />
)

export default connect(mapStateToProps)(NameField);