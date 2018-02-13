import React from 'react'
import { connect } from 'react-redux'
import { save } from './store/actions'

const mapStateToProps = (state) => ({
  ...state.template
})

const Save = ({dispatch}) => (
  <button className='uw-button' onClick={() => dispatch(save(this.state))}>Save Letter</button>
)

export default connect(mapStateToProps)(Save);