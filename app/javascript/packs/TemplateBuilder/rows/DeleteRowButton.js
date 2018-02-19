import React from 'react'
import { connect } from 'react-redux'
import { deleteRow } from '../store/actions'
import FlatButton from 'material-ui/FlatButton'

const mapStateToProps = (state) => ({
  ...state.rows
})

const DeleteButton = ({dispatch, uniqueId}) => (
  <FlatButton 
    label="Delete Row"
    className="deleteRowButton"
    onClick={() => dispatch(deleteRow(uniqueId))} />
)


export default connect(mapStateToProps)(DeleteButton);