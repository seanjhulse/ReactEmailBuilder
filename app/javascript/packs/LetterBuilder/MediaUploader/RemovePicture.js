import React from 'react'
import { connect } from 'react-redux'
import { deletePicture } from '../store/actions'
import RaisedButton from 'material-ui/RaisedButton';

const mapStateToProps = (state) => ({
  ...state.selectedPicture
})

const RemovePicture = ({dispatch}) => {
  return (
    <RaisedButton
      key="RemovePhotoFromColumn"
      label="Remove"
      secondary={true}
      onClick={() => { dispatch(deletePicture()) } }
    />
  )
}

export default connect(mapStateToProps)(RemovePicture);