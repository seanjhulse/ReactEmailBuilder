import React from 'react'
import { connect } from 'react-redux'
import { pickStyle } from '../store/actions'

const mapStateToProps = (state) => ({
  ...state.pickedStyle
})

const StylesOption = ({dispatch, pickedStyle, style}) => {

  return (
    <li key={pickedStyle} className="pickedStyle stylesListItem" style={style} onClick={() => {dispatch(pickStyle(pickedStyle))} }>
      <div className={pickedStyle.toLowerCase().split(' ').join('_')}>{pickedStyle}</div>
    </li>
  )
}

export default connect(mapStateToProps)(StylesOption);