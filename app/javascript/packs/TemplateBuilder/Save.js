import React from 'react'
import { connect } from 'react-redux'
import { saveTemplate } from './store/actions'
import RaisedButton from 'material-ui/RaisedButton'

const mapStateToProps = (state) => ({
  ...state.rows
})

const SaveTemplate = ({dispatch, disabled}) => (
  <RaisedButton 
    secondary={true} 
    label="Save Template"
    disabled={disabled}
    onClick={() => dispatch(saveTemplate())} />
)

export default connect(mapStateToProps)(SaveTemplate);