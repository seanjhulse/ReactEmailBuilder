import React from 'react'
import { connect } from 'react-redux'
import { saveTemplate } from './store/actions'

const mapStateToProps = (state) => ({
  ...state.rows
})

const SaveTemplate = ({dispatch}) => (
  <button className='uw-button' onClick={() => dispatch(saveTemplate())}>Save Template</button>
)

export default connect(mapStateToProps)(SaveTemplate);