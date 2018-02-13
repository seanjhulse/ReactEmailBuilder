import React from 'react'
import Picture from './Picture'
import { connect } from 'react-redux'
import { addPicture, closeDialog } from '../store/actions'
import FlatButton from 'material-ui/FlatButton';

const mapStateToProps = (state) => ({
  ...state.selectedPicture
})

const MediaFormActions = ({dispatch}) => {
    const actions = [
      <FlatButton
        key="CloseDialog"
        label="Cancel"
        primary={true}
        onClick={() => {dispatch(closeDialog())}}
      />,
      <FlatButton
        key="CloseDialogAndSavePicture"
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={() => {dispatch(addPicture()); dispatch(closeDialog()) } }
      />,
    ];

    return actions;
}

export default connect(mapStateToProps)(MediaFormActions);