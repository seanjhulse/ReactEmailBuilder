import React from 'react'
import { connect } from 'react-redux'
import { openDialog } from '../store/actions'
import RaisedButton from 'material-ui/RaisedButton';

const mapStateToProps = (state) => ({
  ...state.open
})

const OpenDialog = ({dispatch, rowKey, columnKey}) => {
  return (
    <RaisedButton 
      primary={true}
      label="Add or Change Photo"
      onClick={() => dispatch(openDialog(rowKey, columnKey))} />
  )
}

export default connect(mapStateToProps)(OpenDialog);