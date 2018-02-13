import React from 'react'
import { connect } from 'react-redux'
import { deleteRow } from '../store/actions'


const mapStateToProps = (state) => ({
  ...state.rows
})

const DeleteButton = ({dispatch, uniqueId}) => (
  <div>
    <button className="uw-button deleteRowButton" onClick={() => dispatch(deleteRow(uniqueId))}>Delete Row</button>
  </div>
)


export default connect(mapStateToProps)(DeleteButton);