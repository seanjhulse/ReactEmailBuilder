import React from 'react'
import { connect } from 'react-redux'
import { openDialog } from '../store/actions'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { styles } from '../../Styles'

const mapStateToProps = (state) => ({
  ...state.open
})

const OpenDialog = ({dispatch, rowKey, columnKey}) => {
  return (
    <FloatingActionButton 
      onClick={() => dispatch(openDialog(rowKey, columnKey))} 
      mini={true}      
    >
      <i className="mi md-dark md-24 material-icons">add_a_photo</i>
    </FloatingActionButton>
  )
}

export default connect(mapStateToProps)(OpenDialog);