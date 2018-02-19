import React from 'react'
import { connect } from 'react-redux'
import { saveStyle } from '../store/actions'
import FlatButton from 'material-ui/FlatButton'

const mapStateToProps = (state) => ({
  ...state.pickedStyle
})

const StylesPickerActions = ({dispatch, handleDialog}) => {

  const actions = [
    <FlatButton
      key="CloseStylesDialog"
      label="Cancel"
      primary={true}
      onClick={() => handleDialog() }
    />,
    <FlatButton
      key="CloseDialogAndPickStyle"
      label="Submit"
      primary={true}
      onClick={() => {handleDialog(); dispatch(saveStyle());} }
    />,
  ];

  return actions;
}

export default connect(mapStateToProps)(StylesPickerActions);