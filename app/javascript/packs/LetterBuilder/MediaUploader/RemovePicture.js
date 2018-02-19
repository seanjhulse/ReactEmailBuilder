import React from 'react'
import { connect } from 'react-redux'
import { deletePicture } from '../store/actions'
import RaisedButton from 'material-ui/RaisedButton'
import { styles } from '../../Styles'

const mapStateToProps = (state) => ({
  ...state.selectedPicture
})

const RemovePicture = ({dispatch, rowKey, columnKey, disabled}) => {
  return (
    <RaisedButton
      key="RemovePhotoFromColumn"
      className="removePhotoButton"
      disabled={disabled}
      onClick={() => { dispatch(deletePicture(rowKey, columnKey)) } }
    >
      <i className="mi md-dark material-icons">delete_forever</i>
    </RaisedButton>
  )
}

export default connect(mapStateToProps)(RemovePicture);