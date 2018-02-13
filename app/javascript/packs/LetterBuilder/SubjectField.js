import React from 'react'
import { connect } from 'react-redux'
import { changeSubject } from './store/actions'

const mapStateToProps = (state) => ({
  ...state.rows
})

const SubjectField = ({dispatch}) => (
  <form>
    <label>Subject of the Email</label>
    <input type="text" onChange={(e) => dispatch(changeSubject(e.target.value))} />
  </form>
)

export default connect(mapStateToProps)(SubjectField);