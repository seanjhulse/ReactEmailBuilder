import React from 'react'
import { connect } from 'react-redux'
import { changeSubject } from './store/actions'

const mapStateToProps = (state) => ({
  ...state.Reducers.subject
})

const SubjectField = ({dispatch, subject}) => {

  return (
    <form>
      <label>Subject</label>
      <input type="text" value={subject} onChange={(e) => dispatch(changeSubject(e.target.value))} />
    </form>
  )
}

export default connect(mapStateToProps)(SubjectField);