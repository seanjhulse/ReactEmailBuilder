import React from 'react'
import { connect } from 'react-redux'
import { changeName } from './store/actions'

const mapStateToProps = (state) => ({
  ...state.rows
})

const NameField = ({dispatch}) => (
  <form>
    <label>Template Name</label>
    <input type="text" onChange={(e) => dispatch(changeName(e.target.value))} />
  </form>
)

export default connect(mapStateToProps)(NameField);