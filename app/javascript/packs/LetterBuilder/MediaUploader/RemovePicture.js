import React from 'react'
import { connect } from 'react-redux'
import { deletePicture } from '../store/actions'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import { styles } from '../../Styles'

const mapStateToProps = (state) => ({
  ...state.selectedPicture
})

const RemovePicture = ({dispatch, rowKey, columnKey}) => {
  return (
    <FloatingActionButton
      key="RemovePhotoFromColumn"
      className="removePhotoButton"
      backgroundColor={styles.RaisedButton.removeImage.backgroundColor}
      mini={true}
      onClick={() => { dispatch(deletePicture(rowKey, columnKey)) } }
    >
      <i className="mi md-dark material-icons">delete_forever</i>
    </FloatingActionButton>
  )
}

export default connect(mapStateToProps)(RemovePicture);