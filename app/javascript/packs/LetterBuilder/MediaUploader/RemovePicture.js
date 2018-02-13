import React from 'react'
import { connect } from 'react-redux'
import { deletePicture } from '../store/actions'
import RaisedButton from 'material-ui/RaisedButton';

const mapStateToProps = (state) => ({
  ...state.selectedPicture
})

const RemovePicture = ({dispatch, rowKey, columnKey}) => {
  return (
    <RaisedButton
      key="RemovePhotoFromColumn"
      label="Remove"
      secondary={true}
      className="removePhotoButton"
      onClick={() => { dispatch(deletePicture(rowKey, columnKey)) } }
    />
  )
}

export default connect(mapStateToProps)(RemovePicture);