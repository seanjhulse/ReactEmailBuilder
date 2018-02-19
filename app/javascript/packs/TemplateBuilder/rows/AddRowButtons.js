import React from 'react'
import { connect } from 'react-redux'
import { addRow } from '../store/actions'
import RaisedButton from 'material-ui/RaisedButton'

const mapStateToProps = (state) => ({
  ...state.rows
})

const AddRowButtons = ({dispatch}) => (
  <div>
    <RaisedButton 
      primary={true} 
      label="1 x 1 Row"
      onClick={() => dispatch(addRow(1))} /><br/><br/>
    <RaisedButton 
      primary={true} 
      label="2 x 1 Row"
      onClick={() => dispatch(addRow(2))} /><br/><br/>
    <RaisedButton 
      primary={true} 
      label="3 x 1 Row"
      onClick={() => dispatch(addRow(3))} /><br/><br/>
  </div>
)



export default connect(mapStateToProps)(AddRowButtons);