import React from 'react'
import { connect } from 'react-redux'
import { openDialog } from '../store/actions'
import RaisedButton from 'material-ui/RaisedButton';
import { styles } from '../../Styles'

const mapStateToProps = (state) => ({
  ...state.open
})

const OpenDialog = ({dispatch, rowKey, columnKey}) => {
  return (
    <RaisedButton 
      onClick={() => dispatch(openDialog(rowKey, columnKey))} 
    >
      <i className="mi md-dark md-24 material-icons">add_a_photo</i>
    </RaisedButton>
  )
}

export default connect(mapStateToProps)(OpenDialog);