import React from 'react'
import { connect } from 'react-redux'
import { addRow } from '../store/actions'

const mapStateToProps = (state) => ({
  ...state.rows
})

const AddRowButtons = ({dispatch}) => (
  <div>
    <button className="uw-button" onClick={() => dispatch(addRow(1))}>1 - Column</button><br/><br/>
    <button className="uw-button" onClick={() => dispatch(addRow(2))}>2 - Column</button><br/><br/>
    <button className="uw-button" onClick={() => dispatch(addRow(3))}>3 - Column</button><br/><br/>
  </div>
)



export default connect(mapStateToProps)(AddRowButtons);